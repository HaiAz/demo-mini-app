import React, { useState } from "react";
import "./style.scss";
import { Button, Checkbox, Popup } from "antd-mobile";
import CustomBtn from "components/button";

type ButtonSelectProps = {
  buttonSelectName: string;
  listOption: { label: string; value: string | number }[];
  popupTitle: string;
  buttonConfirmName: string;
  buttonConfirmFn?: (values: (string | number)[]) => void;
};

const ButtonSelect = (props: ButtonSelectProps) => {
  const [visible, setVisible] = useState(false);
  const [checkedValues, setCheckedValues] = useState<(string | number)[]>([]);
  const [tempValues, setTempValues] = useState<(string | number)[]>([]);

  const openPopup = () => {
    setTempValues(checkedValues);
    setVisible(true);
  };

  const handleConfirm = () => {
    setCheckedValues(tempValues);
    if (props.buttonConfirmFn) {
      props.buttonConfirmFn(tempValues);
    }
    setVisible(false);
  };

  const handleCheck = (value: string | number, checked: boolean) => {
    setTempValues((prev) =>
      checked ? [...prev, value] : prev.filter((v) => v !== value)
    );
  };

  return (
    <div className="btn-select-container">
      <Button
        className={`btn-select ${
          checkedValues.length > 0 ? "btn-select-active" : ""
        }`}
        onClick={openPopup}
      >
        {checkedValues.length > 0
          ? props.listOption.find((x) => x.value === checkedValues[0])?.label
          : props.buttonSelectName}{" "}
        <DownIcon />
      </Button>

      <Popup
        visible={visible}
        onMaskClick={() => setVisible(false)}
        bodyClassName="btn-select-popup"
      >
        <h3 className="popup-title">{props.popupTitle}</h3>

        <ul className="list-option">
          {props.listOption.map((item) => (
            <li key={item.value} className="list-option-item">
              <Checkbox
                checked={tempValues.includes(item.value)}
                onChange={(val) => handleCheck(item.value, val)}
              >
                {item.label}
              </Checkbox>
            </li>
          ))}
        </ul>

        <div className="group-btn">
          <CustomBtn
            onClick={() => setVisible(false)}
            variant="outlined"
            fullWidth={false}
            className="group-btn-item"
          >
            Hủy
          </CustomBtn>
          <CustomBtn
            onClick={handleConfirm}
            fullWidth={false}
            className="group-btn-item"
          >
            {props.buttonConfirmName}
          </CustomBtn>
        </div>
      </Popup>
    </div>
  );
};

export default ButtonSelect;

const DownIcon = () => (
  <svg
    width="12"
    height="7"
    viewBox="0 0 12 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.2143 1L6.38215 5.83214C6.34688 5.86972 6.30428 5.89968 6.25698 5.92015C6.20969 5.94063 6.15869 5.95119 6.10715 5.95119C6.05561 5.95119 6.00462 5.94063 5.95732 5.92015C5.91002 5.89968 5.86742 5.86972 5.83215 5.83214L1.00001 1"
      stroke="black"
      strokeWidth="0.785714"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
