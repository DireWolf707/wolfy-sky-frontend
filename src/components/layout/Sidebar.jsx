import { useEffect } from "react"
import { useMediaQuery, Stack, Box, Drawer } from "@mui/material"
import LoginButton from "./button/LoginButton"
import LogoutButton from "./button/LogoutButton"
import SidebarLinks from "./navLinks/SidebarLinks"
import { useDispatch, useSelector, dataSliceActions, userApi } from "../../store"
import { publicNavLinks, privateNavLinks } from "../../utils/constants"

const Sidebar = () => {
  const dispatch = useDispatch()
  const isSmall = useMediaQuery((theme) => theme.breakpoints.only("xs"))
  const { isSidebarOpen } = useSelector((store) => store.data)

  const {
    data: { data: user = null },
  } = userApi.useFetchProfileQuery()

  const closeSidebar = () => dispatch(dataSliceActions.toggleSidebar(false))

  useEffect(() => {
    if (!isSmall && isSidebarOpen) closeSidebar()
  }, [isSmall])

  return (
    <Drawer
      anchor="left"
      variant="temporary"
      open={isSidebarOpen}
      onClose={closeSidebar}
      PaperProps={{
        sx: {
          bgcolor: "#000",
          gap: 2,
          px: "16px",
          py: "26px",
          width: "260px",
        },
      }}
    >
      <Box component="img" src="/assets/logo-sidebar.svg" height="160px" />

      <Stack alignItems="start" px="8px" gap={0.8} overflow="auto">
        <SidebarLinks closeSidebar={closeSidebar} links={publicNavLinks} />

        {user && <SidebarLinks closeSidebar={closeSidebar} links={privateNavLinks} />}
      </Stack>

      {user ? <LogoutButton closeSidebar={closeSidebar} /> : <LoginButton />}
    </Drawer>
  )
}

export default Sidebar
