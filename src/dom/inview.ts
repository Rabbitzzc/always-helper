/**
 * @description 判断是否进入可视区域
 * allin 表示是否需要全部进入
 */
const inview = (el, allin = false) => {
    if (!el) return

    let top: number = el.offsetTop
    let left: number = el.offsetLeft
    let width = 0; let height = 0

    if (allin) {
        width = el.offsetWidth
        height = el.offsetHeight
    }

    while (el.offsetParent) {
        el = el.offsetParent
        top += el.offsetTop
        left += el.offsetLeft
    }

    return (
        top >= window.pageYOffset &&
        left >= window.pageXOffset &&
        top + height <= window.pageYOffset + window.innerHeight &&
        left + width <= window.pageXOffset + window.innerWidth
    )
}

export default inview
