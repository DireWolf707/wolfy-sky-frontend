import { Stack, Typography, IconButton } from "@mui/material"
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined"

const CommentButton = () => {
  return (
    <Stack flexDirection="row" alignItems="center">
      <IconButton>
        <SmsOutlinedIcon fontSize="small" sx={{ fill: "rgba(150,150,150)" }} />
      </IconButton>

      <Typography color="rgba(150,150,150)">0</Typography>
    </Stack>
  )
}

export default CommentButton
