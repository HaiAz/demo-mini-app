import "./styles.scss";

interface ICardHeaderProps {
  type?: string;
  packageName?: string;
  price?: string;
  duration?: string;
}

const CardHeader = ({
  type,
  duration,
  packageName,
  price,
}: ICardHeaderProps) => {
  return (
    <div className={`card-header card-header--${type}`}>
      <h1 className="package-name">{packageName}</h1>
      <h2 className="package-price">
        {price}đ / {duration}
      </h2>
    </div>
  );
};

export default CardHeader;
