/**
 * 将元素指定class替换为另外的class
 * 兼容性：https://caniuse.com/?search=classList
 */

const replaceClass = (el: Element | string, oldClassName: string, newClassName: string, className: string) => {
    if (typeof el === "string") el = document.querySelector(el)
    el?.classList.replace(newClassName, className)
}

export default replaceClass
