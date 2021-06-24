const  {sum} = require('./intro')

describe('Sum testing', () => {

  test('Sum shoud return sum of two values', () =>{
    expect( sum(1,3) ).toBe(4)
    expect( sum(1,3) ).toBeLessThan(8)
  })
  test('Sum shoud return sum of two values', () =>{
    expect( sum(1,3) ).toBeGreaterThan(2)

  })


})
