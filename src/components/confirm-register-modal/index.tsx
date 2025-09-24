import React, { useState } from "react";
import { Modal, Button } from "antd-mobile";
import "./style.scss";

const ConfirmRegisterModal = () => {
  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(0);

  const options = [
    "Đăng ký qua tài khoản chính điện thoại",
    "Đăng ký qua tài khoản gốc và điểm Viettel++",
    "Đăng ký qua ViettelPay, ATM, Thẻ quốc tế",
  ];

  return (
    <>
      <Button color="primary" onClick={() => setVisible(true)}>
        Mở modal
      </Button>

      <Modal
        visible={visible}
        title="Xác nhận đăng ký"
        className="confirm-register-modal"
        showCloseButton={true}
        content={
          <>
            <p className="sub-title">
              Quý khách xác nhận đăng ký gói cước 5G150 với giá 150.000 đồng.
            </p>

            <div className="list-btn-option">
              {options.map((opt, index) => (
                <Button
                  key={index}
                  fill="outline"
                  className={`btn-option ${
                    selectedOption === index ? "btn-option-active" : ""
                  }`}
                  onClick={() => setSelectedOption(index)}
                >
                  {opt}
                </Button>
              ))}
            </div>
          </>
        }
        closeOnMaskClick
        onClose={() => setVisible(false)}
        actions={[
          {
            key: "cancel",
            className: "btn-action btn-action-close",
            text: "Đóng",
            onClick: () => setVisible(false),
          },
          {
            key: "ok",
            text: "Đồng ý",
            className: "btn-action btn-action-ok",
            danger: true,
            onClick: () => {
              console.log("Đã chọn option:", options[selectedOption ?? 0]);
              setVisible(false);
            },
          },
        ]}
      />
    </>
  );
};

export default ConfirmRegisterModal;
