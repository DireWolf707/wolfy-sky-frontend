import { useNavigate } from "react-router-dom"
import { Modal, Stack, IconButton } from "@mui/material"
import TweetInput from "../TweetInput"
import { useSelector, useDispatch, twitterSliceActions } from "../../../store"
import CloseIcon from "@mui/icons-material/Close"

const TweetInputModal = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isTweetModalOpen } = useSelector((store) => store.twitter)

  const closeModal = () => dispatch(twitterSliceActions.toggleTweetModal(false))

  const onComplete = ({ data }) => {
    navigate("/feed", { state: { data } })
    closeModal()
  }

  return (
    <Modal
      component={Stack}
      open={isTweetModalOpen}
      onClose={closeModal}
      justifyContent="center"
      alignItems="center"
      overflow="auto"
      slotProps={{ backdrop: { timeout: 400, sx: { bgcolor: "rgba(255,255,255,0.25)" } } }}
      p="28px"
    >
      <Stack bgcolor="#000" borderRadius="16px" sx={{ width: { xs: "100%", md: "640px" } }}>
        <IconButton onClick={closeModal} sx={{ alignSelf: "start", mt: "6px", ml: "8px" }}>
          <CloseIcon />
        </IconButton>

        <TweetInput onComplete={onComplete} />
      </Stack>
    </Modal>
  )
}

export default TweetInputModal
