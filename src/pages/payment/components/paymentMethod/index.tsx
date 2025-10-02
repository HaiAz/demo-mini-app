import { Checkbox } from "antd-mobile"
import Title from "components/title"
import './style.scss'
import { formatVND } from "utils/format";

export type PaymentMethodData = {
  id: number,
  title: string,
  sub?: string,
  subDes?: number;
}
type PaymentMethodProps = {
  data: PaymentMethodData[]; // nhận props từ cha
  onSelect: (id: number) => void; //nhận thêm hàm từ cha 
  title: string
};
const PaymentMethod = ({ data, onSelect,title }: PaymentMethodProps) => {
  return (
    <div className="PaymentMethod">
      <Title
        titleName={title}
        showAll={false} />
      <div className="PaymentMethod-list">
        {data.map((item, index) => (
          <div className="PaymentMethod-item" key={index} >
            <li className="PaymentMethod-option-item">
              <Checkbox
                checked={index === 0}
                onChange={() => {onSelect(item.id)}}
              >
                <div>
                  <p>{item.title}</p>
                  <span>
                    {item.sub && item.sub}
                    {item.subDes && (
                      <strong>{formatVND(item.subDes)}</strong>
                    )}
                  </span>
                </div>
              </Checkbox>
            </li>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PaymentMethod

