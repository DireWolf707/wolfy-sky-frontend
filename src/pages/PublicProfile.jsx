import { useParams } from "react-router-dom"
import { Box, Stack, Typography } from "@mui/material"
import { userApi, twitterApi } from "../store"
import TwitterContainer from "../components/twitter/TwitterContainer"
import TweetCard from "../components/twitter/card/TweetCard"
import ProfileEditButton from "../components/twitter/button/ProfileEditButton"
import FollowButton from "../components/twitter/button/FollowButton"
import UserAvatar from "../components/layout/UserAvatar"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"

const PublicProfile = () => {
  const { userId } = useParams()
  const {
    data: { data: user },
  } = userApi.useFetchProfileQuery()
  const { data, isFetching, isError, refetch } = twitterApi.useGetPublicProfileQuery({ userId })

  return (
    <TwitterContainer heading="profile" refetch={refetch}>
      <Box flexShrink={0} bgcolor="rgba(150,150,150)" height="140px" />

      <Stack p="12px">
        <Stack flexDirection="row" justifyContent="space-between" alignItems="start">
          <Stack mt="-68px" ml="8px" border="4px solid #000" borderRadius="100%">
            <UserAvatar user={user} size="150px" fontSize="60px" />
          </Stack>

          {user.id === userId ? <ProfileEditButton /> : <FollowButton />}
        </Stack>

        <Stack p="12px" gap={2}>
          <Stack px="4px">
            <Typography fontWeight={600} fontSize="24px">
              {user.name}
            </Typography>

            <Typography fontWeight={600} fontSize="14px" color="rgba(150,150,150)">
              @{user.username}
            </Typography>
          </Stack>

          <Stack flexDirection="row" alignItems="center" gap={1}>
            <CalendarMonthIcon />

            <Typography fontWeight={600} fontSize="13px" color="rgba(150,150,150)">
              Joined {new Date(user.createdAt).toDateString()}
            </Typography>
          </Stack>

          <Stack flexDirection="row" gap={2}>
            <Stack flexDirection="row" alignItems="center" gap={0.5}>
              <Typography fontWeight={500} fontSize="14px">
                {data?.data?.following}
              </Typography>

              <Typography fontWeight={500} fontSize="14px" color="rgba(150,150,150)">
                Following
              </Typography>
            </Stack>

            <Stack flexDirection="row" alignItems="center" gap={0.5}>
              <Typography fontWeight={500} fontSize="14px">
                {data?.data?.followers}
              </Typography>

              <Typography fontWeight={500} fontSize="14px" color="rgba(150,150,150)">
                Followers
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <>
        {isFetching || isError ? (
          <>loading</>
        ) : (
          data.data.tweets.map((tweet) => <TweetCard key={tweet.id} tweet={tweet} user={data.data.user} />)
        )}
      </>
    </TwitterContainer>
  )
}

export default PublicProfile
