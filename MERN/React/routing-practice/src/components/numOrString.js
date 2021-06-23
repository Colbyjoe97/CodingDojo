import React from 'react';
import { Link } from '@reach/router';

const NumOrStringPage = (props) => {
    if(isNaN(props.input) == false)
    {
        var msg = `Number is ${props.input}`
    }
    else
    {
        var msg = `String is ${props.input}`
    }

    return(
        <div>
            <h1>{msg}</h1>
            <Link to="/">Go back</Link>
        </div>
    )
}

export default NumOrStringPage;