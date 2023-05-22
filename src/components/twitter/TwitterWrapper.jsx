import { Stack } from "@mui/material"
import { Outlet } from "react-router-dom"
import Leftbar from "./sidebar/Leftbar"
import Rightbar from "./sidebar/Rightbar"

const TwitterWrapper = () => {
  return (
    <Stack
      flexGrow={1}
      flexDirection="row"
      justifyContent="center"
      alignItems="start"
      overflow="auto"
      px="10px"
      sx={{ gap: { xs: 1, sm: 4 } }}
    >
      <Leftbar />

      <Outlet />

      <Rightbar />
    </Stack>
  )
}

export default TwitterWrapper
