import "./projetos.css";
import projeto1 from "./imagens/galaxy-s5.png"
import projeto2 from "./imagens/tv1984.png"
export default function Projetos(){
    return(
        <div className="conteudo">
            <h1 className="conteudo">PROJETOS</h1>
            
            <div className="texto">
            <p>Aqui estão meus projetos:</p>
            </div>
            <div className="projetos">
                <div className="projeto1">
                <img className="galaxy" src={projeto1} alt="imagem do projeto app" />
                <a className="link" href="https://andersonsouzacardoso.github.io/App-producao/?#" target="_blank">Click Aqui</a>
                
                </div>
                <div className="projeto2">
                    <img className="Tv" src={projeto2} alt="imagem da tv retro" />
                    <a  className="link"href="https://andersonsouzacardoso.github.io/TV-Retro-1984/tv1984.html" target="_blank">Clique Aqui</a>
                    
                </div>
            
            </div>
            

        </div>
        
    )
}