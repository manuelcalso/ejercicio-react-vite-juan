import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import ErrorPage from "./Error.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/menu",
    element: <ErrorPage />,
  },
  {
    path: "/registrate",
    element: <ErrorPage />,
  },
  {
    path: "/buscarreservacion",
    element: <ErrorPage />,
  },
  {
    path: "/reserva",
    element: <ErrorPage />,
  },
  {
    path: "/contacto",
    element: <ErrorPage />,
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
