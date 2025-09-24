import "./styles.scss";

export default function About() {
  return (
    <div className="container">
      <h1 className="title">Chi tiết gói cước</h1>
      <div className="content">
        <div className="package-summaries">
          <div className="package-summary-item">
            <img
              src="https://media.vietteltelecom.vn/upload/ckfinder/images/2025/images_content/icon-service-sm.png"
              alt="Package icon"
              className="package-icon"
            />
            <div className="package-info">
              <p className="package-label">Tên gói cước</p>
              <p className="package-name">SD120</p>
            </div>
          </div>
          <div className="package-summary-item">
            <img
              src="https://media.vietteltelecom.vn/upload/ckfinder/images/2025/images_content/icon-service-sm.png"
              alt="Package icon"
              className="package-icon"
            />
            <div className="package-info">
              <p className="package-label">Giá gói cước</p>
              <p className="package-name">120.000 đ</p>
            </div>
          </div>
          <div className="package-summary-item">
            <img
              src="https://media.vietteltelecom.vn/upload/ckfinder/images/2025/images_content/icon-service-sm.png"
              alt="Package icon"
              className="package-icon"
            />
            <div className="package-info">
              <p className="package-label">Thời gian</p>
              <p className="package-name">30 ngày</p>
            </div>
          </div>
        </div>

        <div className="package-details">
          <div className="package-details-section">
            <h2 className="package-details-title">Ưu đãi</h2>
            <div className="package-details-content">
              <p className="package-pricing-title">Giá cước:</p>
              <p className="package-pricing-item">
                - TB trả trước: 120.000đ/30 ngày.
              </p>
              <p className="package-pricing-item">
                - TB trả sau: 120.000đ/tháng.
              </p>
              <p className="package-benefit">Ưu đãi: 2GB/ngày.</p>
              <p className="package-renewal-info">
                Gói cước gia hạn sau 30 ngày với thuê bao trả trước hoặc khi hết
                tháng với thuê bao trả sau.
              </p>
              <br />
              <p className="package-instruction">
                Đăng ký: Soạn SD120 gửi 191.
              </p>
              <br />
              <p className="package-instruction">
                Hủy gia hạn: Soạn HUY gửi 191.
              </p>
              <p className="package-instruction">
                Hủy gói cước: Soạn HUYDATA gửi 191.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
