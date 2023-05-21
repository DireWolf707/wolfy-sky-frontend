import { Stack, Typography } from "@mui/material"
import { Player } from "@lottiefiles/react-lottie-player"

const Home = () => {
  return (
    <Stack flexGrow={1} justifyContent="center" alignItems="center">
      <Typography fontFamily="Sedgwick Ave Display" sx={{ fontSize: { xs: "32px", sm: "46px" } }}>
        Welcome to Wolfy Sky 🐺
      </Typography>

      <Player autoplay loop src="/assets/animations/home.json" style={{ height: "480px" }} />
    </Stack>
  )
}

export default Home
