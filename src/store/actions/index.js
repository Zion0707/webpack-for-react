import { SET_ITEM_NAME, SET_ITEM_LIST } from '_store/constants/index';

export function setItemName(payload) {
    return { type: SET_ITEM_NAME, payload };
}

export function setItemList(payload) {
    return { type: SET_ITEM_LIST, payload };
}
