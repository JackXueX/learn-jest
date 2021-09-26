import Counter from './Counter';

describe('Counter 的所有测试代码', () => {
  let counter = null;

  beforeAll(() => {
    console.log('beforeAll');
  })

  beforeEach(() => {
    // 每个测试之前执行
    console.log('beforeEach');
    counter = new Counter();
  })

  afterEach(() => {
    console.log('afterEach');
  })

  afterAll(() => {
    console.log('afterAll');
    counter = new Counter();
  })

  describe('测试增加相关的代码', () => {
    beforeEach(() => {
      // 每个测试之前执行
      console.log('beforeEach test add');
      counter = new Counter();
    })

    test('测试 Counter 中的 addone 方法', () => {
      console.log('测试 Counter 中的 addone 方法');
      counter.addOne();
      expect(counter.number).toBe(1);
    });
    
    test('测试 Counter 中的 addTwo 方法', () => {
      console.log('测试 Counter 中的 addTwo 方法');
      counter.addTwo();
      expect(counter.number).toBe(2);
    });
  })

  describe('测试减少相关的代码', () => {
    test('测试 Counter 中的 minusOne 方法', () => {
      console.log('测试 Counter 中的 minusOne 方法');
      counter.minusOne();
      expect(counter.number).toBe(-1);
    });
    
    test('测试 Counter 中的 minusTwo 方法', () => {
      console.log('测试 Counter 中的 minusTwo 方法');
      counter.minusTwo();
      expect(counter.number).toBe(-2);
    });
  })
});



