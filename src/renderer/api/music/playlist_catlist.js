import axios from '../axios';

export default function () {
  const require = new Promise((resolve, reject) => {
    axios.get('/playlist/catlist').then((data)=> {
      resolve(data.data);
    });
  });
  return require;
}
