import timer from './timer';

beforeEach(() => {
  jest.useFakeTimers();
})

// test('timer 测试', (done) => {
//   timer(() => {
//     expect(1).toBe(1);
//     done();
//   })
// })

// test('timer 测试', () => {
//   const fn = jest.fn();
//   timer(fn);
//   jest.runAllTimers();
//   expect(fn).toHaveBeenCalledTimes(2);
// })

// 只让定时器运行一次
// test('timer 测试', () => {
//   const fn = jest.fn();
//   timer(fn);
//   jest.runOnlyPendingTimers();
//   expect(fn).toHaveBeenCalledTimes(1);
// })

// 上面两种方法的改进版
test('timer 测试', () => {
  const fn = jest.fn();
  timer(fn);
  jest.advanceTimersByTime(3000);
  expect(fn).toHaveBeenCalledTimes(1);
  jest.advanceTimersByTime(3000);
  expect(fn).toHaveBeenCalledTimes(2);
})