import verifyEmail from '../../src/regex/verifyEmail'

describe('verifyEmail', ()=>{
    test('email test', ()=>{
        expect(verifyEmail("zzclovelcs@gmail.com")).toEqual(true)
    })
    test('email test', ()=>{
        expect(verifyEmail("1798448128@qq.com")).toEqual(true)
    })
    test('email test', ()=>{
        expect(verifyEmail("fjlkasdkasfs")).toEqual(false)
    })
    test('email test', ()=>{
        expect(verifyEmail("121392032")).toEqual(false)
    })
    test('email test', ()=>{
        expect(verifyEmail('123213@qq')).toEqual(false)
    })
    test('email test', ()=>{
        expect(verifyEmail('')).toEqual(false)
    })

})
