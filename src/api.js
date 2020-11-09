import axios from "axios";

class API {
   constructor(base_url) {
      this.base_url = base_url;
   }
   get = async (path) => {
      const response_data = await axios.get(`${this.base_url}\\${path}`);
      return response_data;
   };

   post = async (path, data) => {
      const response_data = await axios.post(`${this.base_url}${path}`, data);
      return response_data;
   };

   patch = async (path, data) => {
      const response_data = await axios.patch(
         `${this.base_url}\\${path}\\${data}`
      );
      return response_data;
   };

   delete = async (path, data) => {
      const response_data = await axios.delete(`${this.base_url}\\${path}`);

      return response_data;
   };
}

const api = new API("http://127.0.0.1:8080");

export default api;
