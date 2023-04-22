import "./style.css"

import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header>

            <NavLink to="/me">
                <p>
                    me
                </p>
            </NavLink>


            <NavLink to="./">
                <p>
                    home
                </p>
            </NavLink>


            <NavLink to="/mywork">
                <p>
                    mywork
                </p>
            </NavLink>
        </header>
    );
}

export default Header;