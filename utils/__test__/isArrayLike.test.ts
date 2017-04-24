import isArrayLike from '../isArrayLike'

describe('isArrayLike',()=>{
  it('{length: 3} is ArrayLike',()=>{
    expect(isArrayLike({length: 3})).toBe(true)
  })

  it('{length: "id"} is not ArrayLike',()=>{
    expect(isArrayLike({lenght: 'id'})).not.toBe(true)
  })
})
