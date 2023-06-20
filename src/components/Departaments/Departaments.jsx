import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import './Departaments.css';

export default function Departaments({ departs }) {
    return (
        <Container>
            <div className="techList">
                {departs.map((dep, index) => (
                    <NavLink
                        to={`/${dep}`}
                        key={index + 1}
                        id={dep}
                        className="button"
                    >
                        {dep}
                    </NavLink>
                ))}
            </div>
        </Container>
    );
}
