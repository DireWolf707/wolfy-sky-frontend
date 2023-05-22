import { useRef, useEffect } from "react"
import { Stack, Box, IconButton, useMediaQuery } from "@mui/material"
import NavbarLinks from "./navLinks/NavbarLinks"
import { publicNavLinks, privateNavLinks, navHeight } from "../../utils/constants"
import { Link } from "react-router-dom"
import MenuIcon from "@mui/icons-material/Menu"
import { useDispatch, userApi, dataSliceActions } from "../../store"
import LoginButton from "./button/LoginButton"
import LogoutButton from "./button/LogoutButton"

const Navbar = () => {
  const topRef = useRef(null)
  const dispatch = useDispatch()
  const isSmall = useMediaQuery((theme) => theme.breakpoints.only("xs"))
  const {
    data: { data: user = null },
  } = userApi.useFetchProfileQuery()

  useEffect(() => {
    dispatch(dataSliceActions.setTopRef(topRef.current))
  }, [])

  return (
    <>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          position: "fixed",
          zIndex: 1,
          height: navHeight,
          width: "100%",
          bgcolor: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(3px)",
          px: {
            xs: "12px",
            sm: "24px",
          },
        }}
      >
        <Link to="/">
          <Box component="img" src="/assets/logo.svg" width="160px" />
        </Link>

        {isSmall ? (
          <IconButton onClick={() => dispatch(dataSliceActions.toggleSidebar(true))}>
            <MenuIcon />
          </IconButton>
        ) : (
          <Stack flexDirection="row" gap={0.8}>
            <NavbarLinks links={publicNavLinks} />

            {user && <NavbarLinks links={privateNavLinks} />}

            {user ? <LogoutButton /> : <LoginButton />}
          </Stack>
        )}
      </Stack>

      <Box ref={topRef} flexShrink={0} height={navHeight} />
    </>
  )
}

export default Navbar
