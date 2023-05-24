import { useState } from "react"
import { Button } from "@mui/material"
import { twitterApi } from "../../../store"
import requestHandler from "../../../utils/requestHandler"

const FollowButton = ({ userId, isFollowed: _isFollowed }) => {
  const [isFollowed, setIsFollowed] = useState(_isFollowed)
  const [isUnfollowBtnHovered, setisUnfollowBtnHovered] = useState(false)
  const [follow, { isLoading: isFollowing }] = twitterApi.useFollowMutation()
  const [unfollow, { isLoading: isUnfollowing }] = twitterApi.useUnfollowMutation()

  const followHandler = () => requestHandler(follow({ userId }).unwrap(), "following", "followed").then(() => setIsFollowed(true))

  const unfollowHandler = () => requestHandler(unfollow({ userId }).unwrap(), "unfollowing", "unfollowed").then(() => setIsFollowed(false))

  if (isFollowed)
    return (
      <Button
        onClick={unfollowHandler}
        disabled={isUnfollowing}
        onMouseEnter={() => setisUnfollowBtnHovered(true)}
        onMouseLeave={() => setisUnfollowBtnHovered(false)}
        variant="contained"
        color={isUnfollowBtnHovered ? "btn3" : "btn4"}
        sx={{
          border: isUnfollowBtnHovered ? "2px solid red" : "2px solid rgba(150,150,150)",
          borderRadius: "24px",
          textTransform: "capitalize",
          py: "4px",
        }}
      >
        {isUnfollowBtnHovered ? "unfollow" : "following"}
      </Button>
    )

  return (
    <Button
      onClick={followHandler}
      disabled={isFollowing}
      variant="contained"
      color="btn2"
      sx={{ borderRadius: "24px", textTransform: "capitalize", py: "4px" }}
    >
      follow
    </Button>
  )
}

export default FollowButton
