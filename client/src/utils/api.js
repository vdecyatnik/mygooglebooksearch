import axios from "axios";



const API = {
   
  getBooks: function(search) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${search}`);

  },
        
        
  async addBook (book) {



      return axios.post("/api/books", book );


  }


    };








export default API;