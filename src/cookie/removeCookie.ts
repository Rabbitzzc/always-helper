/**
 * 删除 Cookie
 */
import Cookies from 'js-cookie'

const removeCookie = (name: string, options?: object): void => {
    Cookies.remove(name, options)
}

export default removeCookie
