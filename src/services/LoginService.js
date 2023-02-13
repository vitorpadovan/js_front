import Axios from "axios";

const loginService = {};

loginService.Logar = (loginForm) => {
  return Axios.post("http://localhost:8080/login", loginForm);
};
export default loginService;
