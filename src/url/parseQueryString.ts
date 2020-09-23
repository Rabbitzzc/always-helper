/**
 * parse URL Query String
 */

const parseQueryString = (url?: string): object => {
    // http://wangwl.net/static/projects/visualRegex/#flags=&source=%2F%5B%3F%26%5D(%5B%5E%3D%23%5D%2B)%3D(%5B%5E%26%23%5D*)%2Fg&match=99.882&method=match
    const regex = /[?&]([^=#]+)=([^&#]*)/g
    url = url || window.location.href

    const result = {}
    let match
    while ((match = regex.exec(url)) !== null) {
        result[decodeURIComponent(match[1])] = decodeURIComponent(match[2])
    }
    return result
}

export default parseQueryString
