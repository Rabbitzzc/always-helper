import fileSize from '../../src/number/fileSize'


describe('fileSize test', () => {
    test('0', () => {
        expect(fileSize(0)).toEqual('0')
    })
    test('1024', () => {
        expect(fileSize(1024)).toEqual('1K')
    })
    test('1048576', () => {
        expect(fileSize(1048576)).toEqual('1M')
    })
})
