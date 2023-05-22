import { createTheme } from "@mui/material"
import { red,grey } from "@mui/material/colors"

export const theme = createTheme({
  palette: {
    btn1: {
      main: "#fff",
      dark: red[50],
      contrastText: red[400],
    },

    btn2: {
      main: "#fff",
      dark: grey[400],
      contrastText: "#000",
    },
  },
})
