import { useState, useEffect, useCallback } from "react"
import { useParams } from "react-router"
import { useDispatch, twitterApi, twitterSliceActions } from "../store"
import TwitterContainer from "../components/twitter/TwitterContainer"
import TweetCard from "../components/twitter/card/TweetCard"
import TweetInput from "../components/twitter/TweetInput"
import requestHandler from "../utils/requestHandler"
import CircularLoader from "../components/loading/component/CircularLoader"
import TwitterFeed from "../components/twitter/TwitterFeed"

const Tweet = () => {
  const dispatch = useDispatch()
  const { tweetId } = useParams()
  const [tweet, setTweet] = useState(null)
  const [comments, setComments] = useState(null)
  const [getTweet] = twitterApi.useLazyGetTweetQuery()
  const [getComments] = twitterApi.useLazyGetCommentsQuery()

  const refetch = useCallback(async () => {
    setComments(null)
    await requestHandler(getComments({ tweetId }).unwrap(), "fetching comments", "comments fetched").then(({ data }) => setComments(data))
  }, [tweetId])

  const tweetLikeHandler = useCallback(async (tweetId, liked) =>
    setTweet((pv) => ({ ...pv, isLiked: liked }))
    , [])

  const commentsLikeHandler = useCallback(async (tweetId, liked) =>
    setComments((pv) => pv.map(feedItem => {
      const newFeedItem = { ...feedItem }
      if (feedItem.tweet.id === tweetId) newFeedItem.isTweetLiked = liked
      if (feedItem?.parentTweet?.id === tweetId) newFeedItem.isParentTweetLiked = liked
      return newFeedItem
    }))
    , [])

  useEffect(() => {
    setTweet(null) // to unset tweet in case of page change (comments get unset in refetch)
    requestHandler(getTweet({ tweetId }).unwrap(), "fetching tweet", "tweet fetched").then(({ data }) => setTweet(data))
    refetch()
  }, [tweetId])

  useEffect(() => () => dispatch(twitterSliceActions.resetParentTweetList()), [])

  const onComplete = ({ data }) => setComments((pv) => [{ tweet: data }, ...pv])

  return (
    <TwitterContainer heading="tweet" refetch={refetch}>
      {tweet ? <TweetCard tweet={tweet} likeHandler={tweetLikeHandler} /> : <CircularLoader />}

      <TweetInput parentTweetId={tweetId} onComplete={onComplete} disabled={!Boolean(comments)} />

      <TwitterFeed feed={comments} likeHandler={commentsLikeHandler} emptyText="no reply" />

    </TwitterContainer>
  )
}

export default Tweet
