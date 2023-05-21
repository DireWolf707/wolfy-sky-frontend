import { Stack, Typography, IconButton } from "@mui/material"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FavoriteIcon from "@mui/icons-material/Favorite"

const LikeButton = () => {
  return (
    <Stack flexDirection="row" alignItems="center">
      <IconButton>
        <FavoriteBorderIcon fontSize="small" sx={{ fill: "rgba(150,150,150)" }} />
      </IconButton>

      <Typography color="rgba(150,150,150)">0</Typography>
    </Stack>
  )
}

export default LikeButton
