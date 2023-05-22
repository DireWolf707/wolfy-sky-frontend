import TwitterContainer from "../components/twitter/TwitterContainer"
import TweetNotification from "../components/twitter/TweetNotification"

const n = {
  name: "dw",
  userId: "1234",
  action: "replied", // LikeButton,replied,follow
  tweetId: "123", // ?
}

const Notifications = () => {
  return (
    <TwitterContainer heading="notifications">
      <TweetNotification notification={n} />
      <TweetNotification notification={n} />
      <TweetNotification notification={n} />
    </TwitterContainer>
  )
}

export default Notifications
