const Ajax = require('./async')
const axios = require('axios')

jest.mock('axios')

describe("Ajax echo", () => {

  test("return data", async () => {
    const result = await Ajax.echo("some data")
    expect(result).toBe("some data")
  })

  test("return with then", () => {
    return Ajax.echo("some data").then((data) => {
      expect(data).toBe("some data")
    })
  })

  test('catch error', () => {
    return Ajax.echo().catch(err => {
      expect(err).toBeInstanceOf(Error)
    })
  })

  test('catch error try catch', async () => {
    try{
      await Ajax.echo()
    }catch(e){
      expect(e.message).toBe('error')
    }
  })


})



describe('Ajax:get', () => {
  let response
  let todos

  beforeEach(() => {
    todos = [
      {id:1, tittle: 'todo 1', completed:false}
    ]

    response = {
      data: {
        todos
      }
    }
  })

  test("should return from backend", () => {
    axios.get.mockReturnValue(response)

    return Ajax.get().then(data => {
      expect(data.todos).toEqual(todos)
    })
  })
})
