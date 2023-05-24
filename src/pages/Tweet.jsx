import { useParams } from "react-router"
import { twitterApi } from "../store"
import TwitterContainer from "../components/twitter/TwitterContainer"
import TweetCard from "../components/twitter/card/TweetCard"
import TweetInput from "../components/twitter/TweetInput"

const Tweet = () => {
  const { tweetId } = useParams()
  const { data, isFetching, isError, refetch } = twitterApi.useGetTweetQuery({ tweetId })

  return (
    <TwitterContainer heading="tweet" refetch={refetch}>
      <>{isFetching || isError ? <>loading</> : <TweetCard tweet={data.data} />}</>

      <TweetInput parentTweetId={tweetId} />

      <>{isFetching || isError ? <>loading</> : data.data.comments.map((comment) => <TweetCard key={comment.id} tweet={comment} />)}</>
    </TwitterContainer>
  )
}

export default Tweet
