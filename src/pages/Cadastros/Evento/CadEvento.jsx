import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import eventoService from "../../../services/EventoService";

function CadEvento(props) {
  const [evento, setEvento] = useState({});
  return (
    <div className="p-3">
      <Form.Group className="mb-3">
        <Form.Label>Nome do evento</Form.Label>
        <Form.Control
          type="text"
          id="NomeEvento"
          onChange={(e) => {
            setEvento({ ...evento, nomeEvento: e.target.value });
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Descrição</Form.Label>
        <Form.Control type="text" id="descricaoEvento" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control
          type="file"
          onChange={(e) => {
            setEvento({ ...evento, file: e.target.files[0] });
          }}
        />
      </Form.Group>
      <Button
        onClick={() => {
          console.log(evento);
          eventoService.SaveEvento(evento).then((e) => {
            console.log("vitor");
            console.log(e);
          });
        }}
      >
        Teste
      </Button>
    </div>
  );
}

export default CadEvento;
