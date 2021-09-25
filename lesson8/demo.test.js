import { runCallback } from './demo';

test('测试 runCallback', () => {
  // const func = jest.fn(() => {
  //   return '456'
  // });
  const func = jest.fn();
  // func.mockReturnValueOnce('Dell');
  // func.mockReturnValueOnce('Lee');
  // func.mockReturnValueOnce('Hello');
  // func.mockReturnValue('Dell');
  // func.mockImplementation(() => {
  //   console.log('2345326456');
  //   return 'dell';
  // })
  // func.mockImplementationOnce(() => {
  //   return 'dell';
  // })

  // func.mockImplementationOnce(() => {
  //   return 'lee';
  // })

  // func.mockReturnThis(); 返回this

  runCallback(func);
  runCallback(func);
  runCallback(func);
  // expect(func).toBeCalled();
  // expect(func.mock.calls.length).toBe(3);
  // expect(func.mock.calls[0]).toEqual(['abc']);
  // expect(func.mock.results[0].value).toBe('Dell');
  console.log(func.mock);
})