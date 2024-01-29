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
                <hr width ="299px"/>
                <p className="description">Um aplicativo que tem como função auxiliar no trabalho de produção do profissional da área de pizzaria, Masseiro/Pizzaiolo.
                 Essa ferramenta faz o planejamento da produção do dia, indica quais produtos serão confeccionados e os números de espaços ou carrinhos de massa serão ultilizados.</p>
                <a className="link" href="https://andersonsouzacardoso.github.io/App-producao/?#" target="_blank">Clique Aqui</a>
                
                </div>
                <div className="projeto2">
                    <img className="Tv" src={projeto2} alt="imagem da tv retro" />
                    <hr width ="299px"/>
                    <p className="description">Este foi um projeto criado para praticar meus estudos em CSS e Javascript.
                    Desafios: Usar o flebox para alinhar e organizar telas e botões com CSS e usar Funções e eventos de clique,
                    para que o Javascript possa dar vida ao projeto.</p>
                    <h5>MANUAL DA TV</h5>
                    <ol>
                    <li className="manual">Aperte o botão ON</li>
                    <li className="manual">Passe os canais apertando os botões 12, 10, 07, 05, 04</li>
                    <li className="manual">Aumente e diminua o volume da TV</li>
                    <li className="manual">desligue a TV com o botão OFF</li>
                    </ol>
                    
                    <a  className="link"href="https://andersonsouzacardoso.github.io/TV-Retro-1984/tv1984.html" target="_blank">Clique Aqui</a>
                    
                </div>
            
            </div>
            

        </div>
        
    )
}