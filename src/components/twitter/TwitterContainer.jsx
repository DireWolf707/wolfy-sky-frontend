import { useRef, useEffect } from "react"
import { Box, Stack, Divider } from "@mui/material"
import { useDispatch, twitterSliceActions } from "../../store"
import TwitterHeader from "./TwitterHeader"

const MyDivider = () => <Divider flexItem sx={{ bgcolor: "#303030" }} />

const TwitterContainer = ({ children, heading }) => {
  const containerTopRef = useRef()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(twitterSliceActions.setContainerTopRef(containerTopRef.current))
  }, [])

  return (
    <Stack
      alignSelf="stretch"
      flexGrow={1}
      maxWidth="720px"
      borderLeft="1px solid #303030"
      borderRight="1px solid #303030"
      divider={<MyDivider />}
    >
      <TwitterHeader heading={heading} />

      <Stack overflow="auto" divider={<MyDivider />}>
        <Box ref={containerTopRef} visibility="hidden" />

        {children}
      </Stack>
    </Stack>
  )
}

export default TwitterContainer
