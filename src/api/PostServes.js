import axios from "axios";
export default class PostServes {
  static async getAll(limit = 10, page = 1) {
    try {
      let response =await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(response.data);
      return response;
    }
    catch(e){
        console.log(e);
    }
  }
}
