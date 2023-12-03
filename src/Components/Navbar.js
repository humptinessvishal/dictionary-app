import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="nav">
            <h1>Dictionary App</h1>
            <div>
                <NavLink to="/"> Home </NavLink>
                <NavLink to="/history"> History </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;