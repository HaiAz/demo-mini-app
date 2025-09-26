import React, { useState } from "react";
import "./style.scss";
import { Button, Popup } from "antd-mobile";

type ButtonSelectProps = {
  buttonSelectName: string;
  isActiveButtonSelect: boolean;
  listOption?: { label: string; value: string | number | boolean }[];
  popupTitle: string;
  buttonConfirmName?: string;
  buttonConfirmFn?: () => {};
};

const ButtonSelect = (props: ButtonSelectProps) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="btn-select-container">
      <Button
        className={`btn-select ${
          props.isActiveButtonSelect ? "btn-select-active" : ""
        }`}
        onClick={() => setVisible(true)}
      >
        {props.buttonSelectName} <DownIcon />
      </Button>

      <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false);
        }}
        bodyClassName="btn-select-popup"
      >
        <h3 className="popup-title">{props.popupTitle}</h3>
      </Popup>
    </div>
  );
};

export default ButtonSelect;

const DownIcon = () => {
  return (
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
};
