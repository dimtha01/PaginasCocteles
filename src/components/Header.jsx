import { Link } from "react-router-dom"
import logo from '../assets/logo.png'
import FiltroCategoriaTipo from "./FiltroCategoriaTipo"
import FiltroCategorias from "./FiltroCategorias"

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={logo} alt="" width={150} /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" href="#">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/licor/Brandy/1" className="nav-link" href="#">Brandy</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/licor/Gin/1" className="nav-link" href="#">Gin</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/licor/Rum/1" className="nav-link" href="#">Rum</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/licor/Tequila/1" className="nav-link" href="#">Tequila</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/licor/Vodka/1" className="nav-link" href="#">Vodka</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/licor/Whiskey/1" className="nav-link" href="#">Whiskey</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tipos
                                </a>
                                <ul className="dropdown-menu">
                                    <FiltroCategoriaTipo/>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </a>
                                <ul className="dropdown-menu">
                                    <FiltroCategorias/>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header