import { useLocation } from "react-router-dom"
import { twitterApi } from "../../../store"
import { Stack, Typography } from "@mui/material"
import FollowRecomendationCard from "../card/FollowRecomendationCard"
import SearchButton from "../button/SearchButton"
import CircularLoader from "../../loading/component/CircularLoader"

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
          <CircularLoader />
        ) : data?.data?.length ? (
          data?.data?.map((recomendation) => <FollowRecomendationCard key={recomendation.id} user={recomendation} />)
        ) : (
          <Typography fontWeight={500} textAlign="center" p="20px" color="rgba(150,150,150)">
            No Recommendations...
          </Typography>
        )}
      </Stack>
    </Stack>
  )
}

export default Rightbar
