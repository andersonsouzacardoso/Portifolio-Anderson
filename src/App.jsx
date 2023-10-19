import "./global.css";
import Barra from "./components/barra-do-topo/Barra.";
import Banner from "./components/banner/Banner";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Sobre from "./components/paginas/sobre/Sobre";
import Projetos from "./components/paginas/projetos/Projetos";
import Contatos from "./components/paginas/contatos/Contatos";
import { Routes, Route } from "react-router-dom";



export default function App() {
  return (
    <div className="App">
      <Barra/>
      <Banner/>
      <Body>
        <Menu/>
        <Routes>
          <Route path="sobre" element={<Sobre/>}/>
          <Route path="projetos" element={<Projetos/>}/>
          <Route path="contatos" element={<Contatos/>}/>
        </Routes>
      </Body>
      <Footer/>
    </div>
  );
}


