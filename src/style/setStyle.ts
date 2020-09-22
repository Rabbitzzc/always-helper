/**
 * 给元素设置样式
 */

const setStyle = (el: Element | string, styles: object) => {
    if (typeof el === "string") el = document.querySelector(el)

    for (let k in styles) {
        if (styles.hasOwnProperty(k)) el.style[k] = styles[k]
    }
}

export default setStyle
