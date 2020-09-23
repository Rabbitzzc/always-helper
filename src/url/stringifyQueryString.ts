/**
 * stringify Object to Query String（包括序列化）
 * @test 1. 对象 2. 数组 3. null
 */

const stringifyQueryString = (obj: object, prefix?: string) => {
    const str = []

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            str.push(obj[key] !== null && typeof obj[key] === "object" ? stringifyQueryString(obj[key], (prefix ? prefix + "[" + key + "]" : key)) : encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]))
        }
    }
    return str.join("&")
}

export default stringifyQueryString
