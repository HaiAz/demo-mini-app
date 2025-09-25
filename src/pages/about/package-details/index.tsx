import "./styles.scss";

const PackageDetails = () => {
  return (
    <div className="package-details">
      <div className="package-details-section">
        <h2 className="package-details-title">Ưu đãi</h2>
        <div className="package-details-content">
          <p className="package-pricing-title">Giá cước:</p>
          <p className="package-pricing-item">
            - TB trả trước: 120.000đ/30 ngày.
          </p>
          <p className="package-pricing-item">- TB trả sau: 120.000đ/tháng.</p>
          <p className="package-benefit">Ưu đãi: 2GB/ngày.</p>
          <p className="package-renewal-info">
            Gói cước gia hạn sau 30 ngày với thuê bao trả trước hoặc khi hết
            tháng với thuê bao trả sau.
          </p>
          <br />
          <p className="package-instruction">Đăng ký: Soạn SD120 gửi 191.</p>
          <br />
          <p className="package-instruction">Hủy gia hạn: Soạn HUY gửi 191.</p>
          <p className="package-instruction">
            Hủy gói cước: Soạn HUYDATA gửi 191.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
