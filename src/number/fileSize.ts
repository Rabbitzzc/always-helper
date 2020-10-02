const suffixList = ['', 'K', 'M', 'G', 'T']

const fileSize = (bytes:number) => {
    if (bytes <= 0) return '0'

    const suffixIdx = Math.floor(Math.log(bytes) / Math.log(1024))
    const val = bytes / Math.pow(2, suffixIdx * 10)

    return Number(val.toFixed(2)) + suffixList[suffixIdx]
}


export default fileSize
