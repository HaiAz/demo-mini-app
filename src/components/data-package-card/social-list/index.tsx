import { IconSpotify, IconTiktok, IconTV360, IconYoutube } from "assets/icon";
import { SocialIconType } from "../types";
import "./styles.scss";

interface ISocialListProps {
  socialIcons?: SocialIconType[];
}

const SocialList = ({ socialIcons }: ISocialListProps) => {
  const iconMap: Record<
    SocialIconType,
    React.ComponentType<{ width: string; height: string }>
  > = {
    tiktok: IconTiktok,
    tv360: IconTV360,
    youtube: IconYoutube,
    spotify: IconSpotify,
  };

  if (socialIcons?.length === 0) return null;

  return (
    <div className="social">
      {socialIcons?.map((iconName: SocialIconType, index: number) => {
        const IconComponent = iconMap[iconName];
        return IconComponent ? (
          <span key={index} className="social-item">
            <IconComponent width="22" height="22" />
          </span>
        ) : null;
      })}
    </div>
  );
};

export default SocialList;
