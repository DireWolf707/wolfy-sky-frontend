import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Box, Stack } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

const SearchButton = () => {
  const navigate = useNavigate()
  const searchRef = useRef(null)

  const searchHandler = (e) => {
    e.preventDefault()
    const query = searchRef.current.value
    if (!query) return

    const params = new URLSearchParams({ q: query })
    navigate(`/search?${params.toString()}`)
    searchRef.current.value = ""
  }

  return (
    <Stack
      component="form"
      onSubmit={searchHandler}
      flexDirection="row"
      alignItems="center"
      gap={1}
      bgcolor="rgba(255,255,255,0.15)"
      borderRadius="24px"
      px="12px"
      py="10px"
    >
      <SearchIcon sx={{ fill: "rgba(150,150,150)" }} />

      <Box
        ref={searchRef}
        component="input"
        flexGrow={1}
        placeholder="Search..."
        fontSize="14px"
        fontWeight={600}
        bgcolor="transparent"
        pr="4px"
      />
    </Stack>
  )
}

export default SearchButton
