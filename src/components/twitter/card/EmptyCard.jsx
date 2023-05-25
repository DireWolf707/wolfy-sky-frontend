import { Typography } from "@mui/material"

const EmptyCard = ({ text = "nothing to show" }) => {
  return (
    <Typography fontSize="20px" fontWeight={500} textAlign="center" textTransform="capitalize" p="20px" color="rgba(150,150,150)">
      {text}
    </Typography>
  )
}

export default EmptyCard
