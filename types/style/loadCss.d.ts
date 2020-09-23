/**
 * 将 CSS 链接插入到 <head> 中
 */
declare const loadCss: (src: string, cb?: Function, order?: string) => void;
export default loadCss;
