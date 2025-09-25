// routes/route.ts
import Home from "pages/home"
import About from "pages/about"
import Profile from "pages/profile"
import MainLayout from "pages/layout"

export const appRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/profile/:id", element: <Profile /> },
    ],
  },
]

export const titleMap: Record<string, string> = {
  "/": "Danh sách gói cước",
  "/package-detail": "Chi tiết gói cước",
  "/profile": "Profile",
}
