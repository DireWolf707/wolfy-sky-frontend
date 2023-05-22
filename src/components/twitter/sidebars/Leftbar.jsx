import { useMediaQuery, Stack, Button, Typography, IconButton } from "@mui/material"
import { userApi, useSelector } from "../../../store"
import HomeIcon from "@mui/icons-material/Home"
import NotificationsIcon from "@mui/icons-material/Notifications"
import PersonIcon from "@mui/icons-material/Person"
import HistoryEduIcon from "@mui/icons-material/HistoryEdu"
import { useNavigate } from "react-router-dom"

const LeftbarLink = ({ title, href, Icon, textVisible }) => {
  const navigate = useNavigate()

  const onClickHandler = () => navigate(href)

  return (
    <>
      {textVisible ? (
        <Button onClick={onClickHandler}>
          <Stack flexDirection="row" alignItems="center" gap={1.2}>
            <Icon fontSize="large" />

            <Typography fontWeight={500} textTransform="capitalize">
              {title}
            </Typography>
          </Stack>
        </Button>
      ) : (
        <IconButton onClick={onClickHandler}>
          <Icon />
        </IconButton>
      )}
    </>
  )
}

const Leftbar = () => {
  const { containerTopRef } = useSelector((store) => store.twitter)
  const { data } = userApi.useFetchProfileQuery()
  const textVisible = useMediaQuery((theme) => theme.breakpoints.up("sm"))

  const tweetButtonHandler = () => containerTopRef.scrollIntoView()

  return (
    <Stack alignItems="start" gap={2} sx={{ width: { xs: "auto", sm: "180px" } }}>
      <LeftbarLink title="home" href="/feed" Icon={HomeIcon} textVisible={textVisible} />
      <LeftbarLink title="notifications" href="/notifications" Icon={NotificationsIcon} textVisible={textVisible} />
      <LeftbarLink title="profile" href={`public-profile/${data.data.id}`} Icon={PersonIcon} textVisible={textVisible} />

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
