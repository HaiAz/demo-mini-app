import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

type TitleProps = {
  titleName: string;
  showAll: boolean;
  activeTab?: string;
  linkShowAll?: string;
  handleClickShowAll?: (activeTab: string) => void;
};

const Title = (props: TitleProps) => {
  const navigate = useNavigate();
  const onClickShowAll = () => {
    if (props.handleClickShowAll && props.activeTab) {
      props.handleClickShowAll(props.activeTab);
      return;
    }
    if (props.linkShowAll) {
      navigate(props.linkShowAll);
    }
  };
  return (
    <div className="title-container">
      <h2 className="title-name">{props.titleName}</h2>
      <div
        className={`show-all ${props.showAll ? "is-show-all" : ""}`}
        onClick={() => onClickShowAll()}
      >
        <span className="show-all-title">Tất cả</span>
      </div>
    </div>
  );
};

export default Title;
