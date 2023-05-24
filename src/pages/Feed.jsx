import { twitterApi } from "../store"
import TwitterContainer from "../components/twitter/TwitterContainer"
import TweetCard from "../components/twitter/card/TweetCard"
import TweetInput from "../components/twitter/TweetInput"

const Feed = () => {
  const { data, isFetching, isError, refetch } = twitterApi.useGetFeedQuery()

  return (
    <TwitterContainer heading="home" refetch={refetch}>
      <TweetInput />

      <>{isFetching || isError ? <>loading</> : data.data.map((tweet) => <TweetCard key={tweet.id} tweet={tweet} />)}</>
    </TwitterContainer>
  )
}

export default Feed
