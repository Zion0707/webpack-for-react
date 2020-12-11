import React from 'react';
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <ul>
            <li>
                <Link to="/">首页</Link>
            </li>
            <li>
                <Link to="/list">列表</Link>
            </li>
        </ul>
    );
};

export default Slider;
