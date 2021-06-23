import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';

const Search = () => {
    const [peopleData, setPeopleData] = useState([])
    const [personData, setPersonData] = useState([])
    const [type, setType] = useState("People")
    const [num, setNum] = useState(0)

    const logAll = (e) => {
        e.preventDefault()
        console.log(num)
        console.log(type)
    }

    return(
        <div className="mt-4">
            <select name="peopleList" onChange={ (e) => setType(e.target.value) }>
                <option value="People">People</option>
                <option value="Planets">Planets</option>
            </select>
            <p className="mt-3">ID: <input type="number" onChange={ (e) => setNum(e.target.value) }></input></p>
            <Link to={`${type}/${num}`}><button className="btn btn-success mb-10">Search</button></Link><br/>
            <div className="mt-5">
                <button onClick={logAll} className="btn btn-secondary">Get Info</button>
            </div>
        </div>
    )
}

export default Search