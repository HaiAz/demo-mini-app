import DataPackageCard from "components/data-package-card";

import "./styles.scss";
import PaymentCard from "components/payment-card";
import Button from "components/button";
import Title from "components/title";

const Test = () => {
  return (
    <div className="test-container">
      <Title
        titleName="Gói độc quyền"
        showAll={true}
        linkShowAll="/package-detail"
      />
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
    </div>
  );
};

export default Test;
