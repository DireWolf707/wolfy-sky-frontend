import { Stack, Typography, IconButton } from "@mui/material"
import { useNavigate } from "react-router-dom"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"

const TwitterHeader = ({ heading }) => {
  const navigate = useNavigate()

  return (
    <Stack flexDirection="row" alignItems="center" p="8px">
      {heading !== "home" && (
        <IconButton onClick={() => navigate("/feed")}>
          <ArrowBackIcon fontSize="small" />
        </IconButton>
      )}

      <Typography fontWeight={900} textTransform="capitalize" fontSize="22px">
        {heading}
      </Typography>
    </Stack>
  )
}

export default TwitterHeader
