import { useState } from "react";
import "./styles.scss";

type DateSelectorOption = {
  label: string;
  value: number;
};

interface IApplyDateSelectorProps {
  className?: string;
  options?: DateSelectorOption[];
  onChange?: (v: number) => void;
}

const dateSelectorList: DateSelectorOption[] = [
  {
    label: "Áp dụng ngay",
    value: 1,
  },
  {
    label: "Từ tháng sau",
    value: 2,
  },
];

const ApplyDateSelector = ({
  className = "",
  onChange = () => {},
  options = dateSelectorList,
}: IApplyDateSelectorProps) => {
  const [selectedValue, setSelectedValue] = useState(1);

  const handleSelect = (value: number) => {
    setSelectedValue(value);
    onChange(value);
  };
  return (
    <div className={`apply-date-selector ${className}`}>
      <h2 className="apply-date-selector__title">Chọn thời gian áp dụng</h2>
      <div className="apply-date-selector__list">
        {options.length > 0 &&
          options.map((option: DateSelectorOption) => (
            <div
              key={option.value}
              className={`apply-date-selector__item ${
                option.value === selectedValue
                  ? "apply-date-selector__item--active"
                  : ""
              }`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ApplyDateSelector;
