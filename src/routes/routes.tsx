import { lazy } from "react";

const Packages = lazy(() => import("pages/packages"));
const Payment = lazy(() => import("pages/payment"));

const routes = [
  {
    path: "/packages",
    element: <Packages />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
];

const titleMap: Record<string, string> = {
  "/": "Danh sách gói cước",
  "/packages": "Danh sách gói cước",
  "/payment": "Thanh toán",
};

export { routes, titleMap };
