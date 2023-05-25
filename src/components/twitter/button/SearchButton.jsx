import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Box, Stack } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import { toast } from "react-hot-toast"
import Toast from "../../layout/Toast"

const SearchButton = ({ defaultValue = "" }) => {
  const navigate = useNavigate()
  const searchRef = useRef(null)

  const searchHandler = (e) => {
    e.preventDefault()
    const query = searchRef.current.value
    if (!query) return toast.error(Toast("please write something"))

    const params = new URLSearchParams({ q: query })
    navigate(`/search?${params.toString()}`)
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
        defaultValue={defaultValue}
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
