import React from 'react';
import { Link } from '@reach/router';

const StyledPage = (props) => {
    if(isNaN(props.str) == true)
    {
        return(
            <div>
                <h1 style={{backgroundColor: props.col2, color: props.col1}}>{props.str}</h1>
                <Link to="/home">Click to go to Home Page</Link>
            </div>
        )
    }
    else
    {
        return(
            <div>
                <h1>Input was not a word</h1>
                <Link to="/home">Click to go to Home Page</Link>
            </div>
            )
    }
}

export default StyledPage;