/**
 * 复制 DOM 到剪贴板
 */
const copyElementImage2Clipboard = (el: HTMLElement) => {
    if (typeof el === 'string') el = document.querySelector(el)

    window.getSelection().removeAllRanges()
    const copyDOM = el
    let range = document.createRange()
    range.selectNode(copyDOM)
    window.getSelection().addRange(range)

    let result = false
    let successful = document.execCommand('copy')
    if (successful) {
        result = true
    }
    window.getSelection().removeAllRanges()

    return result
}

export default copyElementImage2Clipboard
