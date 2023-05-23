import { Stack } from "@mui/material"
import TwitterContainer from "../components/twitter/TwitterContainer"
import SearchButton from "../components/twitter/button/SearchButton"
import SearchCard from "../components/twitter/card/SearchCard"

const u = {
  id: 123,
  name: "Direwolf",
  username: "direwolf",
  userId: 1234
}

const Search = () => {
  return (
    <TwitterContainer heading="search">
      <Stack p="12px">
        <SearchButton />
      </Stack>

      <SearchCard user={u} />
      <SearchCard user={u} />
      <SearchCard user={u} />
    </TwitterContainer>
  )
}

export default Search
