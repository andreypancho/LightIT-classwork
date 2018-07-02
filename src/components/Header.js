import React from 'react';
import Styles from './style.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom'


const Header = function() {
    return (
        <div className={Styles.header}>
            <ul>
                <li>Home</li>
                <li><Link to={'/movies'}>Movies</Link></li>
            </ul>
        </div>
    );
};


export default Header;