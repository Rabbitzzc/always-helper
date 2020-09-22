/**
 * 获取指定 cookie 值
 */
import Cookies from 'js-cookie'

const getCookie = (name?: string): any => {
    return Cookies.get(name)
}

export default getCookie
