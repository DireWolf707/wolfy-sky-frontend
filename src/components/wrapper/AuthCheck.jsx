import { useState, useEffect } from "react"
import { Stack } from "@mui/material"
import FourSquares from "../loading/page/FourSquares"
import { userApi } from "../../store"
import Toast from "../layout/Toast"
import toast from "react-hot-toast"

const authToastOptions = { id: "auth-check" }

const AuthCheck = ({ children }) => {
  const [isServerSleeping, setIsServerSleeping] = useState(false)
  const { isLoading, isError, isSuccess } = userApi.useFetchProfileQuery()

  useEffect(() => {
    if (isSuccess && isServerSleeping) toast.success(Toast("Server is awake!"), authToastOptions)
    else if (isError) toast.error(Toast("Server is sleeping, please try again later..."), authToastOptions)
    else if (isLoading) {
      const timeout = setTimeout(() => {
        setIsServerSleeping(true)
        toast.loading(Toast("Waking up server 😴!\nNo need to refresh, it usually takes 40s 🔥"), authToastOptions)
      }, 1700)
      return () => clearTimeout(timeout)
    }
  }, [isLoading, isSuccess, isError])

  if (isLoading || isError)
    return (
      <Stack height="100vh" width="100vw" bgcolor="#000">
        <FourSquares />
      </Stack>
    )

  return children
}

export default AuthCheck
