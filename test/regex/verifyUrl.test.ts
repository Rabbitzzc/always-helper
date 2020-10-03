import verifyUrl from '../../src/regex/verifyUrl'


describe('verifyUrl', ()=>{
    test('url test', ()=>{
        expect(verifyUrl('https://www.google.com/search?q=URL&oq=URL&aqs=chrome..69i57j0l3j69i65j69i60l3.855j0j4&sourceid=chrome&ie=UTF-8')).toEqual(true)
    })
    test('url test', ()=>{
        expect(verifyUrl('https://www.baidu.com')).toEqual(true)
    })
    test('url test', ()=>{
        expect(verifyUrl('sdajkfs;kfsfla')).toEqual(false)
    })
    test('url test', ()=>{
        expect(verifyUrl('http://wangwl.net/static/projects/visualRegex/#flags=i&source=%5E((%5B%5E%3A%2F%3F%23%5D%2B)%3A)%3F(%5C%2F%5C%2F(%5B%5E%2F%3F%23%5D*))%3F(%5B%5E%3F%23%5D*)(%5C%3F(%5B%5E%23%5D*))%3F(%23(.*))%3F&match=https%3A%2F%2Fwww.baidu.com%2F&method=match')).toEqual(true)
    })
    test('http test', ()=>{
        expect(verifyUrl('http://www.example.com')).toEqual(true)
    })
    test('https test', ()=>{
        expect(verifyUrl('https://www.example.com')).toEqual(true)
    })
})
