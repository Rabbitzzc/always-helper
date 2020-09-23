/**
 * 给元素添加 class
 * 兼容性：https://caniuse.com/?search=classList
 */
declare const addClass: (el: HTMLElement | string, className: string) => void;
export default addClass;
