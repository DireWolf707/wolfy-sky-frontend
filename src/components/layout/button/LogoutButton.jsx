import { Button } from "@mui/material"
import { userApi } from "../../../store"
import requestHandler from "../../../utils/requestHandler"

const LogoutButton = ({ closeSidebar = null }) => {
  const [logout, { isLoading }] = userApi.useLogoutMutation()

  const logoutHandler = () => {
    if (closeSidebar) closeSidebar()
    requestHandler(logout().unwrap(), "logging out", "logged out")
  }

  return (
    <Button variant="contained" color="error" onClick={logoutHandler} disabled={isLoading}>
      logout
    </Button>
  )
}

export default LogoutButton
