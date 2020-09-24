/**
 * 将 DOM 转化为 图片，并复制到剪贴板
 */
declare const copyElementImage2Clipboard: (el: HTMLElement, scale?: number) => Promise<unknown>;
export default copyElementImage2Clipboard;
