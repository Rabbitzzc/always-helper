
import uuid from '../../src/random/uuid'

describe('uuid test', () => {
    test('uuid test', () => {
        expect(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(uuid())).toEqual(true)
    })
})
