import { Outlet } from "react-router-dom";
import "./style.scss";

export default function MainLayout() {
  return (
    <div className="main-layout">
      <Outlet />
    </div>
  );
}
