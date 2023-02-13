import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import EuVou from "../EuVou/EuVou";

function EventoCard(props) {
  const [ativo, setAtivo] = useState(false);
  return (
    <div className="mw-25">
      <Card className="mx-3 my-3 p-2 border-0  shadow-lg bg-white rounded">
        <Card.Img
          variant="top"
          src={props.evento.img}
          className="shadow p-3 mb-5 bg-white rounded"
        />
        <Card.Body className="mw-25">
          <Card.Title>{props.evento.nome}</Card.Title>
        </Card.Body>
        <Card.Text>{props.evento.descricao}</Card.Text>
        <Row>
          <Col className="m-2">
            <Button variant="primary" className="w-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                class="bi bi-calendar-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z" />
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
              </svg>
            </Button>
          </Col>
          <Col className="m-2">
            <Button variant="primary" className="w-100">
              +1
            </Button>
          </Col>
          {!props.evento.saveTheDate ? (
            <Col className="m-2">
              <Button
                variant="primary"
                className="w-100"
                onClick={() => setAtivo(!ativo)}
              >
                Eu vou!
              </Button>
            </Col>
          ) : null}
        </Row>
      </Card>
      <EuVou ativo={ativo} setAtivo={setAtivo} data={props.evento.data} />
    </div>
  );
}

export default EventoCard;
