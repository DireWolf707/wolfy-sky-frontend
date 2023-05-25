import { Stack, Typography } from "@mui/material"
import UserAvatar from "../../layout/UserAvatar"
import { Link } from "react-router-dom"

const FollowRecomendationCard = ({ user }) => {
  return (
    <Stack flexDirection="row" alignItems="center" gap={2}>
      <UserAvatar user={user} />

      <Stack>
        <Link to={`/public-profile/${user.id}`}>
          <Typography fontWeight={600} fontSize="14px">
            {user.name}
          </Typography>
        </Link>

        <Typography fontWeight={600} fontSize="13px" color="rgba(150,150,150)">
          @{user.username}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default FollowRecomendationCard
