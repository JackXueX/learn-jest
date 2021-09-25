import { fetchData } from './fetchData';

test("fetchData  返回结果为 { success: true } ", (done) => {
  fetchData((data) => {
    expect(data.args).toEqual({
      "age": "18", 
      "name": "'coderwhy'"
    });
    done();
  })
})

