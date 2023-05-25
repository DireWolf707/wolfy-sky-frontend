import { Player } from "@lottiefiles/react-lottie-player"

const CircularLoader = ({ size = "120px" }) => {
  return <Player autoplay loop src="/assets/animations/loading/circular-loader.json" style={{ height: size }} />
}

export default CircularLoader
