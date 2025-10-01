import "./styles.scss";

interface IBenefitsSectionProps {
  description?: string;
  benefits?: string[];
  className?: string;
}

const BenefitsSection = ({
  benefits = [],
  description = "",
  className = "",
}: IBenefitsSectionProps) => {
  return (
    <div className={`benefits-section ${className}`}>
      <h2 className="benefits-section__title">Ưu đãi</h2>
      <p className="benefits-section__description">{description}</p>

      <ul className="benefits-section__list">
        {benefits?.length > 0 &&
          benefits.map((benefit: string, index: number) => (
            <li key={index} className="benefits-section__item">
              {benefit}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BenefitsSection;
