import Search from "pages/search";
import { lazy } from "react";

const Packages = lazy(() => import("pages/packages"));
const Payment = lazy(() => import("pages/payment"));

const routes = [
  {
    path: "/packages",
    element: <Packages />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
];

const titleMap: Record<string, string> = {
  "/": "Danh sách gói cước",
  "/packages": "Danh sách gói cước",
  "/search": "Tìm kiếm",
  "/payment": "Thanh toán",
};

export { routes, titleMap };
