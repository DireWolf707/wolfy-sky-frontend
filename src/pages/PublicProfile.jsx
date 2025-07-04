import { useState, useEffect, useCallback } from "react"
import { useParams } from "react-router-dom"
import { Box, Stack, Typography } from "@mui/material"
import { userApi, twitterApi } from "../store"
import TwitterContainer from "../components/twitter/TwitterContainer"
import ContainerDivider from "../components/twitter/container/ContainerDivider"
import ProfileEditButton from "../components/twitter/button/ProfileEditButton"
import FollowButton from "../components/twitter/button/FollowButton"
import UserAvatar from "../components/layout/UserAvatar"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import requestHandler from "../utils/requestHandler"
import CircularLoader from "../components/loading/component/CircularLoader"
import TwitterFeed from "../components/twitter/TwitterFeed"

const PublicProfile = () => {
  const { userId } = useParams()
  const [profile, setProfile] = useState(null)
  const [tweets, setTweets] = useState(null)
  const {
    data: { data: currentUser },
  } = userApi.useFetchProfileQuery()
  const [getPublicProfile] = twitterApi.useLazyGetPublicProfileQuery()

  const refetch = useCallback(async () => {
    setProfile(null)
    await requestHandler(getPublicProfile({ userId }).unwrap(), "fetching profile", "profile fetched").then(({ data }) => {
      setProfile(data.profile)
      setTweets(data.tweets)
    })
  }, [userId])

  const likeHandler = useCallback(async (tweetId, liked) =>
    setTweets((pv) => pv.map(feedItem => {
      const newFeedItem = { ...feedItem }
      if (feedItem.tweet.id === tweetId) newFeedItem.isTweetLiked = liked
      if (feedItem?.parentTweet?.id === tweetId) newFeedItem.isParentTweetLiked = liked
      return newFeedItem
    }))
    , [])

  useEffect(() => {
    refetch()
  }, [userId])

  return (
    <TwitterContainer heading="profile" refetch={refetch}>
      <Box flexShrink={0} bgcolor="rgba(150,150,150)" height="140px" />

      {profile ? (
        <Stack divider={<ContainerDivider />}>
          <Stack p="12px">
            <Stack flexDirection="row" justifyContent="space-between" alignItems="start">
              <Stack mt="-68px" ml="8px" border="4px solid #000" borderRadius="100%">
                <UserAvatar user={profile} size="150px" fontSize="60px" />
              </Stack>

              {currentUser.id === profile.id ? (
                <ProfileEditButton />
              ) : (
                <FollowButton userId={profile.id} isFollowed={Number(profile.isFollowed)} />
              )}
            </Stack>

            <Stack p="12px" gap={2}>
              <Stack px="4px">
                <Typography fontWeight={600} fontSize="24px">
                  {profile.name}
                </Typography>

                <Typography fontWeight={600} fontSize="14px" color="rgba(150,150,150)">
                  @{profile.username}
                </Typography>
              </Stack>

              <Stack flexDirection="row" alignItems="center" gap={1}>
                <CalendarMonthIcon />

                <Typography fontWeight={600} fontSize="13px" color="rgba(150,150,150)">
                  Joined {new Date(profile.createdAt).toDateString()}
                </Typography>
              </Stack>

              <Stack flexDirection="row" gap={2}>
                <Stack flexDirection="row" alignItems="center" gap={0.5}>
                  <Typography fontWeight={500} fontSize="14px">
                    {profile.following}
                  </Typography>

                  <Typography fontWeight={500} fontSize="14px" color="rgba(150,150,150)">
                    Following
                  </Typography>
                </Stack>

                <Stack flexDirection="row" alignItems="center" gap={0.5}>
                  <Typography fontWeight={500} fontSize="14px">
                    {profile.followers}
                  </Typography>

                  <Typography fontWeight={500} fontSize="14px" color="rgba(150,150,150)">
                    Followers
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>

          <TwitterFeed feed={tweets} likeHandler={likeHandler} emptyText="no tweets found" />

        </Stack>
      ) : (
        <CircularLoader />
      )}
    </TwitterContainer>
  )
}

export default PublicProfile
