import TwitterContainer from "../components/twitter/TwitterContainer"
import TweetCard from "../components/twitter/card/TweetCard"
import TweetInput from "../components/twitter/TweetInput"

const t = {
  id: 123,
  name: "Direwolf",
  username: "direwolf",
  time: "2 hours",
  content: "This is my first tweet",
  userId: 1234,
}

const Feed = () => {
  return (
    <TwitterContainer heading="home" refetch={() => {}}>
      <TweetInput />

      <TweetCard tweet={t} />
      <TweetCard tweet={t} />
    </TwitterContainer>
  )
}

export default Feed
