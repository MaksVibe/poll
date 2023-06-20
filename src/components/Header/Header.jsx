import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import './Header.css';

export default function Header() {
    return (
        <header>
            <Container>
                <Link to={'/'}>Poll center</Link>
            </Container>
        </header>
    );
}
