import hexToRgb from '../../src/color/hexToRgb'


describe('hexToRgb test', () => {
    test('#000', () => {
        expect(hexToRgb('#000')).toEqual('rgb(0, 0, 0)')
    })
    test('#000000', () => {
        expect(hexToRgb('#000000')).toEqual('rgb(0, 0, 0)')
    })
    test('#fff', () => {
        expect(hexToRgb('#fff')).toEqual('rgb(255, 255, 255)')
    })
    test('#ffffff', () => {
        expect(hexToRgb('#ffffff')).toEqual('rgb(255, 255, 255)')
    })

})
