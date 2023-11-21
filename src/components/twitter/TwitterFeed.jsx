import { Stack } from "@mui/material"
import ParentChildTweetCard from "./card/ParentChildTweetCard"
import TweetCard from "./card/TweetCard"
import EmptyCard from "./card/EmptyCard"
import CircularLoader from "../loading/component/CircularLoader"
import ContainerDivider from "./container/ContainerDivider"

const TwitterFeed = ({ feed, likeHandler, emptyText }) => {
    return (
        <Stack divider={<ContainerDivider />}>

            {feed ? (
                feed.length ? (
                    feed.map(({ tweet, isTweetLiked, parentTweet, isParentTweetLiked }) => {
                        if (parentTweet)
                            return (
                                <ParentChildTweetCard
                                    key={tweet.id + parentTweet.id}
                                    parentTweet={{ ...parentTweet, isLiked: isParentTweetLiked }}
                                    tweet={{ ...tweet, isLiked: isTweetLiked }}
                                    likeHandler={likeHandler}
                                />
                            )
                        return <TweetCard key={tweet.id} tweet={{ ...tweet, isLiked: isTweetLiked }} likeHandler={likeHandler} />
                    })
                ) : (
                    <EmptyCard text={emptyText} />
                )
            ) : (
                <CircularLoader />
            )}
        </Stack >
    )
}

export default TwitterFeed