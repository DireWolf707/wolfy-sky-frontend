import { useState, useRef } from "react"
import { Box, Stack, Typography, Button, IconButton } from "@mui/material"
import { twitterApi } from "../../store"
import UserAvatar from "../layout/UserAvatar"
import ImageCard from "./card/ImageCard"
import VideoCard from "./card/VideoCard"
import ContainerDivider from "./container/ContainerDivider"
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined"
import CancelIcon from "@mui/icons-material/Cancel"
import requestHandler from "../../utils/requestHandler"

const TweetInput = ({
  onComplete,
  disabled,
  row = 6,
  parentTweetId = null,
  filePreviewInitialState = { show: false, type: null, src: null },
}) => {
  const tweetRef = useRef(null)
  const fileRef = useRef(null)
  const [filePreview, setFilePreview] = useState(filePreviewInitialState)
  const [createTweet, { isLoading }] = twitterApi.useCreateTweetMutation()

  const handleSetFilePreview = (e) => {
    const [file] = e.target.files
    if (!file) return

    let type
    const src = URL.createObjectURL(file)

    if (file.type.startsWith("image")) type = "img"
    else if (file.type.startsWith("video")) type = "vid"

    setFilePreview({ show: true, type, src })
  }

  const handleUnsetFilePreview = () => {
    fileRef.current.value = null
    setFilePreview(filePreviewInitialState)
  }

  const handleCreateTweet = () => {
    const content = tweetRef.current.value
    const file = fileRef.current.files[0]

    if (!content) return

    const body = new FormData()
    body.append("content", content)
    if (parentTweetId) body.append("parentTweetId", parentTweetId)
    if (file) body.append("media", file)

    requestHandler(createTweet({ body }).unwrap(), "creating tweet", "tweet created")
      .then((resp) => {
        tweetRef.current.value = ""
        handleUnsetFilePreview()
        return resp
      })
      .then(onComplete)
  }

  return (
    <Stack gap={1} bgcolor="rgba(255,255,255,0.1)" p="16px" divider={<ContainerDivider />}>
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
            bgcolor="transparent"
            mt="8px"
          />

          {/* File Preview */}
          {filePreview.show && (
            <Stack position="relative">
              <IconButton onClick={handleUnsetFilePreview} sx={{ position: "absolute", zIndex: 1, left: "50%", translate: "-50%" }}>
                <CancelIcon sx={{ fill: "rgba(0,0,0,0.8)", bgcolor: "#fff", borderRadius: "100%", fontSize: { xs: "24px", md: "36px" } }} />
              </IconButton>

              {filePreview.type === "img" && <ImageCard src={filePreview.src} />}

              {filePreview.type === "vid" && <VideoCard src={filePreview.src} />}
            </Stack>
          )}
        </Stack>
      </Stack>

      <Stack flexDirection="row" justifyContent="space-between" px="8px">
        {/* File Input */}
        <IconButton onClick={() => fileRef.current.click()}>
          <input ref={fileRef} onChange={handleSetFilePreview} disabled={isLoading} type="file" hidden />
          <InsertPhotoOutlinedIcon sx={{ fill: "#4072F4" }} />
        </IconButton>

        <Button
          onClick={handleCreateTweet}
          disabled={isLoading || disabled}
          variant="contained"
          sx={{ alignSelf: "end", borderRadius: "24px", bgcolor: "#4072F4" }}
        >
          <Typography fontWeight={500} textTransform="capitalize">
            {parentTweetId ? "Reply" : "Tweet"}
          </Typography>
        </Button>
      </Stack>
    </Stack>
  )
}

export default TweetInput
