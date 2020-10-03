import verifyIdCard from '../../src/regex/verifyIdCard'

describe('verifyIdCard', ()=>{
    test('id test', ()=>{
        expect(verifyIdCard("11010519491231002X")).toEqual(true)
    })
    test('id test', ()=>{
        expect(verifyIdCard("11010519491331002X")).toEqual(false)
    })
    test('id test', ()=>{
        expect(verifyIdCard('362536199105034456')).toEqual(true)
    })
    test('id test', ()=>{
        expect(verifyIdCard('https://www.example.com')).toEqual(false)
    })
})
