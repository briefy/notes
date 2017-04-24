import isPlaneObj from '../isPlaneObj'

describe('isPlaneObj',()=>{
  it('{test: "jest"} is PlaneObj',()=>{
    expect(isPlaneObj({test:'jest'})).toBe(true);
  })
  class DerivedObj {}
  it('new DerivedObj is not PlaneObj',()=>{
    expect(isPlaneObj(new DerivedObj)).not.toBe(true);
  })
})