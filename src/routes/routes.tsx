// routes/route.ts
import Home from "pages/home";
import About from "pages/about";
import History from "pages/history";
import Profile from "pages/profile";
import MainLayout from "pages/layout";

export const appRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/history", element: <History /> },
      { path: "/profile/:id", element: <Profile /> },
    ],
  },
];

export const titleMap: Record<string, string> = {
  "/": "Danh sách gói cước",
  "/about": "Chi tiết gói cước",
  "/history": "History",
  "/profile": "Profile",
};
