import React, { useState } from 'react';

const Person = props => {
    const [state, setState] = useState({
        age: props.age
    })
    const {firstName, lastName, hairColor, img} = props;
    const addAge = () => {
        console.log(`Just made ${firstName} ${lastName} 1 year older`)
        setState({ age: state.age += 1})
    }
    return(
        <div className="card">
            <div className="card-body">
                <h1>Name: { firstName } { lastName }</h1>
                <h3>Age: { state.age }</h3>
                <h3>Hair Color: { hairColor }</h3>
                <button className="btn btn-primary" onClick={ addAge }>Increase {firstName}'s Age</button>
            </div>
        </div>)
}

export default Person;