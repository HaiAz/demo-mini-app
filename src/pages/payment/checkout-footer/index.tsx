import { formatVND } from "utils/format";
import "./styles.scss";
import Button from "components/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "components/modal";

const CheckoutFooter = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="checkout-footer">
      <div className="total-section">
        <h3>Tổng tiền</h3>
        <h2>{formatVND(160000, { space: false })}</h2>
      </div>
      <div className="action-btns">
        <Button
          onClick={() => {
            setShowModal(true);
          }}
          className="register-btn"
          size="large"
        >
          Đăng ký ngay
        </Button>
        <Button
          onClick={() => navigate("/test")}
          className="back-btn"
          variant="outlined"
          size="large"
        >
          Chọn gói khác
        </Button>
      </div>

      <Modal
        isModalOpen={showModal}
        onModalClose={() => setShowModal(false)}
        content={"5G160B"}
        isSuccess={false}
        isShowTitle={false}
      />

      {/* <Modal
        isModalOpen={showModal}
        onModalClose={() => setShowModal(false)}
        title="Xác nhận đăng ký gói cước"
        content={"5G160B"}
      /> */}
    </div>
  );
};

export default CheckoutFooter;
