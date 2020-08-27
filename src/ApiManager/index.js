export function login(type, userData) {
  let baseUrl = "https://my-dsr.herokuapp.com/api/user/";
  return new Promise((resolve, reject, dispatch) => {
    console.log(userData, 'hhhhhhhhhh');
    fetch(baseUrl + type,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
      .then((response) => response.json())
      .then((responseJson) => {
        resolve(responseJson);

      })
      .catch((error) => {
        reject(error);
      });
  });
}