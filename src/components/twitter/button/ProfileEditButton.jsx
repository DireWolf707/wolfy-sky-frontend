import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"

const ProfileEditButton = () => {
  const navgate = useNavigate()

  return (
    <Button
      onClick={() => navgate("/profile")}
      variant="contained"
      color="btn2"
      sx={{ borderRadius: "24px", textTransform: "capitalize", py: "4px" }}
    >
      edit
    </Button>
  )
}

export default ProfileEditButton
