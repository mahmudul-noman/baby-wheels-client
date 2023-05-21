
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <div>
            <NavLink to={to} className={({ isActive }) => isActive ? "text-pink-600 font-bold tracking-wider" : ""}>
                {children}
            </NavLink>
        </div>
    );
};

export default ActiveLink;