import { Stack } from "@mui/material"
import { useSearchParams } from "react-router-dom"
import { twitterApi } from "../store"
import TwitterContainer from "../components/twitter/TwitterContainer"
import SearchButton from "../components/twitter/button/SearchButton"
import SearchCard from "../components/twitter/card/SearchCard"

const Search = () => {
  const [searchParams] = useSearchParams()
  const q = searchParams.get("q")
  const { data, isFetching, isError, refetch } = twitterApi.useSearchQuery({ params: searchParams.toString() }, { skip: !q })

  return (
    <TwitterContainer heading="search" refetch={refetch}>
      <Stack p="12px">
        <SearchButton defaultValue={q} />
      </Stack>

      {!q ? (
        <>Search something...</>
      ) : isFetching || isError ? (
        <>loading...</>
      ) : (
        <>
          {data.data.map(({ user, Follow }) => (
            <SearchCard key={user.id} user={user} isFollowed={Boolean(Follow)} />
          ))}
        </>
      )}
    </TwitterContainer>
  )
}

export default Search
