import "./styles.scss";
import SuggestBadge from "./suggest-badge";
import CardHeader from "./card-header";
import FeatureList from "./feature-list";
import { IDataPackageCard } from "./types";
import SocialList from "./social-list";

const DataPackageCard = ({
  packageName,
  price,
  duration,
  features,
  socialIcons = [],
  isHot,
  isPromo,
  promoText,
  type = "primary",
  onClick = () => {},
}: IDataPackageCard) => {
  return (
    <div className={`card-package card-package--${type}`}>
      <SuggestBadge
        isHot={isHot}
        isPromo={isPromo}
        promoText={promoText}
        type={type}
      />

      <CardHeader
        packageName={packageName}
        price={price}
        duration={duration}
        type={type}
      />

      <FeatureList features={features} />

      <div className="card-footer">
        <SocialList socialIcons={socialIcons} />
        <button className="buy-btn" onClick={onClick}>
          Mua gói cước
        </button>
      </div>
    </div>
  );
};

export default DataPackageCard;
