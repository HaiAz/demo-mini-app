import "./styles.scss";

type ButtonVariantTypes = "solid" | "outlined";
type ButtonSizeTypes = "small" | "medium" | "large";

interface IButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  variant?: ButtonVariantTypes;
  fullWidth?: boolean;
  size?: ButtonSizeTypes;
}

const Button = ({
  children,
  onClick = () => {},
  className = "",
  variant = "solid",
  fullWidth = true,
  size = "medium",
}: IButtonProps) => {
  // Kết hợp className
  const classNames = [
    "btn-container",
    className,
    fullWidth ? "btn--full-width" : "",
    `btn--${variant}`,
    `btn--${size}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classNames} onClick={onClick}>
      <span className="btn-content">{children}</span>
    </button>
  );
};

export default Button;
