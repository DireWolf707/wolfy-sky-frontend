import { useState, useEffect, useRef } from "react"
import { Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import ImageCard from "./ImageCard"
import VideoCard from "./VideoCard"
import LikeButton from "../button/LikeButton"
import CommentButton from "../button/CommentButton"
import DateFormat from "./DateFormat"
import { useInView } from "framer-motion"
import socket from "../../../utils/socket"
import roomKey from "../../../utils/roomKey"

const TweetContent = ({ tweet, likeHandler }) => {
  const contentRef = useRef(null)
  const isInView = useInView(contentRef)
  const [metadata, setMetadata] = useState({ likes: null, comments: null })

  useEffect(() => {
    if (isInView) {
      // tweet room key
      const key = roomKey("tweet", tweet.id)
      // like event and handler
      const likeSubEvent = roomKey(key, "likes")
      const likeSubHandler = (likes) => setMetadata((pv) => ({ ...pv, likes }))
      // comment event and handler
      const commentSubEvent = roomKey(key, "comments")
      const commentSubHandler = (comments) => setMetadata((pv) => ({ ...pv, comments }))
      // sub to tweet
      socket
        .emitWithAck("sub_tweet", { tweetId: tweet.id })
        // set metadata
        .then(setMetadata)
        // set listeners
        .then(() => {
          socket.on(likeSubEvent, likeSubHandler)
          socket.on(commentSubEvent, commentSubHandler)
        })

      return () =>
        socket.emit("unsub_tweet", { tweetId: tweet.id }).off(likeSubEvent, likeSubHandler).off(commentSubEvent, commentSubHandler)
    }
  }, [isInView])

  return (
    <Stack ref={contentRef} flexGrow={1}>
      <Stack flexDirection="row" alignItems="center" gap={1}>
        <Link to={`/public-profile/${tweet.userId}`}>
          <Typography fontWeight={600} fontSize="14px">
            {tweet.user.name}
          </Typography>
        </Link>

        <Typography fontWeight={600} fontSize="13px" color="rgba(150,150,150)">
          @{tweet.user.username}
        </Typography>
      </Stack>

      <Typography fontWeight={500} fontSize="15px">
        {tweet.content}
      </Typography>

      {tweet.mediaType && (
        <Stack mt="12px" justifyContent="center">
          {tweet.mediaType === "img" && <ImageCard src={tweet.mediaURL} />}

          {tweet.mediaType === "vid" && <VideoCard src={tweet.mediaURL} />}
        </Stack>
      )}

      <Stack mt="8px">
        <DateFormat date={tweet.createdAt} />
      </Stack>

      <Stack flexDirection="row" alignItems="center" mt="6px">
        <CommentButton tweetId={tweet.id} comments={metadata.comments} />

        <LikeButton tweetId={tweet.id} likes={metadata.likes} isLiked={tweet.isLiked} likeHandler={likeHandler} />
      </Stack>
    </Stack>
  )
}

export default TweetContent
