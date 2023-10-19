import "./banner.css"
import programador from"../paginas/contatos/icone/programador.png"
export default function Banner(){
    return(
        <div className="apresentacao">
            <center className="apresentacao">Anderson Souza Front-End</center>

                <div className="apresentacao">
                    <img className="apresentacao" src={programador} alt="icone de topo" />
                </div>
        </div>
    )
}