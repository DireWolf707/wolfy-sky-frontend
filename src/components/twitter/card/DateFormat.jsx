import { Typography } from "@mui/material"
import formatDate from "../../../utils/formatDate"

const DateFormat = ({ date }) => {
  return (
    <Typography fontWeight={500} fontSize="12px" color="rgba(150,150,150)">
      {formatDate(date)}
    </Typography>
  )
}

export default DateFormat
