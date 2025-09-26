import DataPackageCard from "components/data-package-card";

import "./styles.scss";
import PaymentCard from "components/payment-card";

const Test = () => {
  return (
    <div className="test-container">
      <DataPackageCard
        packageName="5G29"
        duration="3 ngày"
        price="29.000"
        features={["6GB Data", "100p nội mạng, 200p ngoại mạng", "1000 SMS"]}
        socialIcons={["tiktok", "tv360"]}
        isHot={true}
      />
      <DataPackageCard
        packageName="5G10MYT"
        duration="1 ngày"
        price="10.000"
        features={[
          "4GB Data / ngày",
          "70p nội mạng , 10p ngoại mạng",
          "80 SMS",
          "Miễn phí truy cập TV360, Tiktok, Youtube",
        ]}
        socialIcons={["tiktok", "tv360", "spotify"]}
        type="secondary"
        isPromo
        promoText="Khuyên dùng"
      />

      <PaymentCard
        brandLogo="momo"
        brandName="Ví Momo"
        discount="2.5%"
        voucher="Giảm 50k điện thoại, Internet cho bạn mới"
      />

      <PaymentCard
        brandLogo="shopeePay"
        brandName="Shopee pay"
        discount="5.5%"
        voucher="Bạn mới giảm 20%. Tặng quà đến 300K."
      />
    </div>
  );
};

export default Test;
