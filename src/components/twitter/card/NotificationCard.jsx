import { Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import UserAvatar from "../../layout/UserAvatar"
import DateFormat from "./DateFormat"

const TweetLink = ({ href }) => (
  <Link to={`/tweet/${href}`} style={{ textDecoration: "underline", textUnderlineOffset: "4px", textDecorationColor: "#4072F4" }}>
    Tweet
  </Link>
)

const NotificationContent = ({ notification }) => {
  switch (notification.type) {
    case "like":
      return (
        <>
          liked your <TweetLink href={notification.tweetId} />!
        </>
      )

    case "comment":
      return (
        <>
          replied on your <TweetLink href={notification.tweetId} />!
        </>
      )

    case "follow":
      return <>followed you!</>

    default:
      return <></>
  }
}

const NotificationCard = ({ notification }) => {
  return (
    <Stack flexDirection="row" alignItems="center" p="18px" gap={1.5}>
      <UserAvatar user={notification.user} />

      <Stack gap={0.5}>
        <Typography fontWeight={500} fontSize="16px" >
          <Link
            to={`/public-profile/${notification.user.id}`}
            style={{ textDecoration: "underline", textUnderlineOffset: "4px", textDecorationColor: "#4072F4" }}
          >
            {notification.user.name}
          </Link>
          &nbsp;
          <NotificationContent notification={notification} />
        </Typography>

        <DateFormat date={notification.createdAt} />
      </Stack>
    </Stack>
  )
}

export default NotificationCard
