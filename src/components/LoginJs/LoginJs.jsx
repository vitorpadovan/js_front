import { useState } from "react";
import Form from "react-bootstrap/Form";
import loginService from "../../services/LoginService";
import ModalJs from "../ModalJs/ModalJs";

function LoginJs(props) {
  const [loginForm, setLoginForm] = useState();
  const confirmAction = () => {
    loginService
      .Logar(loginForm)
      .then((e) => {
        sessionStorage.setItem("TOKEN", e.headers.authorization);
        props.setToken(e.headers.authorization);
        props.setAtivo(false);
      })
      .catch((e) => {
        sessionStorage.removeItem("TOKEN");
        props.setToken(null);
        try {
          console.log(e.response.data.message);
        } catch {}
      });
  };
  return (
    <ModalJs
      title="login"
      ativo={props.ativo}
      setAtivo={props.setAtivo}
      cancelButton="Cancelar"
      confirmButton="Logar"
      confirmAction={confirmAction}
    >
      <Form.Label htmlFor="login">Login</Form.Label>
      <Form.Control
        type="text"
        id="login"
        onChange={(e) => {
          setLoginForm({ ...loginForm, login: e.target.value });
        }}
      />
      <br />
      <br />
      <Form.Label htmlFor="inputPassword5">Senha</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        onChange={(e) => {
          setLoginForm({ ...loginForm, senha: e.target.value });
        }}
      />
    </ModalJs>
  );
}

export default LoginJs;
