import { Box } from "@mui/material"

const VideoCard = ({ src }) => {
  return <Box component="video" src={src} controls maxHeight="320px" width="100%" borderRadius="24px" />
}

export default VideoCard
