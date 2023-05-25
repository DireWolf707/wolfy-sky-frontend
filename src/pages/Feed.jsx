import { useEffect, useCallback } from "react"
import { useDispatch, useSelector, twitterApi, twitterSliceActions } from "../store"
import TwitterContainer from "../components/twitter/TwitterContainer"
import TweetCard from "../components/twitter/card/TweetCard"
import TweetInput from "../components/twitter/TweetInput"
import requestHandler from "../utils/requestHandler"
import CircularLoader from "../components/loading/component/CircularLoader"
import EmptyCard from "../components/twitter/card/EmptyCard"

const Feed = () => {
  const dispatch = useDispatch()
  const { feed } = useSelector((store) => store.twitter)
  const [getFeed] = twitterApi.useLazyGetFeedQuery()

  const refetch = useCallback(async () => {
    dispatch(twitterSliceActions.unsetFeed())

    await requestHandler(getFeed().unwrap(), "fetching feed", "feed fetched").then(({ data }) =>
      dispatch(twitterSliceActions.setFeed(data))
    )
  }, [])

  useEffect(() => {
    requestHandler(getFeed().unwrap(), "fetching feed", "feed fetched").then(({ data }) => dispatch(twitterSliceActions.setFeed(data)))

    return () => dispatch(twitterSliceActions.unsetFeed())
  }, [])

  const onComplete = ({ data }) => dispatch(twitterSliceActions.updateFeed(data))

  return (
    <TwitterContainer heading="home" refetch={refetch}>
      <TweetInput onComplete={onComplete} disabled={!Boolean(feed)} />

      {feed ? feed.length ? feed.map((tweet) => <TweetCard key={tweet.id} tweet={tweet} />) : <EmptyCard /> : <CircularLoader />}
    </TwitterContainer>
  )
}

export default Feed
