import { TagVariantType } from "types/tag-variant";
import "./styles.scss";

interface IDataPackageTag {
  className?: string;
  variant?: TagVariantType;
  view?: number;
}

const DataPackageTag = ({
  className,
  variant = "hot",
  view,
}: IDataPackageTag) => {
  const contentTag = {
    exclusive: "ĐỘC QUYỀN",
    hot: "HOT",
    favourite: "YÊU THÍCH",
    suggest: "KHUYÊN DÙNG",
  };
  return (
    <div className={`label ${className}`}>
      <div className={`tag tag--${variant}`}>
        <span>{contentTag[variant]}</span>
      </div>
      <span className={`view ${view ? "show-view" : ""}`}>{view} lượt xem</span>
    </div>
  );
};

export default DataPackageTag;
