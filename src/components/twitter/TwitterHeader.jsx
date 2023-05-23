import { useRef } from "react"
import { Stack, Typography, IconButton } from "@mui/material"
import { useNavigate } from "react-router-dom"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import CachedIcon from "@mui/icons-material/Cached"
import { motion, useAnimationControls } from "framer-motion"

const TwitterHeader = ({ heading, refetch }) => {
  const navigate = useNavigate()
  const controls = useAnimationControls()
  const refreshRef = useRef(null)

  const refresh = async () => {
    const numRotation = 40
    controls.start({ rotate: -360 * numRotation, transition: { duration: numRotation, repeat: Infinity } })
    // await refetch()
    await new Promise((resolve) => setTimeout(resolve, 2000))
    if (!refreshRef.current) return

    controls.stop()
    controls.set({ rotate: 0 })
  }

  return (
    <Stack flexDirection="row" justifyContent="space-between" alignItems="center" px="16px" py="8px">
      <Stack flexDirection="row" alignItems="center">
        {heading === "tweet" && (
          <IconButton onClick={() => navigate("/feed")}>
            <ArrowBackIcon fontSize="small" />
          </IconButton>
        )}

        <Typography fontWeight={900} textTransform="capitalize" fontSize="22px">
          {heading}
        </Typography>
      </Stack>

      <IconButton ref={refreshRef} onClick={refresh}>
        <CachedIcon component={motion.svg} animate={controls} />
      </IconButton>
    </Stack>
  )
}

export default TwitterHeader
