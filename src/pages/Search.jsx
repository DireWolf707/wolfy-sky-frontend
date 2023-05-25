import { useState, useEffect } from "react"
import { Stack } from "@mui/material"
import { useSearchParams } from "react-router-dom"
import { twitterApi } from "../store"
import TwitterContainer from "../components/twitter/TwitterContainer"
import SearchButton from "../components/twitter/button/SearchButton"
import SearchCard from "../components/twitter/card/SearchCard"
import requestHandler from "../utils/requestHandler"
import CircularLoader from "../components/loading/component/CircularLoader"
import EmptyCard from "../components/twitter/card/EmptyCard"

const Search = () => {
  const [searchParams] = useSearchParams()
  const q = searchParams.get("q")
  const [searchResult, setSearchResult] = useState(null)
  const [search] = twitterApi.useLazySearchQuery()

  useEffect(() => {
    if (q) {
      setSearchResult(null)
      const params = searchParams.toString()
      requestHandler(search({ params }).unwrap(), "searching", "search complete").then(({ data }) => setSearchResult(data))
    }
  }, [q])

  return (
    <TwitterContainer heading="search">
      <Stack p="12px">
        <SearchButton defaultValue={q} />
      </Stack>

      {!q ? (
        <EmptyCard text="search username" />
      ) : searchResult ? (
        searchResult.length ? (
          searchResult.map(({ user, Follow }) => <SearchCard key={user.id} user={user} isFollowed={Boolean(Follow)} />)
        ) : (
          <EmptyCard text="no user found" />
        )
      ) : (
        <CircularLoader />
      )}
    </TwitterContainer>
  )
}

export default Search
