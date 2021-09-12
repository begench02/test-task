import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export function Header() {
    return (
        <div className='header_main_block'>
            <Link to='converter' className='header_text'>Конвертация валют </Link>
            <Link to='livecurrency' className='header_text'>Текущие курсы валют</Link>
        </div>
    );
}