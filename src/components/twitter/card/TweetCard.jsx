import { Stack } from "@mui/material"
import { Link } from "react-router-dom"
import UserAvatar from "../../../components/layout/UserAvatar"

import TweetContent from "./TweetContent"

const TweetCard = ({ tweet }) => {
  return (
    <Stack flexDirection="row" p="16px 16px 4px 16px" gap={2}>
      <Link to={`/public-profile/${tweet.userId}`}>
        <UserAvatar user={tweet.user} />
      </Link>

      <TweetContent tweet={tweet} />
    </Stack>
  )
}

export default TweetCard
