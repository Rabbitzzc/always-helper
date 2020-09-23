/**
 * 将元素指定class替换为另外的class
 * 兼容性：https://caniuse.com/?search=classList
 */
declare const replaceClass: (el: HTMLElement | string, oldClassName: string, newClassName: string, className: string) => void;
export default replaceClass;
