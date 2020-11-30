let BaseUrl = 'https://toki.com.co';

// configuración de headers que no necesitan autenticación*
let headers = new Headers();
headers.append('secret', 'ykZGMDWOL5CyCzUbWcsRCNyKrytH2Ib-');

// configuración de headers que necesitan autenticación*
let headersAuth = new Headers();
const userToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsb2dpbiIsImRhdGEiOjE4NSwiaWF0IjoxNTczMTUzODQxLCJleHAiOjE1NzU3NDU4NDF9.U9khSEPMAoTvV6SNz4yePITuw_d5CRW8AK0QliFAgEg';
headersAuth.append('token', 'Bearer ' + userToken);
headersAuth.append('secret', 'ykZGMDWOL5CyCzUbWcsRCNyKrytH2Ib-');
headersAuth.append('Content-Type', 'application/json');

let get = {method: 'GET', headers: headers};
let getAuth = {method: 'GET', headers: headersAuth};
/*let post = {method: 'GET', headers: configBasicHeaders()};
let postAuth = {method: 'GET', headers: configTokenHeaders()}; */

function getProducts(path) {
  return fetch(`${BaseUrl}${path}`, get, {
    withCredentials: false,
  })
    .then(data => {
      return data.json();
    })

    .catch(console.log + 'error');
}

/* function getProducts() {
  return fetch(
    'https://toki.com.co/api/v1/branches?lat=5.053169&lng=-75.488128&page=1&limit=2',
    myInit,
  )
    .then(data => {
      return data.json();
    })
    .catch(console.log);
} */

export {getProducts};
