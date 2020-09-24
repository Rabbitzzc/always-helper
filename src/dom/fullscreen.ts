/**
 * 全屏操作
 */

// 进入全屏
const launchFullscreen = (el: HTMLElement) => {
    let result = true
    if (el['requestFullscreen']) {
        el['requestFullscreen']()
    } else if (el['mozRequestFullScreen']) {
        el['mozRequestFullScreen']()
    } else if (el['msRequestFullscreen']) {
        el['msRequestFullscreen']()
    } else if (el['webkitRequestFullscreen']) {
        el['webkitRequestFullScreen']()
    } else {
        result = false
    }

    return result
}

// 退出全屏
const exitFullscreen = () => {
    let result = true
    if (document['exitFullscreen']) {
        document['exitFullscreen']()
    } else if (document['msExitFullscreen']) {
        document['msExitFullscreen']()
    } else if (document['mozCancelFullScreen']) {
        document['mozCancelFullScreen']()
    } else if (document['webkitExitFullscreen']) {
        document['webkitExitFullscreen']()
    } else {
        result = false
    }

    return result
}


export default {
    launchFullscreen,
    exitFullscreen
}
