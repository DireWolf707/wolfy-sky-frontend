import { useState } from "react"
import { Button } from "@mui/material"

const FollowButton = ({ isFollowed }) => {
  const [isUnfollowBtnHovered, setisUnfollowBtnHovered] = useState(false)

  if (isFollowed)
    return (
      <Button
        onMouseEnter={() => setisUnfollowBtnHovered(true)}
        onMouseLeave={() => setisUnfollowBtnHovered(false)}
        variant="contained"
        color={isUnfollowBtnHovered ? "btn3" : "btn4"}
        sx={{
          border: isUnfollowBtnHovered ? "2px solid red" : "2px solid rgba(150,150,150)",
          borderRadius: "24px",
          textTransform: "capitalize",
          py: "4px"
        }}
      >
        {isUnfollowBtnHovered ? "unfollow" : "following"}
      </Button>
    )

  return (
    <Button variant="contained" color="btn2" sx={{ borderRadius: "24px", textTransform: "capitalize", py: "4px" }}>
      follow
    </Button>
  )
}

export default FollowButton
