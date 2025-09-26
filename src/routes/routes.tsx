import About from "pages/about";
import Profile from "pages/profile";
import Test from "pages/test";

const routes = [
  {
    path: "/package-detail",
    element: About,
  },
  {
    path: "/profile/:id",
    element: Profile,
  },
  {
    path: "/test",
    element: Test,
  },
];

const titleMap: Record<string, string> = {
  "/": "Danh sách gói cước",
  "/package-detail": "Chi tiết gói cước",
  "/profile": "Profile",
  "/test": "Test giao diện",
};

export { routes, titleMap };
