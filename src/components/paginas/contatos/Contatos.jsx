import "./contatos.css";
import whatsapp from "./icone/icons8-whatsapp-48.png";
import github from "./icone/icons8-github-60.png"
import linkedin from "./icone/icons8-linkedin-48.png"
export default function Contatos(){
    return(
        <div className="conteudo">
            <h1 className="conteudo">CONTATOS</h1>
            <div className="texto">
                <img src={github} alt="logo do github" /> <a href="https://github.com/andersonsouzacardoso" target="_blank">Meu Github</a><br />
                <br /><br /><img src={linkedin} alt="logo do linkedin" /><a href="https://www.linkedin.com/in/anderson-souza-169461264/" target="_blank">Meu LinkedIn</a><br />
            
           <br /> <br /><img src={whatsapp} alt="logo do whats" />(51) 98050-9482
            </div>
            

        </div>
        
    )
}