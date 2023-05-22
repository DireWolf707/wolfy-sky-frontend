import { Stack, Typography } from "@mui/material"
import UserAvatar from "../../layout/UserAvatar"

const Rightbar = () => {
  return (
    <Stack flexShrink={0} width="240px" bgcolor="rgba(255,255,255,0.15)" borderRadius="6px" p="16px" gap={2} sx={{ display: { xs: "none", lg: "flex" } }}>
      <Typography fontWeight={600} fontSize="21px">
        Who to follow
      </Typography>

      <Stack flexDirection="row" alignItems="center" gap={2}>
        <UserAvatar user={{ username: "DW" }} />

        <Stack>
          <Typography fontWeight={600} fontSize="14px">
            Direwolf
          </Typography>

          <Typography fontWeight={600} fontSize="13px" color="rgba(150,150,150)">
            @direwolf
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Rightbar
