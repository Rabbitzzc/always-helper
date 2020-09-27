/**
 * 随机生成中文汉字
 */

// http://www.tidewaterchineseschool.org/wp-content/uploads/2015/02/%E5%9B%BD%E5%AE%B6%E5%87%BA%E7%89%88%E5%B1%80%E6%8A%BD%E6%A0%B7%E7%BB%9F%E8%AE%A1%E6%9C%80%E5%B8%B8%E7%94%A8%E7%9A%84-1000-%E4%B8%AA%E6%B1%89%E5%AD%97.pdf
const CN_NORMAL = [
    "时",
    "大",
    "地",
    "为",
    "子",
    "中",
    "你",
    "说",
    "生",
    "国",
    "年",
    "着",
    "就",
    "那",
    "和",
    "诗",
    "独",
    "复",
    "痛",
    "消",
    "社",
    "算"
]

const randomCnChar = (len=3): string => {
    // eval( "var word=" +  '"\\u' + (Math.round(Math.random() * 20901) + 19968).toString(16)+'"');
    // return word
    let str = ''
    let n = 0
    while (n < len) {
        str += CN_NORMAL[Math.floor(Math.random() * CN_NORMAL.length)]
        ++n
    }
    return str
}

export default randomCnChar
