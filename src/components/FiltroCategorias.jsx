import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

const FiltroCategorias = () => {
    const [datos, setDatos] = useState([])
    const getDatos = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();
            //console.log(data)
            setDatos(data.drinks);

        } catch (error) {
            console.error(error)
        }
    };
    useEffect(() => {
        getDatos();
    }, []);
    return (
        <>
            {datos.map((item, index) => (

                <Link to={`/licor/${item.strCategory}/3`} key={index} className="dropdown-item" href="#">{item.strCategory}</Link>
            ))}
        </>
    )
}

export default FiltroCategorias