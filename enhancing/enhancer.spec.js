const enhancer = require('./enhancer.js');



describe('Sanity check', () => {
  it('Math', () => {
    expect(5 + 5).toBe(10);
  })
})

describe('Item enhancer functions', () => {
  let bat1
  beforeEach(() => {
    bat1 = {
      name: 'Rickenbacker 4001',
      durability: 80,
      enhancement: 18
    }
  })
  it('enhancer has repair function', () => {
    expect(enhancer.repair).toBeDefined()
    expect(enhancer.repair).toBeInstanceOf(Function)
  })
  it('enhancer.repair restores durability', () => {
    bat1 = enhancer.repair(bat1);
    expect(bat1.durability).toBe(100);
  })
  it('enhancer.success is a function', () => {
    expect(enhancer.success).toBeDefined()
    expect(enhancer.success).toBeInstanceOf(Function)
  })
  it('enhancer.success increases enhancement to 20', () => {
    expect(bat1.enhancement).toBe(18)
    bat1 = enhancer.success(bat1);
    expect(bat1.enhancement).toBe(19)
  })
  it('enhancer.success enhancement stops at 20', () => {
    expect(bat1.enhancement).toBe(18)
    bat1 = enhancer.success(bat1);
    expect(bat1.enhancement).toBe(19)
    bat1 = enhancer.success(bat1);
    expect(bat1.enhancement).toBe(20)
    bat1 = enhancer.success(bat1);
    expect(bat1.enhancement).toBe(20)
    bat1 = enhancer.success(bat1);
    expect(bat1.enhancement).toBe(20)
  })
  it('enhancer.fail is a function', () => {
    expect(enhancer.fail).toBeDefined()
    expect(enhancer.fail).toBeInstanceOf(Function)
  })
  it('enhancer.fail decreases durability by 5 when enhancement under 15', () => {
    bat1.enhancement = 14;
    bat1 = enhancer.fail(bat1)
    expect(bat1.durability).toBe(75)
  })
  it('enhancer.fail decreaces durability by 10 when enhancement 15 or more', () => {
    bat1 = enhancer.fail(bat1)
    expect(bat1.durability).toBe(70)
  })
  it('enhancer.fail decreases enhancement by 1 when enhancement is 16 or more', () => {
    bat1 = enhancer.fail(bat1)
    expect(bat1.enhancement).toBe(17)
    bat1 = enhancer.fail(bat1)
    expect(bat1.enhancement).toBe(16)
    bat1 = enhancer.fail(bat1)
    expect(bat1.enhancement).toBe(15)
    bat1 = enhancer.fail(bat1)
    expect(bat1.enhancement).toBe(15)
  })
  it('enhancer.get is a function', () => {
    expect(enhancer.get).toBeDefined()
    expect(enhancer.get).toBeInstanceOf(Function)
  })

})