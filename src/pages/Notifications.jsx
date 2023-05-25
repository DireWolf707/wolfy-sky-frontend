import { useState, useEffect, useCallback } from "react"
import { twitterApi } from "../store"
import TwitterContainer from "../components/twitter/TwitterContainer"
import NotificationCard from "../components/twitter/card/NotificationCard"
import requestHandler from "../utils/requestHandler"
import CircularLoader from "../components/loading/component/CircularLoader"
import EmptyCard from "../components/twitter/card/EmptyCard"

const Notifications = () => {
  const [notifications, setNotifications] = useState(null)
  const [getNotifications] = twitterApi.useLazyGetNotificationsQuery()

  const refetch = useCallback(async () => {
    setNotifications(null)
    await requestHandler(getNotifications().unwrap(), "fetching notifications", "notifications fetched").then(({ data }) =>
      setNotifications(data)
    )
  }, [])

  useEffect(() => {
    refetch()
  }, [])

  return (
    <TwitterContainer heading="notifications" refetch={refetch}>
      {notifications ? (
        notifications.length ? (
          notifications.map((notification) => <NotificationCard key={notification.id} notification={notification} />)
        ) : (
          <EmptyCard />
        )
      ) : (
        <CircularLoader />
      )}
    </TwitterContainer>
  )
}

export default Notifications
