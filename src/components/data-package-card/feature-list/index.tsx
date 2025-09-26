import "./styles.scss";

interface IFeatureList {
  features: string[];
}

const FeatureList = ({ features }: IFeatureList) => {
  return (
    <div className="card-content">
      <div className="feature-list">
        {features.map((feature: string, index: number) => (
          <div key={index} className="feature-item">
            <span className="dot"></span>
            <p className="feature-text">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureList;
