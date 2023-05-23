import { Stack } from "@mui/material"
import { useSearchParams } from "react-router-dom"
import TwitterContainer from "../components/twitter/TwitterContainer"
import SearchButton from "../components/twitter/button/SearchButton"
import SearchCard from "../components/twitter/card/SearchCard"

const u = {
  id: 123,
  name: "Direwolf",
  username: "direwolf",
  userId: 1234,
}

const Search = () => {
  const [searchParams] = useSearchParams()
  // console.log(searchParams.toString())

  return (
    <TwitterContainer heading="search">
      <Stack p="12px">
        <SearchButton defaultValue={searchParams.get("q")} />
      </Stack>

      <SearchCard user={u} />
      <SearchCard user={u} />
      <SearchCard user={u} />
    </TwitterContainer>
  )
}

export default Search
