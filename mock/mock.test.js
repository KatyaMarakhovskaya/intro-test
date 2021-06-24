const {map} = require("./mock")

///Тестируем колбек который передается в мап

// MOc создает псевдофункцию с помощью джеста

describe('map function', () => {
  let array
  let fn

  beforeEach(() => {
    array = [1,2,3,5]
    fn = jest.fn( x => x ** 2)
    map(array,fn)
  })

  test("schould call calback", () => {
    expect(fn).toBeCalled()

  })

  test('should call callback 4 times', () => {
    expect(fn).toBeCalledTimes(4)
    expect(fn.mock.calls.length).toBe(4)
  })

  test('should pow 2 each element', () => {
    expect(fn.mock.results[0].value).toBe(1)
    expect(fn.mock.results[1].value).toBe(4)
    expect(fn.mock.results[2].value).toBe(9)
    expect(fn.mock.results[3].value).toBe(25)
  })

    test('shoul fn work', () => {
      fn.mockReturnValueOnce(100)
      fn.mockReturnValueOnce(200)
      fn.mockReturnValue("42")

        expect(fn()).toBe(100)
        expect(fn()).toEqual(200)
        expect(fn()).toEqual("42")
        expect(fn()).toEqual("42")
    })

})
