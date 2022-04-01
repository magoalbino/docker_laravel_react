import axios from "axios";

let host = 'http://localhost:8000/api';

/*
 * Só pro ambiente local, para testar no celular
 */
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  // true for mobile device
  host = "http://172.28.128.1:3000/api"; //8080/api
}

export const api = axios.create({
  baseURL: host,
});

/*
 * Axios
 * https://axios-http.com/
 * */
