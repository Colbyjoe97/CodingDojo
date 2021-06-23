import React from 'react';
import { Link } from '@reach/router';

const HomePage = (props) => {
    return(
        <div class="text-center">
            <h1 class="text-center">Welcome</h1>
            <Link to="/">Go back</Link>
        </div>
    )
}

export default HomePage