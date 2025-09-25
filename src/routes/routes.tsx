import About from "pages/about";
import Profile from "pages/profile";

const routes = [
  {
    path: "/package-detail",
    element: About,
  },
  {
    path: "/profile/:id",
    element: Profile,
  },
];

const titleMap: Record<string, string> = {
  "/": "Danh sách gói cước",
  "/package-detail": "Chi tiết gói cước",
  "/profile": "Profile",
};

export { routes, titleMap };
