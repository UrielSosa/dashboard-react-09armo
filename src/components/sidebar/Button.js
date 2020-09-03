import React from 'react';

const Button = ({icono, texto}) => {
    return (
        <li className="nav-item">
            <a className="nav-link" href="/">
                <i className={icono}></i>
                <span>{texto}</span>
            </a>
        </li>
    );
}


export default Button;