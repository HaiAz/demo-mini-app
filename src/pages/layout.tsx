import { SafeArea } from "antd-mobile"
import Header from "components/header"
import { Outlet } from "react-router-dom"
import "./style.scss"

export default function MainLayout() {
  return (
    <div className="main-layout">
      <div style={{ background: "#ace0ff" }}>
        <SafeArea position="top" />
      </div>
      <Header />

      {/* Content */}
      <div className="main-content">
        <Outlet />
      </div>

      <SafeArea position="bottom" />
      <div style={{ background: "#ffcfac" }}>
        <SafeArea position="bottom" />
      </div>
    </div>
  )
}
