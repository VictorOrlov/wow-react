export function PostData(type, userData) {

  const BaseUrl = 'https://api.thewallscript.com/restful/';

  return new Promise((resolve, reject) => {

    fetch(BaseUrl+ type,{
      method: 'POST',
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

// 'https://api.thewallscript.com/restful/'
// 'https://mywebsite.com/endpoint/'