import parseQueryString from '../../src/url/parseQueryString'

describe('parseQueryString test', () => {
    test('basic url', () => {
        expect(parseQueryString('https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6&rsv_spt=10')).toEqual({
            wd: '百度',
            rsv_spt: '10'
        })
    })

    test('no query', () => {
        expect(parseQueryString('https://bj.meituan.com/')).toEqual({})
    })

    test('复杂逻辑', () => {
        expect(parseQueryString('https://mp.weixin.qq.com/s?__biz=MzA4Nzg0MDM5Nw==&mid=2247484469&amp;idx=1&amp;sn=bf30a79482e6254c39809865aac612fc&source=41#wechat_redirect')).toEqual({
            "__biz": "MzA4Nzg0MDM5Nw==",
            "amp;idx": "1",
            "amp;sn": "bf30a79482e6254c39809865aac612fc",
            "mid": "2247484469",
            "source": "41",
        })
    })
})
