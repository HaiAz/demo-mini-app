import "./styles.scss";

type DataPackageCardType = "primary" | "secondary";

interface ISuggestBadgeProps {
  isHot?: boolean;
  isPromo?: boolean;
  promoText?: string;
  type?: DataPackageCardType;
}

const SuggestBadge = ({
  isHot,
  isPromo,
  promoText,
  type,
}: ISuggestBadgeProps) => {
  if (!isHot && !isPromo) return null;
  return (
    <div className={`suggest suggest--${type}`}>
      <div className={`suggest-item ${isHot ? "hot" : "promo"}`}>
        {isHot ? "HOT" : promoText}
      </div>
    </div>
  );
};

export default SuggestBadge;
