
const Footer = () => {
    return (
        <>
            <div className="container-fluid">
                <footer className="py-3 my-4 bg-black" data-bs-theme="dark">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><Link to="/inicio" href="#" className="nav-link px-2">Inicio</Link></li>
                        <li className="nav-item"><Link to="/licor/Brandy/1" href="#" className="nav-link px-2">Brandy</Link></li>
                        <li className="nav-item"><Link to="/licor/Gin/1" href="#" className="nav-link px-2">Gin</Link></li>
                        <li className="nav-item"><Link to="/licor/Rum/1" href="#" className="nav-link px-2">Rum</Link></li>
                        <li className="nav-item"><Link to="/licor/Tequila/1" href="#" className="nav-link px-2">Tequila</Link></li>
                        <li className="nav-item"><Link to="/licor/Vodka/1" href="#" className="nav-link px-2">Vodka</Link></li>
                        <li className="nav-item"><Link to="/licor/Whiskey/1" href="#" className="nav-link px-2">Whiskey</Link></li>
                        <li className="nav-item"><Link to="/licor/Beer/1" href="#" className="nav-link px-2">Beer</Link></li>
                    </ul>
                    <p className="text-center ">© 2024 Company, Dark Ghots Cocteles</p>
                </footer>
            </div>

        </>
    )
}

export default Footer