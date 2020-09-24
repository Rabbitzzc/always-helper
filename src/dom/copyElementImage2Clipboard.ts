/**
 * 将 DOM 转化为 图片，并复制到剪贴板
 */


import domt2image from 'dom-to-image'

const copyElementImage2Clipboard = (el: HTMLElement, scale = 2) => {
    if (typeof el === 'string') el = document.querySelector(el)

    const toBlobConfig = {
        width: el.clientWidth * scale,
        height: el.clientHeight * scale,
        style: {
            transform: `scale(${scale})`, // 放大缩小
            transformOrigin: `top left` // 变换起点
        }
    }

    return new Promise((resolve, reject) => {
        domt2image.toBlob(el, toBlobConfig).then(blob => {
            try {
                // eslint-disable-next-line no-undef
                let clipboardItemInput = new ClipboardItem({
                    'image/png': blob,
                })
                navigator.clipboard['write']([clipboardItemInput])
                    .then(() => resolve())
                    .catch(error => reject(error.message || '暂不支持复制'))
            } catch (error) {
                reject(error.message || '暂不支持复制')
            }
        }).catch(err => reject(err))
    })
}


export default copyElementImage2Clipboard
