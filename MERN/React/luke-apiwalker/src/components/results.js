import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import img from './Obi_Wan.jpg';

const ResultPage = (props) => {

    const [peopleData, setPeopleData] = useState([])
    const [personData, setPersonData] = useState([])
    const [planetData, setPlanetData] = useState([])
    const [allPlanetData, setAllPlanetData] = useState([])
    const [type, setType] = useState(props.str)
    const [num, setNum] = useState(props.int)

        useEffect(() => {
            if(type == "People")
            {
                axios.get("https://swapi.dev/api/people")
                .then(starWarsPeople => {
                    console.log("***********")
                    console.log(starWarsPeople.data.results)
                    console.log("***********")
                    setPersonData(starWarsPeople.data.results[num])
                    setPeopleData(starWarsPeople.data.results)
                })
                .catch(err => {
                    console.log(err)
                })
            }
            else
            {
                axios.get("https://swapi.dev/api/planets")
                .then(starWarsPlanets => {
                    console.log("***********")
                    console.log(starWarsPlanets.data.results)
                    console.log("***********")
                    setPlanetData(starWarsPlanets.data.results[num])
                    setAllPlanetData(starWarsPlanets.data.results)
                })
                .catch(err => {
                    console.log(err)
                })
            }
        }, []);

        const logAll = (e) => {
            e.preventDefault()
            console.log(num)
            console.log(type)
        }
    if(num > 9)
    {
        return(
            <div>
                <h1>These are not the droids you are looking for</h1>
                <img src={img}></img><br></br>
                <Link to="/">Go Home</Link>
            </div>
        )
    }
    else if(type == "People")
    {
        return(
            <div>
                <h1 className="mt-4">Name: {personData.name}</h1>
                <h5>Height: {personData.height}</h5>
                <h5>Weight: {personData.mass}</h5>
                <h5>Hair Color: {personData.hair_color}</h5>
                <h5>Skin Color: {personData.skin_color}</h5>
                <Link to="/">Go Home</Link>
                <div className="mt-5">
                    <button onClick={logAll} className="btn btn-secondary">Get Info</button>
                </div>
            </div>
        )
    }
    else if(type == "Planets")
    {
        return(
            <div>
                <h1 className="mt-4">Name: {planetData.name}</h1>
                <h5>Rotational Period: {planetData.rotation_period}</h5>
                <h5>Orbital Period: {planetData.orbital_period}</h5>
                <h5>Diameter: {planetData.diameter}</h5>
                <h5>Climate: {planetData.climate}</h5>
                <h5></h5>
                <h5></h5>
                <h5></h5>
                <Link to="/">Go Home</Link>
                <div className="mt-5">
                    <button onClick={logAll} className="btn btn-secondary">Get Info</button>
                </div>
            </div>
        )
    }
}

export default ResultPage