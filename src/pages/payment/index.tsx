import Header from "components/header";
import PackageHeader from "./package-header";
import "./styles.scss";

const Payment = () => {
  return (
    <div className="payment-container">
      <Header />

      <div className="content">
        <PackageHeader duration="30" packageName="5G160B" price={160000} />
      </div>

      <div className="footer"></div>
    </div>
  );
};

export default Payment;
