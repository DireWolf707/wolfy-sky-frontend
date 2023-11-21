import { useState, useEffect } from "react"
import { Stack, Button, Typography, IconButton, Badge } from "@mui/material"
import { useNavigate } from "react-router-dom"
import socket from "../../../utils/socket"

const NotificationButton = ({ title, href, Icon, textVisible }) => {
  const navigate = useNavigate()
  const [numNotifications, setNumNotifications] = useState(0)

  useEffect(() => {
    // notification event and handler
    const notificationSubEvent = "new_notification"
    const notificationSubHandler = () => setNumNotifications((pv) => pv + 1)
    // set listener
    socket.on(notificationSubEvent, notificationSubHandler)

    return () => socket.off(notificationSubEvent, notificationSubHandler)
  }, [])

  const onClickHandler = () => {
    setNumNotifications(0)
    navigate(href)
  }

  if (textVisible)
    return (
      <Button onClick={onClickHandler}>
        <Stack flexDirection="row" alignItems="center" gap={1.2}>
          <Badge overlap="circular" variant="dot" badgeContent={numNotifications} color="primary">
            <Icon fontSize="large" />
          </Badge>

          <Typography fontWeight={500} textTransform="capitalize">
            {title}
          </Typography>
        </Stack>
      </Button>
    )

  return (
    <IconButton onClick={onClickHandler}>
      <Badge overlap="circular" variant="dot" badgeContent={numNotifications} color="primary">
        <Icon />
      </Badge>
    </IconButton>
  )
}

export default NotificationButton
