import { Stack, Typography } from "@mui/material"
import UserAvatar from "../../components/layout/UserAvatar"
import LikeButton from "./button/LikeButton"
import CommentButton from "./button/CommentButton"

const TweetCard = () => {
  return (
    <Stack flexDirection="row" p="16px 16px 4px 16px" gap={2}>
      <UserAvatar user={{ username: "DW" }} />

      <Stack>
        <Stack flexDirection="row" alignItems="center" gap={1}>
          <Typography fontWeight={600} fontSize="14px">
            Direwolf
          </Typography>

          <Typography fontWeight={600} fontSize="13px" color="rgba(150,150,150)">
            @direwolf
          </Typography>

          <Typography fontWeight={600} fontSize="13px" color="rgba(150,150,150)">
            2 hours
          </Typography>
        </Stack>

        <Typography fontWeight={500} fontSize="15px">
          This is my first tweet
        </Typography>

        <Stack flexDirection="row" gap={4} mt="4px">
          <CommentButton />

          <LikeButton />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default TweetCard
