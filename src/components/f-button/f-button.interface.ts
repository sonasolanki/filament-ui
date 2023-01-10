import { IIconConfig } from "../../interfaces/filament.interfaces";

export interface IFButtonInterface {
    size?: 'small' | 'medium' | 'large';
    text: string;
    variant: 'action' | 'destructive' | 'ghost' | 'progressive' | 'regressive' | 'naked';
    disabled?: boolean;
    uuid?: string;
    type?: 'button' | 'reset' | 'submit';
    iconConfig?: IIconConfig;
    callback: Function
}
