import React from 'react';
import { Link } from 'react-router-dom';
import './Error404Page.css';

export default function Error() {
    return (
        <div className='error_page_main_block'>
            <h1>Error 404. Redirect to <Link to='/converter' className='error_page_link'> Converter page </Link></h1>
        </div>
    );
}