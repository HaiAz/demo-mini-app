import { brandLogos } from "assets/img";
import "./styles.scss";

type BrandNameType =
  | "momo"
  | "shopeePay"
  | "viettelMoney"
  | "viettelPay"
  | "vnpay"
  | "vnpayQr"
  | "zaloPay";

interface IPaymentCardProps {
  brandLogo: BrandNameType;
  brandName: string;
  discount?: string;
  voucher?: string;
}

const PaymentCard = ({
  brandLogo,
  brandName,
  discount,
  voucher,
}: IPaymentCardProps) => {
  return (
    <div className="payment-container">
      <div className="logo">
        <img src={brandLogos[brandLogo]} alt="brand-logo" />
      </div>
      <div className="brand-description">
        <p className="brand-name">{brandName}</p>
        <p className="brand-discount">Chiết khấu {discount}</p>
        <p className="brand-voucher">{voucher}</p>
      </div>
    </div>
  );
};

export default PaymentCard;
