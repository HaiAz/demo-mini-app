import "./styles.scss";

interface IFeatureListProps {
  features: string[];
}

const FeatureList = ({ features }: IFeatureListProps) => {
  return (
    <div className="feature-list">
      {features &&
        features?.map((feature, index) => (
          <div className="feature-item" key={index}>
            <span className="diamond"></span>
            <p className="feature-text">{feature}</p>
          </div>
        ))}
    </div>
  );
};

export default FeatureList;
