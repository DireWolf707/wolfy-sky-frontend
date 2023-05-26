import { useMediaQuery, Stack, Button, Typography, IconButton } from "@mui/material"
import { useNavigate, useLocation } from "react-router-dom"
import { userApi, useDispatch, twitterSliceActions } from "../../../store"
import HomeIcon from "@mui/icons-material/Home"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import NotificationsIcon from "@mui/icons-material/Notifications"
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"
import PersonIcon from "@mui/icons-material/Person"
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"
import HistoryEduIcon from "@mui/icons-material/HistoryEdu"
import SearchIcon from "@mui/icons-material/Search"
import SavedSearchIcon from "@mui/icons-material/SavedSearch"
import NotificationButton from "../button/NotificationButton"

const LeftbarButton = ({ title, href, Icon, textVisible }) => {
  const navigate = useNavigate()

  const onClickHandler = () => navigate(href)

  if (textVisible)
    return (
      <Button onClick={onClickHandler}>
        <Stack flexDirection="row" alignItems="center" gap={1.2}>
          <Icon fontSize="large" />

          <Typography fontWeight={500} textTransform="capitalize">
            {title}
          </Typography>
        </Stack>
      </Button>
    )

  return (
    <IconButton onClick={onClickHandler}>
      <Icon />
    </IconButton>
  )
}

const Leftbar = () => {
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const { data } = userApi.useFetchProfileQuery()
  const textVisible = useMediaQuery((theme) => theme.breakpoints.up("sm"))
  const searchEnabled = useMediaQuery((theme) => theme.breakpoints.down("lg"))

  const tweetButtonHandler = () => dispatch(twitterSliceActions.toggleTweetModal(true))

  return (
    <Stack flexShrink={0} alignItems="start" gap={2} sx={{ width: { xs: "auto", sm: "180px" } }}>
      <LeftbarButton title="home" href="/feed" Icon={pathname === "/feed" ? HomeIcon : HomeOutlinedIcon} textVisible={textVisible} />
      <NotificationButton
        title="notifications"
        href="/notifications"
        Icon={pathname === "/notifications" ? NotificationsIcon : NotificationsOutlinedIcon}
        textVisible={textVisible}
      />
      <LeftbarButton
        title="profile"
        href={`/public-profile/${data.data.id}`}
        Icon={pathname === `/public-profile/${data.data.id}` ? PersonIcon : PersonOutlineIcon}
        textVisible={textVisible}
      />
      {searchEnabled && (
        <LeftbarButton
          title="search"
          href="/search"
          Icon={pathname.startsWith("/search") ? SavedSearchIcon : SearchIcon}
          textVisible={textVisible}
        />
      )}

      {textVisible ? (
        <Button onClick={tweetButtonHandler} fullWidth variant="contained" sx={{ borderRadius: "24px", bgcolor: "#4072F4" }}>
          <Typography fontWeight={500} textTransform="capitalize">
            Tweet
          </Typography>
        </Button>
      ) : (
        <IconButton onClick={tweetButtonHandler} sx={{ bgcolor: "#4072F4", ":hover": { bgcolor: "#4072F4" } }}>
          <HistoryEduIcon />
        </IconButton>
      )}
    </Stack>
  )
}

export default Leftbar
