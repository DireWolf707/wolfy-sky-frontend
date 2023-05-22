import { Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import UserAvatar from "../../components/layout/UserAvatar"
import LikeButton from "./button/LikeButton"
import CommentButton from "./button/CommentButton"

const TweetCard = ({ tweet }) => {
  return (
    <Stack flexDirection="row" p="16px 16px 4px 16px" gap={2}>
      <UserAvatar user={{ username: "DW" }} />

      <Stack>
        <Stack flexDirection="row" alignItems="center" gap={1}>
          <Link to={`/public-profile/${tweet.userId}`}>
            <Typography fontWeight={600} fontSize="14px">
              {tweet.name}
            </Typography>
          </Link>

          <Typography fontWeight={600} fontSize="13px" color="rgba(150,150,150)">
            @{tweet.username}
          </Typography>

          <Typography fontWeight={600} fontSize="13px" color="rgba(150,150,150)">
            {tweet.time}
          </Typography>
        </Stack>

        <Typography fontWeight={500} fontSize="15px">
          {tweet.content}
        </Typography>

        <Stack flexDirection="row" gap={4} mt="4px">
          <CommentButton tweetId={tweet.id} />

          <LikeButton tweetId={tweet.id} />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default TweetCard
