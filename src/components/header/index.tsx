import { NavBar } from "antd-mobile";
import { useLocation, useNavigate } from "react-router-dom";
import { titleMap } from "routes/routes";
import "./style.scss";
import { LeftArrowIcon } from "assets/icon";

type PositionType = "left" | "center";

interface IHeaderProps {
  position?: PositionType;
  className?: string;
}

export default function Header({
  className = "",
  position = "left",
}: IHeaderProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHome = pathname === "/";
  const title = titleMap[pathname] || "Home";

  return (
    <NavBar
      className={`header ${className} ${position ? position : ""}`}
      backIcon={isHome ? null : <LeftArrowIcon width={"32"} height={"32"} />}
      onBack={() => navigate(-1)}
    >
      <span className="title">{title}</span>
    </NavBar>
  );
}
