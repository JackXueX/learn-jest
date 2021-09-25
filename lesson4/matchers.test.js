test('测试10与10相匹配', () => {
  // toBe匹配器 object.is ===
  expect(10).toBe(10);
});

test('测试对象内容相等', () => {
  // toEqual 匹配器
  const a = {one: 1};
  expect(a).toEqual({ one: 1 });
});

test('测试null', () => {
  // toBeNull 匹配器
  const a = null;
  expect(a).toBeNull();
});

test('测试undefined', () => {
  // toBeUndefined 匹配器
  const a = undefined;
  expect(a).toBeUndefined();
});

test('toBeDefined 匹配器', () => {
  const a = '123';
  expect(a).toBeDefined();
});

test('toBeTruthy 匹配器', () => {
  // const a = null; passed
  const a = 1;
  expect(a).toBeTruthy();
});

test('toBeFalsy 匹配器', () => {
  // const a = null; passed
  const a = 0;
  expect(a).toBeFalsy();
});

test('not 匹配器', () => {
  // const a = null; passed
  const a = 1;
  expect(a).not.toBeFalsy();
});

// 数字相关的匹配器
// >
test('toBeGreaterThan', () => {
  const count = 10; 
  expect(count).toBeGreaterThan(9); // passed
});

// <
test('toBeLessThan', () => {
  const count = 10; 
  expect(count).toBeLessThan(11); // passed
});

// >=
test('toBeGreaterThanOrEqual', () => {
  const count = 10; 
  expect(count).toBeGreaterThanOrEqual(10); // passed
});

// <=
test('toBeLessThanOrEqual', () => {
  const count = 10; 
  expect(count).toBeLessThanOrEqual(11); // passed
});

// String
test('toMatch', () => {
  const str = 'http://www.dell-lee.com'  
  // expect(str).toMatch('dell-lee.com'); // passed
  expect(str).toMatch(/dell/); // 正则也能通过
});

// Array Set
test('toContain', () => {
  const arr = ['dell', 'lee', 'imock'];
  const data = new Set(arr);
  expect(data).toContain('dell', 'imock'); // passed
})

// 异常
const throwNewErrorFunc = () => {
  throw new Error('this is a new error');
}
// test('toThrow', () => {
//   expect(throwNewErrorFunc).not.toThrow(); // failed
// })

// test('toThrow', () => {
//   expect(throwNewErrorFunc).toThrow('this is a new error'); // passed
// })

test('toThrow', () => {
  expect(throwNewErrorFunc).toThrow(); // passed
})



