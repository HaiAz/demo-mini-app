import { Checkbox } from "antd-mobile"
import Title from "components/title"
import './style.scss'

type PaymentMethodData = {
  id: number,
  title: string,
  sub: string,

}
const PaymentMethod = () => {
  const data: PaymentMethodData[] = [
    {
      id:1,
      title: "Đăng ký qua tài khoản chính điện thoại",
      sub: "Tài khoản chính: "
    },
  ]
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("vi-VN").format(value);
  };
  return (
    <div className="PaymentMethod">
      <Title
        titleName="Chọn phương thức thanh toán"
        showAll={false} />
      <div className="PaymentMethod-list">
        {data.map((item, index) => (
          <div className="PaymentMethod-item">
            <li key={item.id} className="PaymentMethod-option-item">
              <Checkbox
                checked={true}
                onChange={()=>{}}
              >
                <div>
                  <p>{item.title}</p>
                  <span>
                    {item.sub}
                    <strong>{formatCurrency(2500000)}đ</strong> 
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

