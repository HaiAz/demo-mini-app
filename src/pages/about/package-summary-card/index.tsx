import "./styles.scss";

interface IPackageSummaryCard {
  label: string;
  name: string;
  imageUrl: string;
}

const PackageSummaryCard = ({ label, name, imageUrl }: IPackageSummaryCard) => {
  return (
    <div className="package-summary-item">
      <img src={imageUrl} alt="Package icon" className="package-icon" />
      <div className="package-info">
        <p className="package-label">{label}</p>
        <p className="package-name">{name}</p>
      </div>
    </div>
  );
};

export default PackageSummaryCard;
