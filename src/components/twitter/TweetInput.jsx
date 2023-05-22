import { useState, useRef } from "react"
import { Box, Stack, Typography, Button, IconButton } from "@mui/material"
import UserAvatar from "../layout/UserAvatar"
import ContainerDivider from "./divider/ContainerDivider"
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined"
import CancelIcon from "@mui/icons-material/Cancel"

const filePreviewInitialState = {
  show: false,
  type: null,
  src: null,
}

const TweetInput = ({ row = 6, parentTweetId = null }) => {
  const tweetRef = useRef(null)
  const fileRef = useRef(null)
  const [filePreview, setFilePreview] = useState(filePreviewInitialState)

  const handleSetFilePreview = (e) => {
    const [file] = e.target.files
    if (!file) return

    let type
    const src = URL.createObjectURL(file)

    if (file.type.startsWith("image")) type = "img"
    else if (file.type.startsWith("video")) type = "video"

    setFilePreview({ show: true, type, src })
  }

  const handleUnsetFilePreview = () => {
    fileRef.current.value = null
    setFilePreview(filePreviewInitialState)
  }

  const handleTweet = () => {
    console.log(parentTweetId)
    console.log(tweetRef.current.value)
    console.log(fileRef.current.files)
  }

  return (
    <Stack p="16px" gap={1} divider={<ContainerDivider />}>
      <Stack flexDirection="row" gap={1.5}>
        <UserAvatar user={{ username: "DW" }} />

        <Stack flexGrow={1} gap={2}>
          <Box
            ref={tweetRef}
            component="textarea"
            fontFamily="Roboto"
            fontWeight={500}
            fontSize="18px"
            placeholder={parentTweetId ? "Any reply?" : "What's going on?"}
            rows={row}
            bgcolor="#000"
            mt="8px"
          />

          {/* File Preview */}
          <Stack position="relative" display={!filePreview.show && "none"}>
            <IconButton onClick={handleUnsetFilePreview} sx={{ position: "absolute", m: "1px", zIndex: "1" }}>
              <CancelIcon sx={{ fill: "rgba(0,0,0,0.8)", bgcolor: "#fff", borderRadius: "100%", fontSize: { xs: "24px", md: "36px" } }} />
            </IconButton>

            {filePreview.type === "img" && <Box component="img" src={filePreview.src} width="100%" borderRadius="24px" />}

            {filePreview.type === "video" && <Box component="video" src={filePreview.src} controls width="100%" borderRadius="24px" />}
          </Stack>
        </Stack>
      </Stack>

      <Stack flexDirection="row" justifyContent="space-between" px="8px">
        {/* File Input */}
        <IconButton onClick={() => fileRef.current.click()}>
          <input
            ref={fileRef}
            onChange={handleSetFilePreview}
            // disabled={}
            type="file"
            hidden
          />
          <InsertPhotoOutlinedIcon sx={{ fill: "#4072F4" }} />
        </IconButton>

        <Button onClick={handleTweet} variant="contained" sx={{ alignSelf: "end", borderRadius: "24px", bgcolor: "#4072F4" }}>
          <Typography fontWeight={500} textTransform="capitalize">
            {parentTweetId ? "Reply" : "Tweet"}
          </Typography>
        </Button>
      </Stack>
    </Stack>
  )
}

export default TweetInput
