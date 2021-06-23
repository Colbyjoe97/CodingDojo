import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router'

const Dashboard = () => {

    const [students, setStudents] = useState([])
    const [someoneLeveledUp, setSomeoneLeveledUp] = useState(false)

    useEffect(() => {
        Axios.get("http://localhost:8000/api/students")
            .then(response => {
                console.log("************", response)
                setStudents(response.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [someoneLeveledUp])

    const levelUp = (e, student, beltColor)=> {
        console.log(`${student.firstName} is leveling up to a ${beltColor} belt!`, student)
        Axios.put(`http://localhost:8000/api/students/update/${student._id}`, {beltLevel: beltColor})
            .then(res => {
                console.log("Response on update: ", res)
                setSomeoneLeveledUp(true)
            })
            .catch(err => {
                console.log("Error on update: ", err)
            })
    }

    return (
        <div>
            <h3>Here are all the Ninjas</h3><br></br>
            <div className="row">
                <div className="col-4">
                    <h3>Yellow Belters</h3>
                    {students.filter((student, i) => {
                            return student.beltLevel.toLowerCase() === "yellow"
                        }).map((student, i) => {
                            return (
                                <div className="card" style={{backgroundColor: "yellow"}} key={i}>
                                    <div className="card-body">
                                        <h4 className="card-title"><Link to={`/students/info/${student._id}`}>{student.firstName} {student.lastName}</Link></h4>
                                        <p>Graduation Date: {student.graduationDate}</p>
                                        <p>Belt Level: {student.beltLevel}</p>
                                        <button className="btn btn-danger" onClick={(e)=>levelUp(e, student, "red")}>Earn Red Belt</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="col-4">
                    <h3>Red Belters</h3>
                    {students.filter((student, i) => {
                            return student.beltLevel.toLowerCase() === "red"
                        }).map((student, i) => {
                            return (
                                <div className="card" style={{backgroundColor: "red", color: "white"}} key={i}>
                                    <div className="card-body">
                                        <h4 className="card-title"><Link to={`/students/info/${student._id}`}>{student.firstName} {student.lastName}</Link></h4>
                                        <p>Graduation Date: {student.graduationDate}</p>
                                        <p>Belt Level: {student.beltLevel}</p>
                                        <button className="btn btn-dark" onClick={(e)=>levelUp(e, student, "black")}>Earn Black Belt</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="col-4">
                    <h3>Black Belters</h3>
                    {students.filter((student, i) => {
                            return student.beltLevel.toLowerCase() === "black"
                        }).map((student, i) => {
                            return (
                                <div className="card" style={{backgroundColor: "black", color: "white"}} key={i}>
                                    <div className="card-body">
                                        <h4 className="card-title"><Link to={`/students/info/${student._id}`}>{student.firstName} {student.lastName}</Link></h4>
                                        <p>Graduation Date: {student.graduationDate}</p>
                                        <p>Belt Level: {student.beltLevel}</p>
                                        <button className="btn btn-success" onClick={(e)=>levelUp(e, student, "alumni")}>Graduate</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="col-4">
                    <h3>Alumni</h3>
                    {students.filter((student, i) => {
                            return student.beltLevel.toLowerCase() === "alumni"
                        }).map((student, i) => {
                            return (
                                <div className="card" style={{backgroundColor: "green", color: "white"}} key={i}>
                                    <div className="card-body">
                                        <h4 className="card-title"><Link to={`/students/info/${student._id}`}>{student.firstName} {student.lastName}</Link></h4>
                                        <p>Graduation Date: {student.graduationDate}</p>
                                        <p>Belt Level: {student.beltLevel}</p>
                                        <button className="btn btn-success" onClick={(e)=>levelUp(e, student, "yellow")}>Graduate</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Dashboard