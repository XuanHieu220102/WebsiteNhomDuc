import axios from "axios";
// const token = localStorage.getItem('token')
const instance = axios.create({
    baseURL: "http://localhost:8080/api/v1/",
    timeout: 1000,
    headers: {"Content-Type": "application/json",}
  });
  
  // Can thiệp vào quá trình request lên server
  instance.interceptors.request.use(
    function (config) {
      // Xử lý trước khi request gửi lên
      const token = localStorage.getItem('token');
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }
      return config;
    },
    function (error) {
      // Xử lý khi request lỗi
      return Promise.reject(error);
    }
  );
  
  // Can thiệp vào quá trình server trả response về
  instance.interceptors.response.use(
    function (response) {
      // Xử lý response trả về
      return response;
    },
    function (error) {
      // Xử lý khi request lỗi
      return Promise.reject(error);
    }
  );

  export default instance;