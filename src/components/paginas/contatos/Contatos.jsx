import "./contatos.css";
import whatsapp from "./icone/icons8-whatsapp-48.png";
import github from "./icone/icons8-github-60.png"
import linkedin from "./icone/icons8-linkedin-48.png"
import arquivo from "./icone/icons8-arquivo-48.png"
export default function Contatos(){
    return(
        <div className="conteudo">
            <h1 className="conteudo">CONTATOS</h1>
            <div className="texto">
                <img src={github} alt="logo do github" /> <a className="link" href="https://github.com/andersonsouzacardoso" target="_blank">Meu Github</a><br />
                <br /><br /><img src={linkedin} alt="logo do linkedin" /><a className="link" href="https://www.linkedin.com/in/anderson-souza-169461264/" target="_blank">Meu LinkedIn</a><br />
                <br /><br /><img src={arquivo} alt="" /><a className="link" href="https://drive.google.com/file/d/11unop47-2Zf4Bp4c26PTkMpvxwMewj2J/view?usp=sharing" target="_blank">Meu Currículo</a>
                <br /> <br /><img src={whatsapp} alt="logo do whats" />(51) 98050-9482
            </div>   
        </div>
        
    )
}