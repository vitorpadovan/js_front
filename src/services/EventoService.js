import Axios from "axios";

const eventoService = {};

eventoService.SaveEvento = (evento) => {
  console.log("Enviando: " + evento);
  var bodyFormData = new FormData();
  bodyFormData.append("nomeEvento", evento.nomeEvento);
  bodyFormData.append("file", evento.file);
  return Axios.post("http://localhost:8080/api/evento", bodyFormData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export default eventoService;
