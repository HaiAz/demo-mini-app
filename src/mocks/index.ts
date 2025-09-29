export const FILTER_DATA = [
  {
    id: 1,
    buttonSelectName: "Giá",
    popupTitle: "Chọn khoảng giá",
    buttonConfirmName: "Xác nhận",
    listOption: [
      { label: "<10K", value: 1 },
      { label: "10K - 50K", value: 2 },
      { label: "50 K - 100K", value: 3 },
      { label: "100k - 500K", value: 4 },
      { label: ">500k", value: 5 },
    ],
    handleConfirm: function (values: (string | number)[]) {
      console.log(this.buttonSelectName, values);
    },
  },
  {
    id: 2,
    buttonSelectName: "DATA",
    popupTitle: "Chọn mức DATA",
    buttonConfirmName: "Xác nhận",
    listOption: [
      { label: "< 1GB", value: 1 },
      { label: "1GB - 2GB", value: 2 },
      { label: "2GB - 4GB", value: 3 },
      { label: "4GB - 6GB", value: 4 },
      { label: "6GB - 8GB", value: 5 },
      { label: ">8GB", value: 6 },
    ],
    handleConfirm: function (values: (string | number)[]) {
      console.log(this.buttonSelectName, values);
    },
  },
  {
    id: 3,
    buttonSelectName: "Chu kỳ",
    popupTitle: "Chọn loại chu kỳ",
    buttonConfirmName: "Xác nhận",
    listOption: [
      { label: "1 ngày", value: 1 },
      { label: "3 ngày", value: 2 },
      { label: "7 ngày", value: 3 },
      { label: "30 ngày", value: 4 },
      { label: "90 ngày", value: 5 },
      { label: "180 ngày", value: 6 },
      { label: "360 ngày", value: 7 },
    ],
    handleConfirm: function (values: (string | number)[]) {
      console.log(this.buttonSelectName, values);
    },
  },
  {
    id: 4,
    buttonSelectName: "Ưu đãi",
    popupTitle: "Chọn loại ưu đãi",
    buttonConfirmName: "Xác nhận",
    listOption: [
      { label: "Thoại", value: 1 },
      { label: "DATA", value: 2 },
      { label: "SMS", value: 3 },
    ],
    handleConfirm: function (values: (string | number)[]) {
      console.log(this.buttonSelectName, values);
    },
  },
  {
    id: 5,
    buttonSelectName: "Tiện ích",
    popupTitle: "Chọn tiện ích",
    buttonConfirmName: "Xác nhận",
    listOption: [{ label: "Mạng xã hội", value: 1 }],
    handleConfirm: function (values: (string | number)[]) {
      console.log(this.buttonSelectName, values);
    },
  },
];

export const TAB_DATA = [
  {
    id: 1,
    title: "Tất cả",
  },
  {
    id: 2,
    title: "Độc quyền",
  },
  {
    id: 3,
    title: "Gói 5G",
  },
  {
    id: 4,
    title: "Gói MXH",
  },
  {
    id: 5,
    title: "Gói thoại",
  },
];
