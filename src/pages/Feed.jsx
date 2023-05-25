import { useState, useEffect, useCallback } from "react"
import { twitterApi } from "../store"
import TwitterContainer from "../components/twitter/TwitterContainer"
import TweetCard from "../components/twitter/card/TweetCard"
import TweetInput from "../components/twitter/TweetInput"
import requestHandler from "../utils/requestHandler"

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

  return (
    <TwitterContainer heading="home" refetch={refetch}>
      <TweetInput />

      {feed ? feed.map((tweet) => <TweetCard key={tweet.id} tweet={tweet} />) : <>loading</>}
    </TwitterContainer>
  )
}

export default Feed
