import { Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import UserAvatar from "../../../components/layout/UserAvatar"
import ImageCard from "./ImageCard"
import VideoCard from "./VideoCard"
import LikeButton from "../button/LikeButton"
import CommentButton from "../button/CommentButton"

const TweetCard = ({ tweet }) => {
  return (
    <Stack flexDirection="row" p="16px 16px 4px 16px" gap={2}>
      <Link to={`/public-profile/${tweet.userId}`}>
        <UserAvatar user={tweet.user} />
      </Link>

      <Stack flexGrow={1}>
        <Stack flexDirection="row" alignItems="center" gap={1}>
          <Link to={`/public-profile/${tweet.userId}`}>
            <Typography fontWeight={600} fontSize="14px">
              {tweet.user.name}
            </Typography>
          </Link>

          <Typography fontWeight={600} fontSize="13px" color="rgba(150,150,150)">
            @{tweet.user.username}
          </Typography>
        </Stack>

        <Typography fontWeight={500} fontSize="15px">
          {tweet.content}
        </Typography>

        {tweet.mediaType && (
          <Stack mt="12px" justifyContent="center">
            {tweet.mediaType === "img" && <ImageCard src={tweet.mediaURL} />}

            {tweet.mediaType === "vid" && <VideoCard src={tweet.mediaURL} />}
          </Stack>
        )}

        <Stack flexDirection="row" alignItems="center" gap={3} mt="4px">
          <CommentButton tweetId={tweet.id} />

          <LikeButton tweetId={tweet.id} isLiked={tweet.isLiked} />

          <Typography fontWeight={500} fontSize="12px" color="rgba(150,150,150)">
            {new Date(tweet.createdAt).toDateString()}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default TweetCard
