import React, { useState } from "react"
import { Modal, Button } from "antd-mobile"
import "./style.scss"

type ConfirmRegisterModalProps = {
  isModalOpen: boolean
  onModalClose: () => void
}

const ConfirmRegisterModal = ({ isModalOpen, onModalClose }: ConfirmRegisterModalProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(0)

  const options = [
    "Đăng ký qua tài khoản chính điện thoại",
    "Đăng ký qua tài khoản gốc và điểm Viettel++",
    "Đăng ký qua ViettelPay, ATM, Thẻ quốc tế",
  ]

  return (
    <Modal
      visible={isModalOpen}
      title="Xác nhận đăng ký"
      className="confirm-register-modal"
      showCloseButton={true}
      content={
        <>
          <p className="sub-title">Quý khách xác nhận đăng ký gói cước 5G150 với giá 150.000 đồng.</p>

          <div className="list-btn-option">
            {options.map((opt, index) => (
              <Button
                key={index}
                fill="outline"
                className={`btn-option ${selectedOption === index ? "btn-option-active" : ""}`}
                onClick={() => setSelectedOption(index)}
              >
                {opt}
              </Button>
            ))}
          </div>
        </>
      }
      closeOnMaskClick
      onClose={() => onModalClose()}
      actions={[
        {
          key: "cancel",
          className: "btn-action btn-action-close",
          text: "Đóng",
          onClick: () => onModalClose(),
        },
        {
          key: "ok",
          text: "Đồng ý",
          className: "btn-action btn-action-ok",
          danger: true,
          onClick: () => {
            console.log("Đã chọn option:", options[selectedOption ?? 0])
            onModalClose()
          },
        },
      ]}
    />
  )
}

export default ConfirmRegisterModal
