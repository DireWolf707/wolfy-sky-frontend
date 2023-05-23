import { Stack } from "@mui/material"
import TwitterContainer from "../components/twitter/TwitterContainer"
import SearchButton from "../components/twitter/button/SearchButton"

const Search = () => {
  return (
    <TwitterContainer heading="search">
      <Stack p="10px">
        <SearchButton />
      </Stack>
    </TwitterContainer>
  )
}

export default Search
