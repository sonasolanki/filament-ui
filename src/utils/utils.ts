import { IItemModel } from '../interfaces/filament.interfaces';

export function getUUId(): string {
    return Math.random().toString(36).substr(2, 12);
}

export function getSelectedItem(array: IItemModel[]) {
    return array.filter((item: any) => item.selected === true)[0];
}

export function setItemSelected(array: IItemModel[], key: string, match: string) {
    return array.map(item => {
        if (item[key] === match) {
            return {
                ...item,
                selected: true,
            };
        } else {
            return {
                ...item,
                selected: false,
            };
        }
    });
}

export function setDisabledState(array: IItemModel[], disabled: boolean) {
    return array.map(item => {
        return {
            ...item,
            disabled: disabled
        };
    });
}
