import { Link } from "react-router-dom"
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from "@mui/lab"
import { timelineItemClasses } from "@mui/lab/TimelineItem"
import TweetContent from "./TweetContent"
import UserAvatar from "../../../components/layout/UserAvatar"

const ParentChildTweetCard = ({ parentTweet, tweet }) => {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 },
        p: "16px 16px 0 16px",
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <Link to={`/public-profile/${tweet.userId}`}>
            <UserAvatar user={tweet.user} />
          </Link>
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>
          <TweetContent tweet={parentTweet} />
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <Link to={`/public-profile/${tweet.userId}`}>
            <UserAvatar user={tweet.user} />
          </Link>
        </TimelineSeparator>

        <TimelineContent>
          <TweetContent tweet={tweet} />
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}

export default ParentChildTweetCard
