import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router'

const DisplayStudent = (props) => {

    const [student, setStudent] = useState({})

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/students/${props.id}`)
            .then(res => {
                console.log("Response from viewing 1: ", res)
                setStudent(res.data.results)
            })
            .catch(err => {
                console.log("Errors from viewing 1: ", err)
            })
    }, [])


    return (
        <div>
            <h1>Info about {student.firstName} {student.lastName} </h1>
            <p>{student.nickName? `Also known as: ${student.nickName}`: ""}</p>
            <p>{student.graduationDate}</p>
            <p>{student.beltLevel}</p>
            <p>{student.isVeteran? "Veteran": "Non-Veteran"}</p>
            <p>{student.isPartTime? "Part-Time": "Full-Time"}</p>
            <img src={student.imageUrl} alt="" height="100px"/>
        </div>
    )
}

export default DisplayStudent