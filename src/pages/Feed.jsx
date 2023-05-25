import { useState, useEffect, useCallback } from "react"
import { twitterApi } from "../store"
import TwitterContainer from "../components/twitter/TwitterContainer"
import ParentChildTweetCard from "../components/twitter/card/ParentChildTweetCard"
import TweetCard from "../components/twitter/card/TweetCard"
import TweetInput from "../components/twitter/TweetInput"
import requestHandler from "../utils/requestHandler"
import CircularLoader from "../components/loading/component/CircularLoader"
import EmptyCard from "../components/twitter/card/EmptyCard"

const Feed = () => {
  const [feed, setFeed] = useState(null)
  const [getFeed] = twitterApi.useLazyGetFeedQuery()

  const refetch = useCallback(async () => {
    setFeed(null)
    await requestHandler(getFeed().unwrap(), "fetching feed", "feed fetched").then(({ data }) => setFeed(data))
  }, [])

  useEffect(() => {
    refetch()
  }, [])

  const onComplete = ({ data }) => setFeed((pv) => [{ tweet: data }, ...pv])

  return (
    <TwitterContainer heading="home" refetch={refetch}>
      <TweetInput onComplete={onComplete} disabled={!Boolean(feed)} />

      {feed ? (
        feed.length ? (
          feed.map(({ tweet, parentTweet }) => {
            if (parentTweet) return <ParentChildTweetCard key={tweet.id} parentTweet={parentTweet} tweet={tweet} />
            return <TweetCard key={tweet.id} tweet={tweet} />
          })
        ) : (
          <EmptyCard />
        )
      ) : (
        <CircularLoader />
      )}
    </TwitterContainer>
  )
}

export default Feed
