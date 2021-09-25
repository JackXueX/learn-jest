jest.mock('./demo'); // 如果jest.config.js里面的automock: true,则不必写jest.mock
// jest.unmock('./demo');
import { fetchData } from "./demo";
const {getNumber} = jest.requireActual('./demo');
// import Axios from 'axios';

// jest.mock('axios');

// test('fetchData 测试', () => {
//   Axios.get.mockResolvedValue({
//     data: "(function() {return '123'})()"
//   })

//   return fetchData().then(data => {
//     expect(eval(data)).toEqual('123');
//   })
// });

test('fetchData 测试', () => {
  return fetchData().then(data => {
    expect(eval(data)).toEqual('123');
  })
});

test('getNumber 测试', () => {
  expect(getNumber()).toEqual(123);
}); 