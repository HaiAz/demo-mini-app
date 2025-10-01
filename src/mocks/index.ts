import { TagVariantType } from "types/tag-variant";

export const FILTER_DATA = [
  {
    id: 1,
    buttonSelectName: "Giá",
    popupTitle: "Chọn khoảng giá",
    buttonConfirmName: "Áp dụng",
    listOption: [
      { label: "<10K", value: 1 },
      { label: "10K - 50K", value: 2 },
      { label: "50 K - 100K", value: 3 },
      { label: "100k - 500K", value: 4 },
      { label: ">500k", value: 5 },
    ],
  },
  {
    id: 2,
    buttonSelectName: "Data",
    popupTitle: "Chọn mức Data",
    buttonConfirmName: "Áp dụng",
    listOption: [
      { label: "< 1GB", value: 1 },
      { label: "1GB - 2GB", value: 2 },
      { label: "2GB - 4GB", value: 3 },
      { label: "4GB - 6GB", value: 4 },
      { label: "6GB - 8GB", value: 5 },
      { label: ">8GB", value: 6 },
    ],
  },
  {
    id: 3,
    buttonSelectName: "Chu kỳ",
    popupTitle: "Chọn loại chu kỳ",
    buttonConfirmName: "Áp dụng",
    listOption: [
      { label: "1 ngày", value: 1 },
      { label: "3 ngày", value: 2 },
      { label: "7 ngày", value: 3 },
      { label: "30 ngày", value: 4 },
      { label: "90 ngày", value: 5 },
      { label: "180 ngày", value: 6 },
      { label: "360 ngày", value: 7 },
    ],
  },
  {
    id: 4,
    buttonSelectName: "Ưu đãi",
    popupTitle: "Chọn loại ưu đãi",
    buttonConfirmName: "Áp dụng",
    listOption: [
      { label: "Thoại", value: 1 },
      { label: "DATA", value: 2 },
      { label: "SMS", value: 3 },
    ],
  },
];

export const CATEGORIES_TAB_DATA = [
  {
    id: 1,
    tabTitle: "Tất cả",
  },
  {
    id: 2,
    tabTitle: "Độc quyền",
  },
  {
    id: 3,
    tabTitle: "Gói 5G",
  },
  {
    id: 4,
    tabTitle: "Gói MXH",
  },
  {
    id: 5,
    tabTitle: "Gói thoại",
  },
];

export const MOCK_DATA_PACKAGES: IPackage[] = [
  {
    id: 1,
    packageName: "Gói DATA Khủng",
    view: 1250,
    features: ["10GB data", "Miễn phí Facebook", "Miễn phí YouTube"],
    price: "120000",
    originPrice: "90000",
    expired: "30",
    variantTag: "exclusive" as TagVariantType,
    // Filter matching fields
    priceRange: 4, // 100k - 500K
    dataAmount: 6, // >8GB (10GB)
    cycle: 4, // 30 ngày
    promotion: [1, 2], // Thoại, DATA
    category: [2, 3],
  },
  {
    id: 2,
    packageName: "Gói Thoại Siêu Tiết Kiệm",
    view: 890,
    features: ["300 phút gọi", "2GB data", "100 SMS miễn phí"],
    price: "80000",
    originPrice: "65000",
    expired: "30",
    variantTag: "hot" as TagVariantType,
    // Filter matching fields
    priceRange: 3, // 50K - 100K
    dataAmount: 3, // 2GB - 4GB
    cycle: 4, // 30 ngày
    promotion: [1, 3], // Thoại, SMS
    category: [5],
  },
  {
    id: 3,
    packageName: "Gói MXH Học Sinh",
    view: 2100,
    features: ["5GB data", "Free Facebook", "Free TikTok", "Free Instagram"],
    price: "45000",
    originPrice: "35000",
    expired: "30",
    variantTag: "hot" as TagVariantType,
    // Filter matching fields
    priceRange: 2, // 10K - 50K
    dataAmount: 4, // 4GB - 6GB (5GB)
    cycle: 4, // 30 ngày
    promotion: [2], // DATA
    category: [4],
  },
  {
    id: 4,
    packageName: "Gói 5G Siêu Tốc",
    view: 750,
    features: ["20GB data 5G", "Unlimited YouTube", "200 phút gọi"],
    price: "350000",
    originPrice: "280000",
    expired: "90",
    variantTag: "exclusive" as TagVariantType,
    // Filter matching fields
    priceRange: 4, // 100K - 500K
    dataAmount: 6, // >8GB (20GB)
    cycle: 5, // 90 ngày
    promotion: [1, 2], // Thoại, DATA
    category: [2, 3],
  },
  {
    id: 5,
    packageName: "Gói Data Cơ Bản",
    view: 450,
    features: ["1.5GB data", "50 phút gọi"],
    price: "25000",
    originPrice: "20000",
    expired: "7",
    variantTag: "suggest" as TagVariantType,
    // Filter matching fields
    priceRange: 2, // 10K - 50K
    dataAmount: 2, // 1GB - 2GB
    cycle: 3, // 7 ngày
    promotion: [1, 2], // Thoại, DATA
    category: [3],
  },
  {
    id: 6,
    packageName: "Gói Cuối Tuần",
    view: 320,
    features: ["3GB data", "Free Zalo"],
    price: "15000",
    originPrice: "12000",
    expired: "3",
    variantTag: "suggest" as TagVariantType,
    // Filter matching fields
    priceRange: 2, // 10K - 50K
    dataAmount: 3, // 2GB - 4GB (3GB)
    cycle: 2, // 3 ngày
    promotion: [2], // DATA
    category: [4],
  },
  {
    id: 7,
    packageName: "Gói Thoại Doanh Nhân",
    view: 680,
    features: ["500 phút gọi", "8GB data", "200 SMS"],
    price: "180000",
    originPrice: "150000",
    expired: "30",
    variantTag: "hot" as TagVariantType,
    // Filter matching fields
    priceRange: 4, // 100K - 500K
    dataAmount: 5, // 6GB - 8GB (8GB)
    cycle: 4, // 30 ngày
    promotion: [1, 2, 3], // Thoại, DATA, SMS
    category: [2],
  },
  {
    id: 8,
    packageName: "Gói Data Khủng Long",
    view: 1850,
    features: ["50GB data", "Unlimited social", "Free Netflix 1 tháng"],
    price: "600000",
    originPrice: "480000",
    expired: "180",
    variantTag: "exclusive" as TagVariantType,
    // Filter matching fields
    priceRange: 5, // >500K
    dataAmount: 6, // >8GB (50GB)
    cycle: 6, // 180 ngày
    promotion: [2], // DATA
    category: [2, 5],
  },
  {
    id: 9,
    packageName: "Gói Sinh Viên",
    view: 1200,
    features: ["4GB data", "Free Facebook", "100 SMS"],
    price: "35000",
    originPrice: "28000",
    expired: "30",
    variantTag: "favorite" as TagVariantType,
    // Filter matching fields
    priceRange: 2, // 10K - 50K
    dataAmount: 4, // 4GB - 6GB (4GB)
    cycle: 4, // 30 ngày
    promotion: [2, 3], // DATA, SMS
    category: [4],
  },
  {
    id: 10,
    packageName: "Gói Data Ngày",
    view: 180,
    features: ["500MB data", "20 phút gọi"],
    price: "8000",
    originPrice: "6000",
    expired: "1",
    variantTag: "favorite" as TagVariantType,
    // Filter matching fields
    priceRange: 1, // <10K
    dataAmount: 1, // <1GB
    cycle: 1, // 1 ngày
    promotion: [1, 2], // Thoại, DATA
    category: [3],
  },
  {
    id: 11,
    packageName: "Gói 5G Độc Quyền",
    view: 2800,
    features: ["30GB data 5G", "Unlimited call", "Free all social apps"],
    price: "450000",
    originPrice: "360000",
    expired: "90",
    variantTag: "exclusive" as TagVariantType,
    // Filter matching fields
    priceRange: 4, // 100K - 500K
    dataAmount: 6, // >8GB (30GB)
    cycle: 5, // 90 ngày
    promotion: [1, 2], // Thoại, DATA
    category: [2, 3],
  },
  {
    id: 12,
    packageName: "Gói SMS Siêu Rẻ",
    view: 95,
    features: ["500 SMS", "1GB data"],
    price: "20000",
    originPrice: "15000",
    expired: "30",
    variantTag: "hot" as TagVariantType,
    // Filter matching fields
    priceRange: 2, // 10K - 50K
    dataAmount: 2, // 1GB - 2GB (1GB)
    cycle: 4, // 30 ngày
    promotion: [2, 3], // DATA, SMS
    category: [5],
  },
];

// Define types for better type safety
export interface IPackage {
  id: number;
  packageName: string; // Tên gói
  view: number; // lượt xem
  features: string[]; // tiện ích
  price: string; // giá
  originPrice: string; // giá gốc
  expired: string; // chu kỳ
  variantTag: TagVariantType; // loại tag "hot" | "suggest" | "favorite" | "exclusive"
  priceRange: number; // id khoảng giá > filter
  dataAmount: number; // id dung lượng > filter
  cycle: number; // id chu kỳ > filter
  promotion: number[]; // id ưu đãi > filter
  category: number[]; // id danh mục
}

export interface ICategory {
  id: number;
  title: string; // Tiêu đề cho danh sách gói
  tabTitle: string; // Tiêu đề tab
}

export interface IFilter {
  priceRanges: { label: string; value: number }[]; // khoảng giá
  dataAmounts: { label: string; value: number }[]; // dung lượng
  cycle: { label: string; value: number }[]; // chu kỳ
  promotion: { label: string; value: number }[]; // ưu đãi
}

// Helper functions để filter data
export const filterPackagesByPrice = (
  packages: IPackage[],
  priceRanges: number[]
): IPackage[] => {
  return packages.filter((pkg) => priceRanges.includes(pkg.priceRange));
};

export const filterPackagesByData = (
  packages: IPackage[],
  dataRanges: number[]
): IPackage[] => {
  return packages.filter((pkg) => dataRanges.includes(pkg.dataAmount));
};

export const filterPackagesByCycle = (
  packages: IPackage[],
  cycles: number[]
): IPackage[] => {
  return packages.filter((pkg) => cycles.includes(pkg.cycle));
};

export const filterPackagesByPromotion = (
  packages: IPackage[],
  promotions: number[]
): IPackage[] => {
  return packages.filter((pkg) =>
    promotions.some((promo: number) => pkg.promotion.includes(promo))
  );
};

export const filterPackagesByTab = (
  packages: IPackage[],
  tabId: number
): IPackage[] => {
  switch (tabId) {
    case 1: // Tất cả
      return packages;
    case 2: // Độc quyền
      return packages.filter((pkg) => pkg.category.includes(2));
    case 3: // Gói 5G
      return packages.filter((pkg) => pkg.category.includes(3));
    case 4: // Gói MXH
      return packages.filter((pkg) => pkg.category.includes(4));
    case 5: // Gói thoại
      return packages.filter((pkg) => pkg.category.includes(5));
    default:
      return packages;
  }
};

type FilterFn = (packages: IPackage[], filterValue: number[]) => IPackage[];

export const mapFilterFn: Record<number, FilterFn> = {
  1: filterPackagesByPrice,
  2: filterPackagesByData,
  3: filterPackagesByCycle,
  4: filterPackagesByPromotion,
};

// helper
export const groupPackagesByCategory = (packages: IPackage[]) => {
  return [
    {
      tabKey: 2,
      title: "Gói độc quyền",
      data: packages.filter((p) => p.category.includes(2)),
    },
    {
      tabKey: 3,
      title: "Gói cước 5G",
      data: packages.filter((p) => p.category.includes(3)),
    },
    {
      tabKey: 4,
      title: "Gói mạng xã hội",
      data: packages.filter((p) => p.category.includes(4)),
    },
    {
      tabKey: 5,
      title: "Gói ưu đãi thoại, DATA",
      data: packages.filter((p) => p.category.includes(5)),
    },
  ];
};
