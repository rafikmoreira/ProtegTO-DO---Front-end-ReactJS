import React from "react"
import ReactDOM from "react-dom"
import "./styles/reset.scss"
import "react-toastify/dist/ReactToastify.css"
import "remixicon/fonts/remixicon.css"
import { ThemeProvider } from "styled-components"
import { AuthProvider } from "./context/auth"
import { AppRouter } from "./router"
import { appTheme } from "./styles/theme"
import { ToastContainer } from "react-toastify"

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={appTheme}>
        <AppRouter />
      </ThemeProvider>
    </AuthProvider>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </React.StrictMode>,
  document.getElementById("root")
)
