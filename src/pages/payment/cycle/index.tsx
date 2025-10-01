import Title from "components/title"
import './style.scss'
import { useState } from "react"
type CycleItem = {
  value: number,
  name: string,
  price: number
}
const Cycle = () => {

  const data: CycleItem[] = [
    {
      value: 30,
      name: '30',
      price: 160000
    },
    {
      value: 90,
      name: "90",
      price: 480000

    },
    {
      value: 180,
      name: "180",
      price: 960000

    },
    {
      value: 360,
      name: "360",
      price: 1920000
    },
  ]
  const [selectCycle, setSelectCycle] = useState<number>(360)

  const handChangCycle = (value: number) => {
    setSelectCycle(value)
  }
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("vi-VN").format(value);
  };
  return (
    <div>
      <div className='Cycle'>
        <Title
          titleName="Chọn chu kỳ"
          showAll={false}
        />
        <div className="Cycle-list">
          {data.map((item, index) => (
            <div className={`Cycle-item ${selectCycle === item.value ? "active" : ''}`}
              key={index}
              onClick={() => handChangCycle(item.value)}
            >
              <p>{item.name} ngày</p>
              <span>{formatCurrency(item.price)}đ</span>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default Cycle