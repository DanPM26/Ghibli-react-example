import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
    <div>
        <NavLink to='/inicio'> Inicio</NavLink>
        <NavLink to='/peliculas'> Peliculas</NavLink>
    </div>
    );
}

export default Navbar;