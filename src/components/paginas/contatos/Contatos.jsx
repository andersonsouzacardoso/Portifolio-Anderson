import "./contatos.css";
import whatsapp from "./icone/icons8-whatsapp-48.png";
export default function Contatos(){
    return(
        <div className="conteudo">
            <h1 className="conteudo">CONTATOS</h1>
            <div className="texto">
            <p>E-mail: andersonfdl@gmail.com</p>
            <a href="https://github.com/andersonsouzacardoso" target="_blank">Meu Github</a>
            <a href="https://www.linkedin.com/in/anderson-souza-169461264/" target="_blank">Meu LinkedIn</a><br />
            
           <br /> <br /><img src={whatsapp} alt="logo do whats" /> 98050-9482
            </div>
            

        </div>
        
    )
}