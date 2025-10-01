import { formatVND } from "utils/format";
import "./styles.scss";
import Button from "components/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "components/modal";
import PackageHeader from "../package-header";
import PaymentWaring from "../payment-waring";

const CheckoutFooter = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showModalStatus, setShowModalStatus] = useState(false);

  const packageHeader = () => {
    return (
      <div>
        <PaymentWaring
          newNamePackage="5G160B"
          pricePackage={160000}
          oldNamePackage="5G90"
        />
        <PackageHeader
          duration="30"
          packageName="5G160B"
          price={160000}
          className="background-package-header"
        />
        <div className="modalPayment">
          <div className="modalPayment-confirmation">
            Quý khách có xác nhận đăng ký gói cước <p>{"5G160B"}</p> không?
          </div>
          <div className="modalPayment-footer">
            <Button
              onClick={() => setShowModal(false)}
              className="modalPayment-footer-btn"
              size="small"
              variant="outlined"
            >
              Hủy
            </Button>
            <Button
              onClick={() => {
                setShowModalStatus(true);
                setShowModal(false);
              }}
              className="modalPayment-footer-btn"
              size="small"
            >
              Xác nhận
            </Button>
          </div>
        </div>
      </div>
    );
  };
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
          onClick={() => navigate("/packages")}
          className="back-btn"
          variant="outlined"
          size="large"
        >
          Chọn gói khác
        </Button>
      </div>

      <Modal
        isModalOpen={showModalStatus}
        onModalClose={() => setShowModalStatus(false)}
        content={"5G160B"}
        isSuccess={false}
        isShowTitle={false}
      />

      <Modal
        isModalOpen={showModal}
        onModalClose={() => setShowModal(false)}
        title="Xác nhận đăng ký gói cước"
        content={packageHeader()}
      />
    </div>
  );
};

export default CheckoutFooter;
