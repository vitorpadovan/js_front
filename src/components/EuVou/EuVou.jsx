import { Form } from "react-bootstrap";
import ModalJs from "../ModalJs/ModalJs";
function EuVou(props) {
  return (
    <ModalJs
      ativo={props.ativo}
      setAtivo={props.setAtivo}
      title="Eu vou nessa bagaça"
      cancelButton="Não tenho coragem para ir"
      confirmButton="Let's Bora"
    >
      <h4>
        Confirmo minha presença na data de {props.data} que será um dia
        incrível!
      </h4>
      <Form.Label htmlFor="nome">Nome</Form.Label>
      <Form.Control type="text" id="nome" />
      <br />
      <Form.Label htmlFor="whatsapp">Whatsapp</Form.Label>
      <Form.Control type="text" id="whatsapp" />
      <br />
      <Form.Label htmlFor="instagram">Instagram</Form.Label>
      <Form.Control type="text" id="instagram" />
    </ModalJs>
  );
}

export default EuVou;
