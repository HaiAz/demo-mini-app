import Header from "components/header";
import PackageHeader from "./package-header";
import "./styles.scss";
import BenefitsSection from "./benefits-section";
import CheckoutFooter from "./checkout-footer";
import Cycle from "./cycle";
import PaymentMethod from "./paymentMethod";

const Payment = () => {
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
        <Cycle />
        <PaymentMethod />
      </main>
      <footer>
        <CheckoutFooter />
      </footer>
    </div>
  );
};

export default Payment;
