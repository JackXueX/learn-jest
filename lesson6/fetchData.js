import axios from 'axios';

export const fetchData = (fn) => {
  axios.get('http://httpbin.org/get', {
    params: {
      name: 'coderwhy',
      age: 18
    }
  }).then((response) => {
    fn(response.data);
  })
}