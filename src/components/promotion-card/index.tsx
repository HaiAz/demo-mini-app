import { type PromotionCard as PromotionCardType } from "types/promotion-card"
import "./style.scss"
import { Button, Card, Space } from "antd-mobile"
import { useNavigate } from "react-router-dom"

export default function PromotionCard(props: PromotionCardType) {
  const { title, promotionName, duration, data, cost, utilities } = props
  const navigate = useNavigate()
  return (
    <div className="promotion-card">
      <div className="title">{title}</div>

      <Card
        onClick={() => navigate("/about")}
        className="card"
        title={
          <div className="card-title" style={{ fontWeight: "normal" }}>
            <Space direction="horizontal" align="center">
              <span className="promotion">{promotionName}</span>
              <span style={{ color: "#fff" }}>-</span>
              <span className="duration"> {duration}</span>
            </Space>
          </div>
        }
        // onBodyClick={onBodyClick}
        // onHeaderClick={onHeaderClick}
        style={{ borderRadius: "16px" }}
      >
        <Space className="content" direction="horizontal" justify="between">
          <Space direction="vertical">
            <Space direction="horizontal">
              <span className="label">Data: </span>
              <span className="value">{data}</span>
            </Space>
            <Space direction="horizontal">
              <span className="label">Tiện ích: </span>
              <span className="value">{utilities}</span>
            </Space>
          </Space>

          <Space className="action" direction="vertical">
            <span className="cost">{cost}</span>
            <Button className="register" color="primary" fill="outline">
              Đăng ký
            </Button>
          </Space>
        </Space>
      </Card>
    </div>
  )
}
