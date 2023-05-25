import { Box, Stack } from "@mui/material"

const ImageCard = ({ src }) => {
  return (
    <Stack justifyContent="center" alignItems="center">
      <Box component="img" src={src} maxHeight="320px" maxWidth="100%" borderRadius="24px" sx={{ objectFit: "contain" }} />
    </Stack>
  )
}

export default ImageCard
