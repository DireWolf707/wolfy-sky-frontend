import { Box } from "@mui/material"

const ImageCard = ({ src }) => {
  return <Box component="img" src={src} maxHeight="320px" width="100%" borderRadius="24px" sx={{ objectFit: "contain" }} />
}

export default ImageCard
