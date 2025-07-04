import { useRef } from "react"
import { Stack, Typography, IconButton } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector, twitterSliceActions } from "../../../store"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import CachedIcon from "@mui/icons-material/Cached"
import { motion, useAnimationControls } from "framer-motion"

const ContainerHeader = ({ heading, refetch }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { parentTweetList } = useSelector((store) => store.twitter)
  const controls = useAnimationControls()
  const refreshRef = useRef(null)

  const refresh = async () => {
    try {
      const numRotation = 40
      controls.start({ rotate: -360 * numRotation, transition: { duration: numRotation, repeat: Infinity } })
      await refetch()
    } catch (err) {
    } finally {
      if (!refreshRef.current) return
      controls.stop()
      controls.set({ rotate: 0 })
    }
  }

  const onClickHandler = () => {
    const tweetId = parentTweetList.at(-1)
    if (tweetId) navigate(`/tweet/${tweetId}`)
    else navigate("/feed")

    dispatch(twitterSliceActions.popParentTweet())
  }

  return (
    <Stack flexDirection="row" justifyContent="space-between" alignItems="center" px="16px" py="8px">
      <Stack flexDirection="row" alignItems="center">
        {heading === "tweet" && (
          <IconButton onClick={onClickHandler}>
            <ArrowBackIcon fontSize="small" />
          </IconButton>
        )}

        <Typography fontWeight={900} textTransform="capitalize" fontSize="22px">
          {heading}
        </Typography>
      </Stack>

      {refetch && (
        <IconButton ref={refreshRef} onClick={refresh}>
          <CachedIcon component={motion.svg} animate={controls} />
        </IconButton>
      )}
    </Stack>
  )
}

export default ContainerHeader
