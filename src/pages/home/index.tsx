import { JumboTabs } from "antd-mobile"
import "./style.scss"
import { type PromotionCard as PromotionCardType } from "types/promotion-card"
import PromotionCard from "components/promotion-card"

const promotionCardData: PromotionCardType[] = [
  {
    title: "Gói 30 ngày",
    promotionName: "5G150",
    duration: "30 ngày",
    data: "6GB/ ngày",
    utilities: "TV360",
    cost: "150.000đ",
  },
  {
    title: "Gói 15 ngày",
    promotionName: "5G135TN",
    duration: "15 ngày",
    data: "6GB/ ngày",
    utilities: "TV360",
    cost: "67.500đ",
  },
  {
    title: "Gói 7 ngày",
    promotionName: "5G150TN",
    duration: "7 ngày",
    data: "8GB/ ngày",
    utilities: "TV360",
    cost: "75.000đ",
  },
]

export default function Home() {
  return (
    <div className="home">
      <JumboTabs defaultActiveKey="1">
        <JumboTabs.Tab title="Gói cước 4G/5G" description="" key="1">
          <div className="promotion">
            {promotionCardData.map((card) => (
              <PromotionCard key={card.title} {...card} />
            ))}
          </div>
        </JumboTabs.Tab>
        <JumboTabs.Tab title="Gói cước 5G" description="" key="2">
          2
        </JumboTabs.Tab>
        <JumboTabs.Tab title="Gói cước Hot" description="" key="3">
          3
        </JumboTabs.Tab>
        <JumboTabs.Tab title="Gói cước Dcom" description="" key="4">
          4
        </JumboTabs.Tab>
        <JumboTabs.Tab title="Gói Roaming" description="" key="5">
          5
        </JumboTabs.Tab>
      </JumboTabs>
    </div>
  )
}
