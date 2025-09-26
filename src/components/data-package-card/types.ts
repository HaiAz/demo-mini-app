export type SocialIconType = "tv360" | "tiktok" | "youtube" | "spotify";
export type DataPackageCardType = "primary" | "secondary";

export interface IDataPackageCard {
  packageName: string;
  price: string;
  duration: string;
  features: string[];
  socialIcons?: SocialIconType[];
  isHot?: boolean;
  isPromo?: boolean;
  promoText?: string;
  type?: DataPackageCardType;
  onClick?: () => void;
  className?: string;
}
