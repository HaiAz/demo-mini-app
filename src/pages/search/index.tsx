import "./styles.scss";
import { useState } from "react";
import SearchInput from "components/search-input";
import { MOCK_DATA_PACKAGES, groupPackagesByCategory } from "mocks";
import Header from "components/header";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(MOCK_DATA_PACKAGES);

  const handleChange = (val: string) => {
    setKeyword(val);
    if (!val) {
      setResults([]);
      return;
    }
    const filtered = MOCK_DATA_PACKAGES.filter((pkg) =>
      pkg.packageName.toLowerCase().includes(val.toLowerCase())
    );
    setResults(filtered);
  };

  const groupedResults = groupPackagesByCategory(results);

  return (
    <>
      <header>
        <Header position="center" />
      </header>

      <div className="search-page">
        <SearchInput
          placeholder="Tìm kiếm gói cước"
          showClear
          // onChange={handleChange}
        />

        {keyword && results.length === 0 && (
          <div className="search-empty">Không tìm thấy kết quả</div>
        )}

        {results.length > 0 && (
          <div className="search-results">
            <p>
              Có {results.length} kết quả với từ khóa "<b>{keyword}</b>"
            </p>
            {groupedResults.map(
              (group) =>
                group.data.length > 0 && (
                  <div key={group.tabKey} className="result-group">
                    <div className="group-header">
                      <span>{group.title}</span>
                      <button>Xem tất cả</button>
                    </div>
                    <ul>
                      {group.data.map((pkg) => (
                        <li key={pkg.id} className="pkg-item">
                          <div className="pkg-name">{pkg.packageName}</div>
                          <div className="pkg-price">{pkg.price}đ</div>
                          <button>Đăng ký</button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
