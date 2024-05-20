import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import DashboardPage from "./pages/DashboardPage"
import ListPage from "./pages/ListPage"
import FormPage from "./pages/FormPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />
  },
  {
    path: "/listpage",
    element: <ListPage />
  },
  {
    path: "/formpage",
    element: <FormPage />
  },
  {
    path: '/loginpage',
    element: <LoginPage />
  },
  {
    path: '/registerpage',
    element: <RegisterPage />
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
