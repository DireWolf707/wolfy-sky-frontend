import { twitterApi } from "../store"
import TwitterContainer from "../components/twitter/TwitterContainer"
import NotificationCard from "../components/twitter/card/NotificationCard"

const Notifications = () => {
  const { data, isFetching, isError, refetch } = twitterApi.useGetNotificationsQuery()

  return (
    <TwitterContainer heading="notifications" refetch={refetch}>
      <>
        {isFetching || isError ? (
          <>loading</>
        ) : (
          data.data.map((notification) => <NotificationCard key={notification.id} notification={notification} />)
        )}
      </>
    </TwitterContainer>
  )
}

export default Notifications
