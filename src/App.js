import "./App.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import LoginJs from "./components/LoginJs/LoginJs";
import TopBar from "./components/TopBar/TopBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Eventos from "./pages/Eventos/Eventos";
import Missoes from "./pages/Missoes/Missoes";
import Musicas from "./pages/Musicas/Musicas";
import CadEvento from "./pages/Cadastros/Evento/CadEvento";

function App() {
  const [token, setToken] = useState(sessionStorage.getItem("TOKEN"));
  const [ativo, setAtivo] = useState(false);
  const baseSections = [
    { id: 1, widget: <Eventos />, link: "/", name: "Eventos" },
    { id: 2, widget: <Missoes />, link: "/missoes", name: "Missões" },
    { id: 3, widget: <Musicas />, link: "/musicas", name: "Musicas" },
  ];
  const sections = Logado()
    ? [
        ...baseSections,
        {
          id: 4,
          widget: <CadEvento />,
          link: "/cadastro/evento",
          name: "Cadastro de eventos",
        },
      ]
    : [...baseSections];

  function Logado() {
    return token !== null;
  }
  return (
    <Router>
      <TopBar
        sessoes={sections}
        ativarLogin={setAtivo}
        botaoLogin={
          token === null ? (
            <Button variant="primary" onClick={() => setAtivo(!ativo)}>
              Login
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => {
                sessionStorage.removeItem("TOKEN");
                setToken(null);
              }}
            >
              Logout
            </Button>
          )
        }
      />
      <LoginJs ativo={ativo} setAtivo={setAtivo} setToken={setToken} />
      <Routes>
        {sections.map((e, i) => {
          return <Route key={e.id} path={e.link} exact element={e.widget} />;
        })}
      </Routes>
    </Router>
  );
}

export default App;
