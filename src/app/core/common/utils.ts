export const MAX_CHARS = 524288;
export const MAX_PAGE_SIZE = 5000;
export const DEFAULT_PAGE_SIZE = 20;
export const MIN_SEARCH_LENGTH = 3;
export const PAUSE = 10;
export const TEXT_SEARCHING = "Searching...";
export const TEXT_NO_RESULTS = "No results found";
export const CLEAR_TIMEOUT = 50;
export const DEFAULT_AVATAR = "./../../assets/img/app/icon/UserDefaultIcon~iphone.png";


export function isNil(value: any) {
    return typeof value === "undefined" || value === null;
}

export function isEmpty(value: any) {
    return typeof value === "undefined" || value === null|| value==="";
}

export function getRandomInt(min: number, max: number) {1
      return Math.floor(Math.random() * (max - min + 1) + min);
    }