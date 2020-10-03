import verifyCellNumber from '../../src/regex/verifyCellNumber'

describe('verifyCellNumber', ()=>{
    test('cell number test', ()=>{
        expect(verifyCellNumber("1798448128")).toEqual(false)
    })
    test('cell number test', ()=>{
        expect(verifyCellNumber("15688888888")).toEqual(true)
    })
    test('cell number test', ()=>{
        expect(verifyCellNumber("1234567")).toEqual(false)
    })
    test('cell number test', ()=>{
        expect(verifyCellNumber("")).toEqual(false)
    })
    test('cell number test', ()=>{
        expect(verifyCellNumber('dfklafd;sd@')).toEqual(false)
    })
    test('cell number test', ()=>{
        expect(verifyCellNumber('23456789011')).toEqual(false)
    })

})
