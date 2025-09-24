import { SearchBar } from "antd-mobile";
import "./style.scss";

interface SearchInputProp {
  showBorder: boolean;
}

const SearchInput = ({ showBorder }: SearchInputProp) => {
  return (
    <SearchBar
      className={`search-input-custom ${showBorder ? "showBorder" : ""}`}
      placeholder="Tìm kiếm"
      cancelText="Xóa"
      searchIcon={<IconSearch />}
      clearable={false}
      autoFocus
    />
  );
};

export default SearchInput;

const IconSearch = () => {
  return (
    <svg
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.8567 11.3021C12.0714 11.0606 12.4413 11.0388 12.6828 11.2535L17.2943 15.3526C17.5358 15.5673 17.5576 15.9372 17.3429 16.1787C17.1282 16.4202 16.7583 16.442 16.5168 16.2273L11.9053 12.1282C11.6638 11.9135 11.642 11.5437 11.8567 11.3021Z"
        fill="#7E7E7E"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.509338 7.12726C0.509338 3.43371 3.52484 0.418213 7.21838 0.418213C10.9119 0.418213 13.9274 3.43371 13.9274 7.12726C13.9274 10.8208 10.9119 13.8363 7.21838 13.8363C3.52484 13.8363 0.509338 10.8208 0.509338 7.12726ZM7.21838 1.44298C4.0908 1.44298 1.53411 3.99967 1.53411 7.12726C1.53411 10.2548 4.0908 12.8115 7.21838 12.8115C10.346 12.8115 12.9027 10.2548 12.9027 7.12726C12.9027 3.99967 10.346 1.44298 7.21838 1.44298Z"
        fill="#7E7E7E"
      />
    </svg>
  );
};
