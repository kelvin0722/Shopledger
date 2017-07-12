
 export default class ApiCalls{



    static getUsers(endpoint){
      return fetch(endpoint)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });


    }
}