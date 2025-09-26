import { useNavigate } from "react-router-dom";
import { Modal } from "antd-mobile";

import PackageDetails from "./package-details";
import PackageSummaryCard from "./package-summary-card";
import "./styles.scss";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="title">Chi tiết gói cước</h1>
      <div className="content">
        <div className="package-summaries">
          <PackageSummaryCard
            label="Tên gói cước"
            name="SD120"
            imageUrl="https://media.vietteltelecom.vn/upload/ckfinder/images/2025/images_content/icon-service-sm.png"
          />
          <PackageSummaryCard
            label="Giá gói cước"
            name="120.000 đ"
            imageUrl="https://media.vietteltelecom.vn/upload/ckfinder/images/2025/images_content/icon-wallet-sm.png"
          />
          <PackageSummaryCard
            label="Thời gian"
            name="30 ngày"
            imageUrl="https://media.vietteltelecom.vn/upload/ckfinder/images/2025/images_content/icon-calendar-sm.png"
          />
        </div>

        <PackageDetails />
      </div>

      <button
        className="register-btn"
        onClick={() => navigate("/test")}
        // onClick={() => {
        //   Modal.alert({
        //     title: "Cảm ơn quý khách",
        //     content: "Bạn đã đăng ký thành công gói SD120!!!",
        //     closeOnMaskClick: true,
        //     bodyClassName: "success-modal",
        //     confirmText: "Đóng",
        //   });
        // }}
      >
        Đăng ký
      </button>
    </div>
  );
}
