import { Box, Stack, Typography, Divider, Button } from "@mui/material"
import UserAvatar from "../components/layout/UserAvatar"
import TweetCard from "../components/twitter/TweetCard"

const Feed = () => {
  return (
    <Stack
      alignSelf="stretch"
      flexGrow={1}
      maxWidth="720px"
      borderLeft="1px solid #303030"
      borderRight="1px solid #303030"
      divider={<Divider flexItem sx={{ bgcolor: "#303030" }} />}
    >
      <Typography fontWeight={900} fontSize="22px" p="8px">
        Home
      </Typography>

      <Stack p="16px" gap={2}>
        <Stack flexDirection="row" gap={1.5}>
          <UserAvatar user={{ username: "DW" }} />

          <Box
            flexGrow={1}
            component="textarea"
            fontFamily="Roboto"
            fontWeight={500}
            fontSize="15px"
            placeholder="What's going on?"
            rows={4}
            bgcolor="#000"
            mt="6px"
          />
        </Stack>

        <Button variant="contained" sx={{ alignSelf: "end", borderRadius: "24px", bgcolor: "#4072F4" }}>
          <Typography fontWeight={500} textTransform="capitalize">
            Tweet
          </Typography>
        </Button>
      </Stack>

      <TweetCard />
      <TweetCard />
      <TweetCard />
    </Stack>
  )
}

export default Feed
