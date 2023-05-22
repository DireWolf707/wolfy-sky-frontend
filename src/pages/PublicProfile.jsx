import { Box,Stack, Typography, Button } from "@mui/material"
import TwitterContainer from "../components/twitter/TwitterContainer"
import TweetCard from "../components/twitter/TweetCard"
import UserAvatar from "../components/layout/UserAvatar"
import { useNavigate, useParams } from "react-router-dom"
import { userApi } from "../store"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"

const ProfileButton = () => {
  const navgate = useNavigate()
  const { userId } = useParams()
  const { data } = userApi.useFetchProfileQuery()
  const sx = { borderRadius: "24px", textTransform: "capitalize" }

  if (data.data.id === userId)
    return (
      <Button onClick={() => navgate("/profile")} variant="contained" color="btn2" sx={sx}>
        edit
      </Button>
    )

  return (
    <Button variant="contained" color="btn2" sx={sx}>
      follow
    </Button>
  )
}

const t = {
  id: 123,
  name: "Direwolf",
  username: "direwolf",
  time: "2 hours",
  content: "This is my first tweet",
  userId: 1234,
}

const PublicProfile = () => {
  return (
    <TwitterContainer heading="profile">
      <Box flexShrink={0} bgcolor="rgba(150,150,150)" height="160px" />

      <Stack p="12px">
        <Stack flexDirection="row" justifyContent="space-between" alignItems="start">
          <Stack mt="-68px" ml="8px" border="4px solid #000" borderRadius="100%">
            <UserAvatar user={{ username: "DW" }} size="150px" fontSize="60px" />
          </Stack>

          <ProfileButton />
        </Stack>

        <Stack p="12px" gap={2}>
          <Stack px="4px">
            <Typography fontWeight={600} fontSize="24px">
              Direwolf
            </Typography>

            <Typography fontWeight={600} fontSize="14px" color="rgba(150,150,150)">
              @direwolf
            </Typography>
          </Stack>

          <Stack flexDirection="row" alignItems="center" gap={1}>
            <CalendarMonthIcon />

            <Typography fontWeight={600} fontSize="13px" color="rgba(150,150,150)">
              Joined March 2023
            </Typography>
          </Stack>

          <Stack flexDirection="row" gap={2}>
            <Stack flexDirection="row" alignItems="center" gap={0.5}>
              <Typography fontWeight={500} fontSize="14px">
                0
              </Typography>

              <Typography fontWeight={500} fontSize="14px" color="rgba(150,150,150)">
                Following
              </Typography>
            </Stack>

            <Stack flexDirection="row" alignItems="center" gap={0.5}>
              <Typography fontWeight={500} fontSize="14px">
                0
              </Typography>

              <Typography fontWeight={500} fontSize="14px" color="rgba(150,150,150)">
                Followers
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <TweetCard tweet={t} />
      <TweetCard tweet={t} />
      <TweetCard tweet={t} />
      <TweetCard tweet={t} />
      <TweetCard tweet={t} />
      <TweetCard tweet={t} />
    </TwitterContainer>
  )
}

export default PublicProfile
