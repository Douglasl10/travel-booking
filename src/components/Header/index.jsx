import { Link, useLocation } from "react-router-dom";
import { Wrap, Brand, Nav, NavLink } from "./styles";

const Header = () => {
    const location = useLocation()

    return (
        <Wrap>
            <Brand>✈️ Travel Booking</Brand>
            <Nav>
                <NavLink to="/" isActive={location.pathname === "/"}>
                    Home
                </NavLink>
                <NavLink to="/search">
                    Search
                </NavLink>
                <NavLink to="/booking">
                    My Bookings
                </NavLink>
            </Nav>
        </Wrap>
        
    )
}

export default Header
