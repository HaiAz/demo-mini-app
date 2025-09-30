import "./styles.scss";
import Title from "components/title";
import DataPackageCardV2 from "components/data-package-card-v2";
import SearchInput from "components/search-input";
import ButtonSelect from "components/button-select";
import {
  FILTER_DATA,
  filterPackagesByTab,
  groupPackagesByCategory,
  mapFilterFn,
  MOCK_DATA_PACKAGES,
  CATEGORIES_TAB_DATA,
} from "mocks";
import { Empty, Swiper, Tabs } from "antd-mobile";
import SwiperCustom from "components/swiper";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "components/header";

const Test = () => {
  const [packages, setPackages] = useState(MOCK_DATA_PACKAGES);
  const [activeKey, setActiveKey] = useState("1");
  const [filterValue, setFilterValue] = useState<
    { id: number; values: number[] }[]
  >([]);
  const navigate = useNavigate();
  const applyAllFilters = (allFilters: { id: number; values: number[] }[]) => {
    let data = [...MOCK_DATA_PACKAGES];

    allFilters.forEach(({ id, values }) => {
      if (values.length > 0) {
        data = mapFilterFn[id](data, values);
      }
    });

    return data;
  };

  const handleFilter = (id: number, values: (string | number)[]) => {
    const mapFilterValue = values.map((item) => Number(item));

    const idx = filterValue.findIndex((item) => item.id === id);
    let newFilterValue = [...filterValue];

    if (idx === -1) {
      newFilterValue.push({ id, values: mapFilterValue });
    } else {
      newFilterValue[idx].values = mapFilterValue;
    }

    setFilterValue(newFilterValue);

    const filteredPackages = applyAllFilters(newFilterValue);
    setPackages(filteredPackages);
  };

  return (
    <div className="test-container">
      <Header />

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
              buttonConfirmFn={(values: (string | number)[]) =>
                handleFilter(item.id, values)
              }
            />
          ))}
      </div>
      <Tabs
        className="tab-package"
        activeKey={activeKey}
        direction="ltr"
        activeLineMode="full"
        onChange={(key) => setActiveKey(key)}
      >
        {CATEGORIES_TAB_DATA &&
          CATEGORIES_TAB_DATA.map((tab) => {
            const filteredData = filterPackagesByTab(packages, tab.id);

            return (
              <Tabs.Tab title={tab.tabTitle} key={tab.id}>
                {tab.id === 1 ? (
                  (() => {
                    const grouped = groupPackagesByCategory(packages);
                    const nonEmptyGroups = grouped.filter(
                      (group) => group.data.length > 0
                    );

                    if (nonEmptyGroups.length === 0) {
                      return (
                        <div className="empty-state">
                          <Empty
                            imageStyle={{ width: 64 }}
                            description="Không có gói cước nào"
                          />
                        </div>
                      );
                    }

                    return nonEmptyGroups.map((group) => (
                      <div key={group.title}>
                        <Title
                          titleName={group.title}
                          showAll={true}
                          activeTab={`${group.tabKey}`}
                          handleClickShowAll={(activeTab) => {
                            setActiveKey(activeTab);
                          }}
                        />
                        <SwiperCustom>
                          {group.data.map((pkg) => (
                            <Swiper.Item key={pkg.id}>
                              <DataPackageCardV2
                                packageName={pkg.packageName}
                                features={pkg.features}
                                originPrice={pkg.originPrice}
                                price={pkg.price}
                                expired={pkg.expired}
                                onClick={() => navigate("/payment")}
                              />
                            </Swiper.Item>
                          ))}
                        </SwiperCustom>
                      </div>
                    ));
                  })()
                ) : (
                  <>
                    <Title titleName={tab.tabTitle} showAll={false} />
                    {filteredData.length > 0 ? (
                      <div className="list-package">
                        {filteredData.map((pkg) => (
                          <DataPackageCardV2
                            key={pkg.id}
                            packageName={pkg.packageName}
                            features={pkg.features}
                            originPrice={pkg.originPrice}
                            price={pkg.price}
                            expired={pkg.expired}
                            onClick={() => navigate("/payment")}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="empty-state">
                        <Empty
                          imageStyle={{ width: 64 }}
                          description="Không có gói cước nào"
                        />
                      </div>
                    )}
                  </>
                )}
              </Tabs.Tab>
            );
          })}
      </Tabs>
    </div>
  );
};

export default Test;
