import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import AuthCheck from "./components/wrapper/AuthCheck"
import { ThemeProvider } from "@mui/material"
import { Provider as StoreProvider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { BrowserRouter as Router } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { store, persistor } from "./store"
import { theme } from "./utils/theme.js"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <StoreProvider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={theme}>
        <Toaster />

        <AuthCheck>
          <Router>
            <App />
          </Router>
        </AuthCheck>
      </ThemeProvider>
    </PersistGate>
  </StoreProvider>
)
