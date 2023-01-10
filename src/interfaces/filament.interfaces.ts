export interface IIconConfig {
  iconColor?: string;
  iconName: string;
  iconPlacement?: string;
  iconType: string;
}

export interface IItemModel {
  data?: string;
  disabled?: boolean;
  icon?: IIconConfig;
  justification?: string;
  lozengeContent?: string;
  name: string;
  subText?: string;
  selected?: boolean;
  uuid?: string;
}

export interface INavigationItemModel extends IItemModel {
  url?: string;
}

export interface IAvatarConfig {
  image?: {
    url: string;
    altText: string;
  };
  innerText?: string;
}
