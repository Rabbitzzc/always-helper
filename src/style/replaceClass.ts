/**
 * 将元素指定class替换为另外的class
 * 兼容性：https://caniuse.com/?search=classList
 */

const replaceClass = (el: HTMLElement | string, oldClassName: string, newClassName: string) => {
    if (typeof el === "string") el = document.querySelector(el) as HTMLElement
    el?.classList.replace(oldClassName, newClassName)
}

export default replaceClass
