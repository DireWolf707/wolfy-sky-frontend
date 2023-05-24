import { Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import UserAvatar from "../../layout/UserAvatar"

const TweetLink = ({ href }) => (
  <Link to={`/tweet/${href}`} style={{ textDecoration: "underline", textUnderlineOffset: "4px", textDecorationColor: "#4072F4" }}>
    Tweet
  </Link>
)

const NotificationContent = ({ notification }) => {
  switch (notification.action) {
    case "liked":
      return (
        <>
          liked your <TweetLink href={notification.tweetId} />!
        </>
      )

    case "replied":
      return (
        <>
          replied on your <TweetLink href={notification.tweetId} />!
        </>
      )

    case "followed":
      return <>followed you!</>

    default:
      return <></>
  }
}

const NotificationCard = ({ notification }) => {
  return (
    <Stack flexDirection="row" alignItems="center" p="18px" gap={1.5}>
      <UserAvatar user={notification.user} />

      <Typography fontWeight={500} fontSize="16px">
        <Link
          to={`/public-profile/${notification.userId}`}
          style={{ textDecoration: "underline", textUnderlineOffset: "4px", textDecorationColor: "#4072F4" }}
        >
          {notification.user.name}
        </Link>
        &nbsp;
        <NotificationContent notification={notification} />
      </Typography>
    </Stack>
  )
}

export default NotificationCard
