import { useRef, useState } from "react";
import "./style.scss";

type SearchInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const SearchInput = ({ ...rest }: SearchInputProps) => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    rest.onChange?.(e);
  };
  const handleClear = () => {
    setValue("");
    inputRef.current?.focus();
  };
  return (
    <div className="search-input-container">
      <div className="prefix">
        <div className="icon-wrapper">
          <IconSearch />
        </div>
      </div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Tìm kiếm"
        value={value}
        onChange={handleChange}
        {...rest}
      />
      <div className="suffix">
        {value ? (
          <div className="icon-wrapper" onClick={handleClear}>
            <IconClear />
          </div>
        ) : (
          <div className="icon-wrapper">
            <IconMicro />
          </div>
        )}
      </div>
    </div>
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.8567 11.3021C12.0714 11.0606 12.4413 11.0388 12.6828 11.2535L17.2943 15.3526C17.5358 15.5673 17.5576 15.9372 17.3429 16.1787C17.1282 16.4202 16.7583 16.442 16.5168 16.2273L11.9053 12.1282C11.6638 11.9135 11.642 11.5437 11.8567 11.3021Z"
        fill="#7E7E7E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.509338 7.12726C0.509338 3.43371 3.52484 0.418213 7.21838 0.418213C10.9119 0.418213 13.9274 3.43371 13.9274 7.12726C13.9274 10.8208 10.9119 13.8363 7.21838 13.8363C3.52484 13.8363 0.509338 10.8208 0.509338 7.12726ZM7.21838 1.44298C4.0908 1.44298 1.53411 3.99967 1.53411 7.12726C1.53411 10.2548 4.0908 12.8115 7.21838 12.8115C10.346 12.8115 12.9027 10.2548 12.9027 7.12726C12.9027 3.99967 10.346 1.44298 7.21838 1.44298Z"
        fill="#7E7E7E"
      />
    </svg>
  );
};

const IconMicro = () => {
  return (
    <svg
      width="12"
      height="15"
      viewBox="0 0 12 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.50002 7C8.50002 7.66304 8.23662 8.29893 7.76778 8.76777C7.29894 9.23661 6.66306 9.5 6.00002 9.5C5.33697 9.5 4.70109 9.23661 4.23225 8.76777C3.76341 8.29893 3.50002 7.66304 3.50002 7V3.5C3.50002 2.83696 3.76341 2.20107 4.23225 1.73223C4.70109 1.26339 5.33697 1 6.00002 1C6.66306 1 7.29894 1.26339 7.76778 1.73223C8.23662 2.20107 8.50002 2.83696 8.50002 3.5V7Z"
        stroke="#000001"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 7.5C11.0013 8.09132 10.8858 8.67707 10.6602 9.22363C10.4345 9.77019 10.1031 10.2668 9.68493 10.6849C9.26681 11.103 8.77021 11.4345 8.22364 11.6601C7.67708 11.8858 7.09133 12.0013 6.50001 12H5.50001C4.90869 12.0013 4.32294 11.8858 3.77638 11.6601C3.22982 11.4345 2.73322 11.103 2.31509 10.6849C1.89696 10.2668 1.56555 9.77019 1.33987 9.22363C1.11419 8.67707 0.998693 8.09132 1.00001 7.5V7.5"
        stroke="#000001"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.00002 12V14"
        stroke="#000001"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const IconClear = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    className="clear-icon"
  >
    <g
      id="CloseCircleFill-CloseCircleFill"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g id="CloseCircleFill">
        <rect
          id="CloseCircleFill"
          fill="#FFFFFF"
          opacity="0"
          x="0"
          y="0"
          width="48"
          height="48"
        ></rect>
        <path
          d="M24,2 C36.1502645,2 46,11.8497355 46,24 C46,36.1502645 36.1502645,46 24,46 C11.8497355,46 2,36.1502645 2,24 C2,11.8497355 11.8497355,2 24,2 Z M18.6753876,16 L15.5637812,16 C15.4576916,16 15.3559474,16.0421451 15.2809323,16.1171635 C15.124726,16.2733766 15.1247316,16.5266426 15.2809447,16.6828489 L15.2809447,16.6828489 L22.299066,23.7006641 L14.6828159,31.3171619 C14.6078042,31.3921761 14.5656632,31.4939157 14.5656632,31.6 C14.5656632,31.8209139 14.7447493,32 14.9656632,32 L14.9656632,32 L18.0753284,32 C18.1814068,32 18.2831412,31.9578638 18.3581544,31.8828594 L18.3581544,31.8828594 L24.420066,25.8216641 L30.4818451,31.8828564 C30.5568585,31.9578626 30.6585942,32 30.7646741,32 L30.7646741,32 L33.8763476,32 C33.9824309,32 34.0841695,31.9578599 34.1591835,31.8828496 C34.315397,31.7266436 34.3154031,31.4733776 34.1591972,31.3171641 L34.1591972,31.3171641 L26.542066,23.6996641 L33.5591874,16.6828489 C33.6342057,16.6078338 33.6763508,16.5060896 33.6763508,16.4 C33.6763508,16.1790861 33.4972647,16 33.2763508,16 L33.2763508,16 L30.1637654,16 C30.0576705,16 29.9559218,16.0421493 29.8809058,16.1171741 L29.8809058,16.1171741 L24.420066,21.5786641 L18.9582218,16.1171488 C18.883208,16.0421394 18.7814701,16 18.6753876,16 L18.6753876,16 Z"
          id="CloseCircleFill"
          fill="currentColor"
          fillRule="nonzero"
        ></path>
      </g>
    </g>
  </svg>
);
