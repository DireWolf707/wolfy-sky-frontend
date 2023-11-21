import { useState, useEffect, useCallback } from "react"
import { useLocation } from "react-router-dom"
import { twitterApi } from "../store"
import TwitterContainer from "../components/twitter/TwitterContainer"
import TweetInput from "../components/twitter/TweetInput"
import requestHandler from "../utils/requestHandler"
import TwitterFeed from "../components/twitter/TwitterFeed"

const Feed = () => {
  const { state } = useLocation()
  const [feed, setFeed] = useState(null)
  const [getFeed] = twitterApi.useLazyGetFeedQuery()

  const refetch = useCallback(async () => {
    setFeed(null)
    await requestHandler(getFeed().unwrap(), "fetching feed", "feed fetched").then(({ data }) => setFeed(data))
  }, [])

  const likeHandler = useCallback(async (tweetId, liked) =>
    setFeed((pv) => pv.map(feedItem => {
      const newFeedItem = { ...feedItem }
      if (feedItem.tweet.id === tweetId) newFeedItem.isTweetLiked = liked
      if (feedItem?.parentTweet?.id === tweetId) newFeedItem.isParentTweetLiked = liked
      return newFeedItem
    }))
    , [])

    const onComplete = ({ data }) => setFeed((pv) => [{ tweet: data }, ...pv])

    useEffect(() => {
      refetch()
    }, [])

    useEffect(() => {
      if(state && feed) onComplete(state)
    }, [state])

  return (
    <TwitterContainer heading="home" refetch={refetch}>
      <TweetInput onComplete={onComplete} disabled={!Boolean(feed)} />

      <TwitterFeed feed={feed} likeHandler={likeHandler} emptyText="nothing to show ☹ No friends no problem follow Direwolf (me)" />
    </TwitterContainer>
  )
}

export default Feed
