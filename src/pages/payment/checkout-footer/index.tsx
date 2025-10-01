import { formatVND } from "utils/format";
import "./styles.scss";
import Button from "components/button";
import { useNavigate } from "react-router-dom";

const CheckoutFooter = () => {
  const navigate = useNavigate();

  return (
    <div className="checkout-footer">
      <div className="total-section">
        <h3>Tổng tiền</h3>
        <h2>{formatVND(160000, { space: false })}</h2>
      </div>
      <div className="action-btns">
        <Button
          onClick={() => {
            console.log("click");
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
    </div>
  );
};

export default CheckoutFooter;
