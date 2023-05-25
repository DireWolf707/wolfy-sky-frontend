import { useLocation } from "react-router-dom"
import { twitterApi } from "../../../store"
import { Stack, Typography } from "@mui/material"
import FollowRecomendationCard from "../card/FollowRecomendationCard"
import SearchButton from "../button/SearchButton"

const Rightbar = () => {
  const { pathname } = useLocation()
  const { data, isFetching } = twitterApi.useGetFollowRecomendationsQuery()

  return (
    <Stack flexShrink={0} width="250px" gap={2} sx={{ display: { xs: "none", lg: "flex" } }}>
      {!pathname.startsWith("/search") && <SearchButton />}

      <Stack gap={2} bgcolor="rgba(255,255,255,0.15)" borderRadius="6px" p="16px">
        <Typography fontWeight={600} fontSize="21px">
          Who to follow
        </Typography>

        {isFetching ? (
          <>loading</>
        ) : data?.data?.length ? (
          data?.data?.map((recomendation) => <FollowRecomendationCard user={recomendation} />)
        ) : (
          <FollowRecomendationCard user={{ name: "Direwolf", username: "direwolf707", userId: "11abdbb8-0a5d-492e-b757-e6e0844a9474" }} />
        )}
      </Stack>
    </Stack>
  )
}

export default Rightbar
