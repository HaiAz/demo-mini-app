import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

type TitleProps = {
  titleName: string;
  showAll: boolean;
  linkShowAll?: string;
};

const Title = (props: TitleProps) => {
  const navigate = useNavigate();
  return (
    <div className="title-container">
      <h2 className="title-name">{props.titleName}</h2>
      <div
        className={`show-all ${props.showAll ? "is-show-all" : ""}`}
        onClick={() => navigate(props.linkShowAll || "/")}
      >
        <span className="show-all-title">Tất cả</span>
        <Icon />
      </div>
    </div>
  );
};

export default Title;

const Icon = () => {
  return (
    <svg
      width="7"
      height="11"
      viewBox="0 0 7 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.02501 0.392853L5.85715 5.225C5.89473 5.26027 5.92469 5.30287 5.94516 5.35016C5.96564 5.39746 5.9762 5.44846 5.9762 5.5C5.9762 5.55154 5.96564 5.60253 5.94516 5.64983C5.92469 5.69713 5.89473 5.73972 5.85715 5.775L1.02501 10.6071"
        stroke="#000001"
        strokeWidth="0.785714"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
