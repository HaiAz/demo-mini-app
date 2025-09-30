import { formatVND } from "utils/format";
import "./styles.scss";
import { RotateCircleIcon } from "assets/icon";

interface IPackageProps {
  packageName?: string;
  price?: number;
  duration?: string;
}

const PackageHeader = ({ duration, packageName, price = 0 }: IPackageProps) => {
  return (
    <div className="package-header">
      <div className="package-header__info">
        <h2 className="package-header__name">Gói {packageName}</h2>
        <h3 className="package-header__price">
          {formatVND(price, { space: false })}
        </h3>
      </div>
      <div className="package-header__duration">
        <span className="package-header__icon">
          <RotateCircleIcon width={"18"} height={"18"} />
        </span>
        <p className="package-header__duration-text">{duration} ngày</p>
      </div>
    </div>
  );
};

export default PackageHeader;
