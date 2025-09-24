import { NavBar, Popover, Space, Toast } from "antd-mobile"
import { useLocation, useNavigate } from "react-router-dom"
import { LeftOutline, MoreOutline } from "antd-mobile-icons"
import { titleMap } from "routes/routes"
import "./style.scss"

export default function Header() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const isHome = pathname === "/"
  const title = titleMap[pathname] || "Home"

  const actions = [
    { key: "a", text: "Nội dung A" },
    { key: "b", text: "Nội dung B" },
    { key: "c", text: "Nội dung C" },
  ]

  return (
    <NavBar
      className="header"
      backIcon={isHome ? null : <LeftOutline className="icon" />}
      onBack={() => navigate(-1)}
      left={<span className="title">{title}</span>}
      style={{
        borderBottom: "1px solid red",
      }}
    >
      {title}
    </NavBar>
  )
}
