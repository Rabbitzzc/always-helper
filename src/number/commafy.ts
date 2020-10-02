/**
 * 数字三位小数点
 * https://stackoverflow.com/questions/6784894/add-commas-or-spaces-to-group-every-three-digits
 */

const commafy = (num:number) => {
    const str  = num.toString().split('.')

    if (str[0].length >= 4) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 4) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.')
}

export default commafy
