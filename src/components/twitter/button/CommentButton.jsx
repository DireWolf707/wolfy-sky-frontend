import { Stack, Typography, IconButton } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined"
import { useDispatch, twitterSliceActions } from "../../../store"

const CommentButton = ({ tweetId }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { tweetId: currentTweetId = null } = useParams()

  const onClickHandler = () => {
    dispatch(twitterSliceActions.pushParentTweet(currentTweetId))
    navigate(`/tweet/${tweetId}`)
  }

  return (
    <Stack flexDirection="row" alignItems="center">
      <IconButton onClick={onClickHandler} disabled={currentTweetId === tweetId}>
        <SmsOutlinedIcon fontSize="small" sx={{ fill: "rgba(150,150,150)" }} />
      </IconButton>

      <Typography color="rgba(150,150,150)">0</Typography>
    </Stack>
  )
}

export default CommentButton
