import Button from "components/button";
import "./styles.scss";
import DataPackageTag from "components/tag";
import { TagVariantType } from "types/tag-variant";
import FeatureList from "./feature-list";

interface IDataPackageCardV2Props {
  packageName: string;
  view?: number;
  features?: string[];
  price?: string;
  expired?: string;
  discount?: string;
  variantTag?: TagVariantType;
  onClick?: () => void;
}

const DataPackageCardV2 = ({
  packageName,
  expired,
  features = [],
  price,
  view,
  discount,
  variantTag,
  onClick = () => {},
}: IDataPackageCardV2Props) => {
  return (
    <div className="card-package-v2">
      <div className="content-left">
        <DataPackageTag variant={variantTag} view={view} />
        <h1 className="package-name">{packageName}</h1>
        <FeatureList features={features} />
      </div>
      <span className="dashed"></span>
      <div className="content-right">
        <p className="package-discount">{discount}đ</p>
        <p className="package-price">{price}đ</p>
        <p className="package-expire">{expired} ngày</p>
        <Button onClick={onClick} size="small" className="buy-btn">
          Mua ngay
        </Button>
      </div>
    </div>
  );
};

export default DataPackageCardV2;
