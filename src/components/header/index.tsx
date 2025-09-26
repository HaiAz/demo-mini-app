import { NavBar } from "antd-mobile";
import { useLocation, useNavigate } from "react-router-dom";
import { LeftOutline } from "antd-mobile-icons";
import { titleMap } from "routes/routes";
import "./style.scss";

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHome = pathname === "/";
  const title = titleMap[pathname] || "Home";

  return (
    <NavBar
      className="header"
      backIcon={isHome ? null : <LeftOutline className="icon" />}
      onBack={() => navigate(-1)}
      style={{
        borderBottom: "1px solid red",
      }}
    >
      <span
        style={{
          display: "block",
          fontSize: 18,
          fontWeight: 700,
          paddingTop: 15,
        }}
      >
        {title}
      </span>
    </NavBar>
  );
}
