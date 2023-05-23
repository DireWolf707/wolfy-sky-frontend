import { useRef, useEffect } from "react"
import { Box, Stack } from "@mui/material"
import { useDispatch, twitterSliceActions } from "../../store"
import ContainerHeader from "./container/ContainerHeader"
import ContainerDivider from "./container/ContainerDivider"

const TwitterContainer = ({ children, heading, refetch }) => {
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
      divider={<ContainerDivider />}
    >
      <ContainerHeader heading={heading} refetch={refetch} />

      <Stack overflow="auto" divider={<ContainerDivider />}>
        <Box ref={containerTopRef} visibility="hidden" />

        {children}
      </Stack>
    </Stack>
  )
}

export default TwitterContainer
