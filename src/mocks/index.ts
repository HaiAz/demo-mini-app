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
  // {
  //   id: 5,
  //   buttonSelectName: "Tiện ích",
  //   popupTitle: "Chọn tiện ích",
  //   buttonConfirmName: "Xác nhận",
  //   listOption: [{ label: "Mạng xã hội", value: 1 }],
  //   handleConfirm: function (values: (string | number)[]) {
  //     console.log(this.buttonSelectName, values);
  //   },
  // },
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

export const MOCK_DATA_PACKAGES: DataPackage[] = [
  {
    id: 1,
    packageName: "Gói DATA Khủng",
    view: 1250,
    features: ["10GB data", "Miễn phí Facebook", "Miễn phí YouTube"],
    price: "120000",
    discount: "90000",
    expired: "30",
    variantTag: "exclusive" as const,
    // Filter matching fields
    priceRange: 4, // 100k - 500K
    dataAmount: 6, // >8GB (10GB)
    cycle: 4, // 30 ngày
    promotion: [1, 2], // Thoại, DATA
    utility: [1], // Mạng xã hội
    category: "5G",
    isExclusive: true,
  },
  {
    id: 2,
    packageName: "Gói Thoại Siêu Tiết Kiệm",
    view: 890,
    features: ["300 phút gọi", "2GB data", "100 SMS miễn phí"],
    price: "80000",
    discount: "65000",
    expired: "30",
    variantTag: "popular" as const,
    // Filter matching fields
    priceRange: 3, // 50K - 100K
    dataAmount: 3, // 2GB - 4GB
    cycle: 4, // 30 ngày
    promotion: [1, 3], // Thoại, SMS
    utility: [],
    category: "thoại",
    isExclusive: false,
  },
  {
    id: 3,
    packageName: "Gói MXH Học Sinh",
    view: 2100,
    features: ["5GB data", "Free Facebook", "Free TikTok", "Free Instagram"],
    price: "45000",
    discount: "35000",
    expired: "30",
    variantTag: "hot" as const,
    // Filter matching fields
    priceRange: 2, // 10K - 50K
    dataAmount: 4, // 4GB - 6GB (5GB)
    cycle: 4, // 30 ngày
    promotion: [2], // DATA
    utility: [1], // Mạng xã hội
    category: "MXH",
    isExclusive: false,
  },
  {
    id: 4,
    packageName: "Gói 5G Siêu Tốc",
    view: 750,
    features: ["20GB data 5G", "Unlimited YouTube", "200 phút gọi"],
    price: "350000",
    discount: "280000",
    expired: "90",
    variantTag: "new" as const,
    // Filter matching fields
    priceRange: 4, // 100K - 500K
    dataAmount: 6, // >8GB (20GB)
    cycle: 5, // 90 ngày
    promotion: [1, 2], // Thoại, DATA
    utility: [1], // Mạng xã hội
    category: "5G",
    isExclusive: true,
  },
  {
    id: 5,
    packageName: "Gói Data Cơ Bản",
    view: 450,
    features: ["1.5GB data", "50 phút gọi"],
    price: "25000",
    discount: "20000",
    expired: "7",
    variantTag: "basic" as const,
    // Filter matching fields
    priceRange: 2, // 10K - 50K
    dataAmount: 2, // 1GB - 2GB
    cycle: 3, // 7 ngày
    promotion: [1, 2], // Thoại, DATA
    utility: [],
    category: "basic",
    isExclusive: false,
  },
  {
    id: 6,
    packageName: "Gói Cuối Tuần",
    view: 320,
    features: ["3GB data", "Free Zalo"],
    price: "15000",
    discount: "12000",
    expired: "3",
    variantTag: "weekend" as const,
    // Filter matching fields
    priceRange: 2, // 10K - 50K
    dataAmount: 3, // 2GB - 4GB (3GB)
    cycle: 2, // 3 ngày
    promotion: [2], // DATA
    utility: [1], // Mạng xã hội
    category: "weekend",
    isExclusive: false,
  },
  {
    id: 7,
    packageName: "Gói Thoại Doanh Nhân",
    view: 680,
    features: ["500 phút gọi", "8GB data", "200 SMS"],
    price: "180000",
    discount: "150000",
    expired: "30",
    variantTag: "business" as const,
    // Filter matching fields
    priceRange: 4, // 100K - 500K
    dataAmount: 5, // 6GB - 8GB (8GB)
    cycle: 4, // 30 ngày
    promotion: [1, 2, 3], // Thoại, DATA, SMS
    utility: [],
    category: "thoại",
    isExclusive: false,
  },
  {
    id: 8,
    packageName: "Gói Data Khủng Long",
    view: 1850,
    features: ["50GB data", "Unlimited social", "Free Netflix 1 tháng"],
    price: "600000",
    discount: "480000",
    expired: "180",
    variantTag: "premium" as const,
    // Filter matching fields
    priceRange: 5, // >500K
    dataAmount: 6, // >8GB (50GB)
    cycle: 6, // 180 ngày
    promotion: [2], // DATA
    utility: [1], // Mạng xã hội
    category: "premium",
    isExclusive: true,
  },
  {
    id: 9,
    packageName: "Gói Sinh Viên",
    view: 1200,
    features: ["4GB data", "Free Facebook", "100 SMS"],
    price: "35000",
    discount: "28000",
    expired: "30",
    variantTag: "student" as const,
    // Filter matching fields
    priceRange: 2, // 10K - 50K
    dataAmount: 4, // 4GB - 6GB (4GB)
    cycle: 4, // 30 ngày
    promotion: [2, 3], // DATA, SMS
    utility: [1], // Mạng xã hội
    category: "MXH",
    isExclusive: false,
  },
  {
    id: 10,
    packageName: "Gói Data Ngày",
    view: 180,
    features: ["500MB data", "20 phút gọi"],
    price: "8000",
    discount: "6000",
    expired: "1",
    variantTag: "daily" as const,
    // Filter matching fields
    priceRange: 1, // <10K
    dataAmount: 1, // <1GB
    cycle: 1, // 1 ngày
    promotion: [1, 2], // Thoại, DATA
    utility: [],
    category: "daily",
    isExclusive: false,
  },
  {
    id: 11,
    packageName: "Gói 5G Độc Quyền",
    view: 2800,
    features: ["30GB data 5G", "Unlimited call", "Free all social apps"],
    price: "450000",
    discount: "360000",
    expired: "90",
    variantTag: "exclusive" as const,
    // Filter matching fields
    priceRange: 4, // 100K - 500K
    dataAmount: 6, // >8GB (30GB)
    cycle: 5, // 90 ngày
    promotion: [1, 2], // Thoại, DATA
    utility: [1], // Mạng xã hội
    category: "5G",
    isExclusive: true,
  },
  {
    id: 12,
    packageName: "Gói SMS Siêu Rẻ",
    view: 95,
    features: ["500 SMS", "1GB data"],
    price: "20000",
    discount: "15000",
    expired: "30",
    variantTag: "sms" as const,
    // Filter matching fields
    priceRange: 2, // 10K - 50K
    dataAmount: 2, // 1GB - 2GB (1GB)
    cycle: 4, // 30 ngày
    promotion: [2, 3], // DATA, SMS
    utility: [],
    category: "sms",
    isExclusive: false,
  },
];

// Define types for better type safety
export interface DataPackage {
  id: number;
  packageName: string;
  view: number;
  features: string[];
  price: string;
  discount: string;
  expired: string;
  variantTag: string;
  priceRange: number;
  dataAmount: number;
  cycle: number;
  promotion: number[];
  utility: number[];
  category: string;
  isExclusive: boolean;
}

// Helper functions để filter data
export const filterPackagesByPrice = (
  packages: DataPackage[],
  priceRanges: number[]
): DataPackage[] => {
  return packages.filter((pkg) => priceRanges.includes(pkg.priceRange));
};

export const filterPackagesByData = (
  packages: DataPackage[],
  dataRanges: number[]
): DataPackage[] => {
  return packages.filter((pkg) => dataRanges.includes(pkg.dataAmount));
};

export const filterPackagesByCycle = (
  packages: DataPackage[],
  cycles: number[]
): DataPackage[] => {
  return packages.filter((pkg) => cycles.includes(pkg.cycle));
};

export const filterPackagesByPromotion = (
  packages: DataPackage[],
  promotions: number[]
): DataPackage[] => {
  return packages.filter((pkg) =>
    promotions.some((promo: number) => pkg.promotion.includes(promo))
  );
};

export const filterPackagesByUtility = (
  packages: DataPackage[],
  utilities: number[]
): DataPackage[] => {
  return packages.filter((pkg) =>
    utilities.some((utility: number) => pkg.utility.includes(utility))
  );
};

export const filterPackagesByTab = (
  packages: DataPackage[],
  tabId: number
): DataPackage[] => {
  switch (tabId) {
    case 1: // Tất cả
      return packages;
    case 2: // Độc quyền
      return packages.filter((pkg) => pkg.isExclusive);
    case 3: // Gói 5G
      return packages.filter((pkg) => pkg.category === "5G");
    case 4: // Gói MXH
      return packages.filter((pkg) => pkg.category === "MXH");
    case 5: // Gói thoại
      return packages.filter((pkg) => pkg.category === "thoại");
    default:
      return packages;
  }
};

type FilterFn = (
  packages: DataPackage[],
  filterValue: number[]
) => DataPackage[];

export const mapFilterFn: Record<number, FilterFn> = {
  1: filterPackagesByPrice,
  2: filterPackagesByData,
  3: filterPackagesByCycle,
  4: filterPackagesByPromotion,
  5: filterPackagesByUtility,
};

// helper
export const groupPackagesByCategory = (packages: DataPackage[]) => {
  return [
    {
      tabKey: 2,
      title: "Gói độc quyền",
      data: packages.filter((p) => p.isExclusive === true),
    },
    {
      tabKey: 3,
      title: "Gói cước 5G",
      data: packages.filter((p) => p.category === "5G"),
    },
    {
      tabKey: 4,
      title: "Gói mạng xã hội",
      data: packages.filter((p) => p.category === "MXH"),
    },
    {
      tabKey: 5,
      title: "Gói ưu đãi thoại, DATA",
      data: packages.filter((p) => p.category === "thoại"),
    },
  ];
};
