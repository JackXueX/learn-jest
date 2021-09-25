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
  expect(data).toContain('dell'); // passed
})

