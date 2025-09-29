import { Space, Swiper } from "antd-mobile";

import "./styles.scss";

interface ISwiperCustomProps {
  className?: string;
  children?: JSX.Element[];
  total?: number;
}

const SwiperCustom = ({ children, className, total }: ISwiperCustomProps) => {
  return (
    <>
      <Space direction="vertical" block>
        <Swiper
          className={`root ${className}`}
          slideSize={90}
          trackOffset={0}
          stuckAtBoundary={false}
          total={total}
          indicator={false}
          defaultIndex={0}
        >
          {children}
        </Swiper>
      </Space>
    </>
  );
};

export default SwiperCustom;
