const Lodash = require('./sync')

let _ = new Lodash()

describe('Lodash:compact', () => {

  let array

  beforeEach(() => {
     array = [false,42, '', true]
  })

  afterAll (() => {
    _ = new Lodash()
  })


  test('should be defined', () => {
    expect(_.compact(array)).toBeDefined()
    expect(_.compact(array)).not.toBeUndefined()
  })


  test('shoud remove falsy values', () => {
    const result = [42,true]

    expect(_.compact(array)).toEqual(result)
    })

    test('shoud not contain falsy values', () => {

      expect(_.compact(array)).not.toContain(false)
      expect(_.compact(array)).not.toContain(0)
      expect(_.compact(array)).not.toContain('')
      expect(_.compact(array)).not.toContain(null)
    })

})


describe('loadash:groupBy', () => {

  test("shoudBeDefined", () => {
    expect(_.groupBy).toBeDefined()

  })

  test('shod be groped arrayitems by Math.floor', () =>{
    const array = [2.2, 2.3, 4.2, 3.1]
    const result = {
      2:[2.2, 2.3],
      4:[4.2],
      3:[3.1]
    }
    expect(_.groupBy(array, Math.floor)).toEqual(result)
  })

  test('shod be groped arrayitems by length', () =>{
    const array = ['one', 'two', 'three']
    const result = {
      5:['three'],
      3:['one', 'two']
    }
    expect(_.groupBy(array, 'length')).toEqual(result)
  })

  test('shod not return array', () =>{

    expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)

  })
})
