import axios from 'axios';

export default axios.create({
  //baseURL: `http://localhost:5000/myrobin-io/us-central1/`,
  baseURL: `https://us-central1-myrobin-io.cloudfunctions.net/`,
});
