import Button from "components/button";
import "./styles.scss";

interface IDataPackageCardV2Props {
  packageName: string;
  view?: number;
  features?: string[];
  price?: string;
  expired?: string;
  discount?: string;
  onClick?: () => void;
}

const DataPackageCardV2 = ({
  packageName,
  expired,
  features,
  price,
  view,
  discount,
  onClick = () => {},
}: IDataPackageCardV2Props) => {
  return (
    <div className="card-package-v2">
      <div className="content-left">
        <div className="label">
          <div className="tag">
            <span>Độc quyền</span>
          </div>
          <span className="view">{view} lượt xem</span>
        </div>
        <h1 className="package-name">{packageName}</h1>
        <div className="feature-list">
          {features &&
            features?.map((feature, index) => (
              <div className="feature-item" key={index}>
                <span className="diamond"></span>
                <p className="feature-text">{feature}</p>
              </div>
            ))}
        </div>
      </div>
      <span className="dashed"></span>
      <div className="content-right">
        <p className="package-discount">{discount}đ</p>
        <p className="package-price">{price}đ</p>
        <p className="package-expire">{expired} ngày</p>
        <Button onClick={() => {}} size="small" className="buy-btn">
          Mua ngay
        </Button>
      </div>
    </div>
  );
};

export default DataPackageCardV2;
