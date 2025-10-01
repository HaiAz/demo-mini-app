import About from "pages/about";
import Packages from "pages/packages";
import Payment from "pages/payment";
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
  {
    path: "/packages",
    element: Packages,
  },
  {
    path: "/payment",
    element: Payment,
  },
];

const titleMap: Record<string, string> = {
  "/": "Danh sách gói cước",
  "/package-detail": "Chi tiết gói cước",
  "/profile": "Profile",
  "/packages": "Danh sách gói cước",
  "/payment": "Thanh toán",
};

export { routes, titleMap };
