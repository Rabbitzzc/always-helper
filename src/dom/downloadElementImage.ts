/**
 * 将 DOM 元素下载为图片
 * 需要提前安装 domtoimage
 * @param el  DOM
 * @param name 下载名称
 * @param scale 质量 1，2，3，4，5
 */
import domt2image from 'dom-to-image'

const downloadElementImage = (el: HTMLElement, name = 'element-image', scale = 2) => {
    const toBlobConfig = {
        width: el.clientWidth * scale,
        height: el.clientHeight * scale,
        style: {
            transform: `scale(${scale})`, // 放大缩小
            transformOrigin: `top left` // 变换起点
        }
    }

    return new Promise((resolve, reject) => {
        domt2image.toPng(el, toBlobConfig).then(data => {
            const link = document.createElement('a')
            link.download = name
            link.href = data
            link.click()
            resolve(1)
        }).catch(err => reject(err))
    })
}


export default downloadElementImage
