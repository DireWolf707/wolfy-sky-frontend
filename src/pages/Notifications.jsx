import TwitterContainer from "../components/twitter/TwitterContainer"
import NotificationCard from "../components/twitter/card/NotificationCard"

const n = {
  name: "dw",
  userId: "1234",
  action: "replied", // LikeButton,replied,follow
  tweetId: "123", // ?
}

const Notifications = () => {
  return (
    <TwitterContainer heading="notifications">
      <NotificationCard notification={n} />
      <NotificationCard notification={n} />
      <NotificationCard notification={n} />
    </TwitterContainer>
  )
}

export default Notifications
