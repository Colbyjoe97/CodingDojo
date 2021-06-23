import React from 'react';
import { Link } from '@reach/router';

const DefaultPage = (props) => {
    return(
        <div class="text-center">
            <h1>Default Page</h1>
            <Link to="/home">Click to go to Home Page</Link>
        </div>
    )
}

export default DefaultPage