jest.mock('./util');
import Util from './util';

// const Util = jest.fn();
// Util.a = jest.fn();
// Util.b = jest.fn();

// jest.fn
// jest.mock 发现 util 是一个类，会自动把类的构造函数和方法变成 jest.fn()

import demoFunction from './demo';

test('测试 demoFunction', () => {
  demoFunction();

  expect(Util).toHaveBeenCalled();
  
  // console.log(Util.mock.instances[0]);

  expect(Util.mock.instances[0].a).toHaveBeenCalled();
  expect(Util.mock.instances[0].b).toHaveBeenCalled();

});