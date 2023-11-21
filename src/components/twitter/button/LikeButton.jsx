import { twitterApi } from "../../../store"
import { Stack, Typography, IconButton } from "@mui/material"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FavoriteIcon from "@mui/icons-material/Favorite"
import requestHandler from "../../../utils/requestHandler"

const LikeButton = ({ tweetId, likes, isLiked, likeHandler: customLikeHandler }) => {
  const [like, { isLoading: isLiking }] = twitterApi.useLikeMutation()
  const [unlike, { isLoading: isUnliking }] = twitterApi.useUnlikeMutation()

  const likeHandler = () => requestHandler(like({ tweetId }).unwrap(), "liking tweet", "tweet liked").then(() => customLikeHandler(tweetId, true))

  const unlikeHandler = () => requestHandler(unlike({ tweetId }).unwrap(), "unliking tweet", "tweet unliked").then(() => customLikeHandler(tweetId, false))

  return (
    <Stack flexDirection="row" alignItems="center" width="64px">
      {isLiked ? (
        <IconButton onClick={unlikeHandler} disabled={isUnliking}>
          <FavoriteIcon fontSize="small" sx={{ fill: "red" }} />
        </IconButton>
      ) : (
        <IconButton onClick={likeHandler} disabled={isLiking}>
          <FavoriteBorderIcon fontSize="small" sx={{ fill: "rgba(150,150,150)" }} />
        </IconButton>
      )}

      <Typography color="rgba(150,150,150)">{likes}</Typography>
    </Stack>
  )
}

export default LikeButton
