import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const Nav = () => {
    return (
        <ul className="nav-list">
            <li>
                <Link to="/" exact>
                    首页
                </Link>
            </li>
            <li>
                <Link to="/list/list">列表</Link>
            </li>
            <li>
                <Link to="/bbbb">404页面</Link>
            </li>
        </ul>
    );
};

export default Nav;
