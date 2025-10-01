import Header from "components/header";
import PackageHeader from "./package-header";
import "./styles.scss";
import BenefitsSection from "./benefits-section";
import CheckoutFooter from "./checkout-footer";
import Cycle from "./cycle";
import PaymentMethod, { PaymentMethodData } from "./paymentMethod";
import ApplyDateSelector from "./apply-date-selector";
import { useState } from "react";

const Payment = () => {
  const methods: PaymentMethodData[] = [
    {
      id: 1,
      title: "Đăng ký qua tài khoản chính điện thoại",
      sub: "Tài khoản chính: ",
      subDes: 2500000
    }
  ]
  const handleSelectMethod = (id: number) => {
    console.log("Đã chọn phương thức thanh toán:", id)
  }

  const billing: PaymentMethodData[] =[
    {
      id: 1,
      title: "Đóng cước sau",
    }
  ]
  const handleSelectBilling = (id: number) => {
    console.log("Đã chọn phương thức đóng cước:", id)
  }
  const [value, setValue] = useState(1);
  console.log("🚀 ~ Payment ~ value:", value);

  const handleSetValue = (value: number) => {
    setValue(value);
  };
  return (
    <div className="payment-container">
      <header>
        <Header />
      </header>
      <main className="content">
        <PackageHeader duration="30" packageName="5G160B" price={160000} />
        <BenefitsSection
          benefits={[
            "120GB (4GB/ngày)",
            "100 phút gọi ngoại mạng",
            "Miễn phí 10 phút đầu tiên của tất cả các cuộc gọi nội mạng (tối đa 1.000 phút)",
            "Xem truyền hình trực tuyến và kho phim trên TV360",
          ]}
          description="Ưu đãi dùng trong mỗi chu kỳ 30 ngày"
        />

        <ApplyDateSelector onChange={handleSetValue} />

        <Cycle />
        {/* phương thưc thanh toán */}
        <PaymentMethod
          data={methods}
          onSelect={handleSelectMethod}
          title="Chọn phương thức thanh toán"
           />
        {/* phương thức đóng cước */}
        <PaymentMethod
          data={billing}
          onSelect={handleSelectBilling}
          title="Chọn phương thức đóng cước"
           />
      </main>
      <footer>
        <CheckoutFooter />
      </footer>
    </div>
  );
};

export default Payment;
