import "./projetos.css";
import projeto1 from "./imagens/galaxy-s5.png"
export default function Projetos(){
    return(
        <div className="conteudo">
            <h1 className="conteudo">PROJETOS</h1>
            
            <div className="texto">
            <p>Aqui está meus projetos:</p>
            </div>
            <div className="projetos">
                <div className="projeto1">
                <img className="galaxy" src={projeto1} alt="imagem do projeto app" />
                <a className="link" href="https://andersonsouzacardoso.github.io/App-producao/?#" target="_blank">Click aqui</a>
                </div>
            
            </div>
            

        </div>
        
    )
}