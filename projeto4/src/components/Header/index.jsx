import { Link } from "react-router-dom"
export default function Header() {
    return(
        <header className="header">
            <div className="container">Supermercado</div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/duvidas">Duvidas Frequentes</Link>
            </nav>
        </header>
    )
}
