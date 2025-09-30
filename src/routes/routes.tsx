import About from "pages/about";
import Payment from "pages/payment";
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
  {
    path: "/payment",
    element: Payment,
  },
];

const titleMap: Record<string, string> = {
  "/": "Danh sách gói cước",
  "/package-detail": "Chi tiết gói cước",
  "/profile": "Profile",
  "/test": "Test giao diện",
  "/payment": "Thanh toán",
};

export { routes, titleMap };
