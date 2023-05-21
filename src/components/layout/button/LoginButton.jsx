import { Button } from "@mui/material"
import GoogleIcon from "@mui/icons-material/Google"

const LoginButton = () => {
  return (
    <Button startIcon={<GoogleIcon />} variant="contained" color="primary" href={`${import.meta.env.VITE_SERVER_URL}/user/login/google`}>
      login
    </Button>
  )
}

export default LoginButton
