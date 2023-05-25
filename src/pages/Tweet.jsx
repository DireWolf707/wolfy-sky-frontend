import { useState, useEffect, useCallback } from "react"
import { useParams } from "react-router"
import { twitterApi } from "../store"
import TwitterContainer from "../components/twitter/TwitterContainer"
import TweetCard from "../components/twitter/card/TweetCard"
import TweetInput from "../components/twitter/TweetInput"
import requestHandler from "../utils/requestHandler"
import CircularLoader from "../components/loading/component/CircularLoader"
import EmptyCard from "../components/twitter/card/EmptyCard"

const Tweet = () => {
  const { tweetId } = useParams()
  const [tweet, setTweet] = useState(null)
  const [comments, setComments] = useState(null)
  const [getTweet] = twitterApi.useLazyGetTweetQuery()
  const [getComments] = twitterApi.useLazyGetCommentsQuery()

  const refetch = useCallback(async () => {
    setComments(null)
    await requestHandler(getComments({ tweetId }).unwrap(), "fetching comments", "comments fetched").then(({ data }) => setComments(data))
  }, [tweetId])

  useEffect(() => {
    setTweet(null) // to unset tweet in case of page change (comments get unset in refetch)
    requestHandler(getTweet({ tweetId }).unwrap(), "fetching tweet", "tweet fetched").then(({ data }) => setTweet(data))
    refetch()
  }, [tweetId])

  return (
    <TwitterContainer heading="tweet" refetch={refetch}>
      {tweet ? <TweetCard tweet={tweet} /> : <CircularLoader />}

      <TweetInput parentTweetId={tweetId} />

      {comments ? (
        comments.length ? (
          comments.map((comment) => <TweetCard key={comment.id} tweet={comment} />)
        ) : (
          <EmptyCard text="no reply" />
        )
      ) : (
        <CircularLoader />
      )}
    </TwitterContainer>
  )
}

export default Tweet
