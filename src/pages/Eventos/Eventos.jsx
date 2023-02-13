import EventoCard from "../../components/EventoCard/EventoCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Eventos1 } from "../../TempConst.js";
import { useState } from "react";
import { Form } from "react-bootstrap";
import "./Eventos.css";

function Eventos(props) {
  const eventos = Eventos1;
  const missoes = extrairMissoes(eventos);
  const [missaoSelecionada, setMissaoSelecionada] = useState(eventos);
  const linhas = missaoSelecionada.length / 4;
  return (
    <div className="teste123 bg-light">
      <Form.Select
        aria-label="Default select example"
        onChange={(value) => {
          var teste = eventos.filter((e) => {
            return e.missao === value.target.value;
          });
          console.log(teste);
          setMissaoSelecionada(teste);
        }}
      >
        {Object.keys(missoes).map((e, i) => {
          return <option value={e}>{e}</option>;
        })}
      </Form.Select>
      {Array.from({ length: Math.ceil(linhas) }).map((_, idxl) => (
        <Row key={idxl} className="justify-content-md-center">
          {Array.from({ length: 4 }).map((e, i) => {
            if (missaoSelecionada[idxl * 4 + i] === undefined) return "";
            else var evento = missaoSelecionada[idxl * 4 + i];
            return (
              <Col key={evento.id} className="mw-430">
                <EventoCard evento={evento} />
              </Col>
            );
          })}
        </Row>
      ))}
    </div>
  );
}

function extrairMissoes(lista) {
  require("core-js/actual/array/group-by");
  return lista.groupBy((evento) => evento.missao);
}
export default Eventos;
