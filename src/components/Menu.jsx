import "./menu.css";
import { Link } from "react-router-dom";
export default function Menu(){
    return(
        <div className="menu">

            <nav className="menu">
                <Link to="/sobre" className="menu">SOBRE</Link>
            </nav>

            <nav className="menu">
                <Link to="/projetos" className="menu">PROJETOS</Link>
            </nav>

            <nav className="menu">
                <Link to="/contatos" className="menu">CONTATOS</Link>
            </nav>
            
        </div>
    )
}