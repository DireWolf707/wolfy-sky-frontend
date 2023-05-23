import { Link } from "react-router-dom"
import { Stack, Typography } from "@mui/material"
import UserAvatar from "../../../components/layout/UserAvatar"
import FollowButton from "../button/FollowButton"

const SearchCard = ({ user }) => {
  return (
    <Stack flexDirection="row" justifyContent="space-between" alignItems="center" p="16px">
      <Stack flexDirection="row" alignItems="center" gap={2}>
        <UserAvatar user={user} />

        <Stack>
          <Link to={`/public-profile/${user.userId}`}>
            <Typography fontWeight={600} fontSize="16px">
              {user.name}
            </Typography>
          </Link>

          <Typography fontWeight={600} fontSize="14px" color="rgba(150,150,150)">
            @{user.username}
          </Typography>
        </Stack>
      </Stack>

      <FollowButton />
    </Stack>
  )
}

export default SearchCard
