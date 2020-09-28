import rgbToHex from '../../src/color/rgbToHex'

describe('rgbToHex test', () => {
    test('rgb(0,0,0)', () => {
        expect(rgbToHex('rgb(0,0,0)')).toEqual('#000000')
    })
    test('rgb(0, 0, 0)', () => {
        expect(rgbToHex('rgb(0, 0, 0)')).toEqual('#000000')
    })
    test('rgb(255, 255, 255)', () => {
        expect(rgbToHex('rgb(255, 255, 255)')).toEqual('#ffffff')
    })
})
