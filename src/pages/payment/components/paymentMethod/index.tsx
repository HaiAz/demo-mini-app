import { Checkbox } from "antd-mobile"
import Title from "components/title"
import './style.scss'
import { formatVND } from "utils/format";
import { useState } from "react";

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
  const [selectedId, setSelectedId] = useState<number>(1);

const handleSelect = (id: number) => {
  setSelectedId(id);
};
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
                checked={selectedId === item.id}
                onChange={() => {onSelect(item.id); handleSelect(item.id)}}
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

