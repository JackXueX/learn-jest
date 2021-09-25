import { generateConfig, generateAnotherConfig } from "./demo";

// test('测试 generateConfig 函数', () => {
//   // expect(generateConfig()).toEqual({
//   //   server: 'http://localhost',
//   //   port: 8000,
//   //   domain: 'localhost'
//   // });

//   expect(generateConfig()).toMatchSnapshot({
//     time: expect.any(Date)
//   });
// });

// test('测试 generateAnotherConfig 函数', () => {
//   expect(generateAnotherConfig()).toMatchSnapshot({
//     time: expect.any(Date)
//   });
// });

test("测试 generateAnotherConfig 函数", () => {
  expect(generateAnotherConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date)
    },
    `
    Object {
      "domain": "localhost",
      "port": 8000,
      "server": "http://localhost2",
      "time": Any<Date>,
    }
  `
  );
});

test("测试 generateAnotherConfig 函数", () => {
  expect(generateAnotherConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date)
    },
    `
    Object {
      "domain": "localhost",
      "port": 8000,
      "server": "http://localhost2",
      "time": Any<Date>,
    }
  `
  );
});
