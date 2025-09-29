import "./styles.scss";
import Title from "components/title";
import DataPackageCardV2 from "components/data-package-card-v2";
import SearchInput from "components/search-input";
import ButtonSelect from "components/button-select";
import { FILTER_DATA, TAB_DATA } from "mocks";
import { Swiper, Tabs } from "antd-mobile";
import SwiperCustom from "components/swiper";

const Test = () => {
  return (
    <div className="test-container">
      <div className="filter-wrapper">
        <SearchInput />
        <div className="filter">
          {FILTER_DATA &&
            FILTER_DATA.map((item) => (
              <ButtonSelect
                key={item.id}
                buttonSelectName={item.buttonSelectName}
                buttonConfirmName={item.buttonConfirmName}
                popupTitle={item.popupTitle}
                listOption={item.listOption}
                buttonConfirmFn={item.handleConfirm}
              />
            ))}
        </div>
        <Tabs
          className="tab-package"
          defaultActiveKey="1"
          direction="ltr"
          activeLineMode="full"
        >
          {TAB_DATA &&
            TAB_DATA.map((item) => (
              <Tabs.Tab title={item.title} key={item.id}>
                <Title
                  titleName="Gói độc quyền"
                  showAll={true}
                  linkShowAll="/package-detail"
                />
                <SwiperCustom>
                  <Swiper.Item>
                    <DataPackageCardV2
                      packageName="5G10MYT"
                      features={[
                        "4GB Data / ngày",
                        "2000p nội mạng , 10000p ngoại mạng",
                        "Miễn phí truy cập TV360",
                      ]}
                      discount="2.200.000"
                      price="1.620.000"
                      expired="360"
                    />
                  </Swiper.Item>
                  <Swiper.Item>
                    <DataPackageCardV2
                      packageName="5G10MYT"
                      features={[
                        "4GB Data / ngày",
                        "2000p nội mạng , 10000p ngoại mạng",
                        "Miễn phí truy cập TV360",
                      ]}
                      discount="2.200.000"
                      price="1.620.000"
                      expired="360"
                    />
                  </Swiper.Item>
                </SwiperCustom>
              </Tabs.Tab>
            ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Test;
