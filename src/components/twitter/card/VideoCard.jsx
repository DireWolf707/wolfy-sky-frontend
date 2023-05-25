import { Box, Stack } from "@mui/material"

const VideoCard = ({ src }) => {
  return (
    <Stack justifyContent="center" alignItems="center">
      <Box component="video" src={src} controls maxHeight="320px" width="100%" borderRadius="24px" />
    </Stack>
  )
}

export default VideoCard
