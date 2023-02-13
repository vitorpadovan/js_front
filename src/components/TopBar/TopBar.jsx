import { Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function TopBar(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Jovens Sarados</Navbar.Brand>
        <Nav className="me-auto">
          {props.sessoes.map((e, i) => {
            return (
              <Nav.Link key={e.id} href={e.link}>
                {e.name}
              </Nav.Link>
            );
          })}
        </Nav>
        <Form className="d-flex">{props.botaoLogin}</Form>
      </Container>
    </Navbar>
  );
}

export default TopBar;
