import { Box, Stack, Typography, Button } from "@mui/material"
import UserAvatar from "../layout/UserAvatar"

const TweetInput = ({ parentTweetId = null }) => {
  return (
    <Stack p="16px" gap={2}>
      <Stack flexDirection="row" gap={1.5}>
        <UserAvatar user={{ username: "DW" }} />

        <Box
          flexGrow={1}
          component="textarea"
          fontFamily="Roboto"
          fontWeight={500}
          fontSize="15px"
          placeholder={parentTweetId ? "Any reply?" : "What's going on?"}
          rows={4}
          bgcolor="#000"
          mt="8px"
        />
      </Stack>

      <Button variant="contained" sx={{ alignSelf: "end", borderRadius: "24px", bgcolor: "#4072F4" }}>
        <Typography fontWeight={500} textTransform="capitalize">
          Tweet
        </Typography>
      </Button>
    </Stack>
  )
}

export default TweetInput
