import React from "react";
import { Modal as AntdModal } from "antd-mobile";
import "./style.scss";
import CustomButton from "components/button";

type ModalProps = {
  isModalOpen: boolean;
  onModalClose: () => void;
  content: React.ReactNode;
  showCloseButton?: boolean;
  title?: string;
  isShowTitle?: boolean;
  isSuccess?: boolean;
};

const Modal = ({
  isModalOpen,
  onModalClose,
  content,
  title,
  showCloseButton = true,
  isShowTitle = true,
  isSuccess = true,
}: ModalProps) => {
  const renderContent = isShowTitle ? (
    content
  ) : (
    <>
      <div className="content-modal">
        <div className="icon">
          {isSuccess ? (
            <div className="icon-wrapper">
              <IconSuccess />
            </div>
          ) : (
            <div className="icon-wrapper">
              <IconError />
            </div>
          )}
        </div>
        <div className="content-modal-title">
          <h2 className="content-title">
            Đăng ký gói cước
            <br />
            {isSuccess ? "thành công" : "không thành công"}
          </h2>
          {isSuccess ? (
            <p className="content-title-sub">
              Quý khách đã đăng ký thành công
              <br /> gói cước <b>{content}.</b>
            </p>
          ) : (
            <p className="content-title-sub">
              Quý khách đăng ký không thành công
              <br /> gói cước <b>{content}.</b> Vui lòng thử lại.
            </p>
          )}
        </div>

        <CustomButton
          onClick={() => onModalClose()}
          variant="outlined"
          fullWidth={false}
          className="btn-close-modal"
        >
          Đóng
        </CustomButton>
      </div>
    </>
  );

  return (
    <AntdModal
      visible={isModalOpen}
      title={title}
      className={`modal-custom ${isShowTitle ? "" : "hidden-title"}`}
      showCloseButton={showCloseButton}
      content={renderContent}
      closeOnMaskClick
      onClose={() => onModalClose()}
    />
  );
};

export default Modal;

const IconSuccess = () => {
  return (
    <svg
      width="65"
      height="64"
      viewBox="0 0 65 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.5 0C14.836 0 0.5 14.336 0.5 32C0.5 49.664 14.836 64 32.5 64C50.164 64 64.5 49.664 64.5 32C64.5 14.336 50.164 0 32.5 0ZM45.396 26.24L30.452 41.152C30.004 41.632 29.396 41.8561 28.756 41.8561C28.148 41.8561 27.54 41.632 27.06 41.152L19.604 33.6961C18.676 32.7681 18.676 31.2319 19.604 30.3039C20.532 29.3759 22.068 29.3759 22.996 30.3039L28.756 36.0641L42.004 22.848C42.932 21.888 44.468 21.888 45.396 22.848C46.324 23.776 46.324 25.28 45.396 26.24Z"
        fill="#268D3F"
      />
    </svg>
  );
};

const IconError = () => {
  return (
    <svg
      width="65"
      height="64"
      viewBox="0 0 65 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.5 0C14.836 0 0.5 14.336 0.5 32C0.5 49.664 14.836 64 32.5 64C50.164 64 64.5 49.664 64.5 32C64.5 14.336 50.164 0 32.5 0ZM43.796 39.9039C44.724 40.8319 44.724 42.3681 43.796 43.2961C43.316 43.7761 42.708 44 42.1 44C41.492 44 40.884 43.7761 40.404 43.2961L32.5 35.392L24.596 43.2961C24.116 43.7761 23.508 44 22.9 44C22.292 44 21.684 43.7761 21.204 43.2961C20.276 42.3681 20.276 40.8319 21.204 39.9039L29.108 32L21.204 24.0961C20.276 23.1681 20.276 21.6319 21.204 20.7039C22.132 19.7759 23.668 19.7759 24.596 20.7039L32.5 28.608L40.404 20.7039C41.332 19.7759 42.868 19.7759 43.796 20.7039C44.724 21.6319 44.724 23.1681 43.796 24.0961L35.892 32L43.796 39.9039Z"
        fill="#EC221F"
      />
    </svg>
  );
};
