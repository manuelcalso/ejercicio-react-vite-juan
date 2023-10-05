import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import ErrorPage from "./Error.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Menu from "./Menu.jsx"
import Registrate from "./Registrate.jsx"
import Contacto from "./Contacto.jsx"
import Reserva from "./Reserva.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/menu",
    element: <Menu />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/registrate",
    element: <Registrate />,
  },
  {
    path: "/reserva",
    element: <Reserva />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
  {
    path: "/comenta",
    element: <ErrorPage />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
