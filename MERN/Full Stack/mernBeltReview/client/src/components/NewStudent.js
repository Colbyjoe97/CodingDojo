import React, { useState } from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router'

const NewStudent = () => {

    const [student, setStudent] = useState({
        firstName: "",
        lastName: "",
        nickName: "",
        imageUrl: "",
        graduationDate: "",
        isVeteran: false,
        isPartTime: false
    })

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        imageUrl: "",
        graduationDate: ""
    })

    const changeHandler = e => {
        console.log("Typing some inputs on ", e.target.name)
        if(e.target.type === "checkbox") {
            setStudent(({
                ...student,
                [e.target.name]: e.target.checked
            }))
        }
        else {
            setStudent({
                ...student,
                [e.target.name]: e.target.value
            })
        }
    }

    const submitHandler = e => {
        e.preventDefault()
        Axios.post("http://localhost:8000/api/students/create", student)
            .then(res => {
                if(res.data.results) {
                    navigate("/")
                }
                else {
                    console.log(res)
                    console.log("Form info is not valid")
                    console.log(res.data.errors)
                    setErrors(res.data.errors)
                }
            })
            .catch(err => {
                console.log("Errors on submit: ", err)
            })
        }
    return (
        <div>
            <h1 className="text-center">Enroll a student</h1>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <span className="text-danger">{errors.firstName? errors.firstName.message : ""}</span><br></br>
                    <label>First Name:</label>
                    <input type="text" className="form-control" name="firstName" onChange={changeHandler}/><br></br>

                    <span className="text-danger">{errors.lastName? errors.lastName.message : ""}</span><br></br>
                    <label>Last Name:</label>
                    <input type="text" className="form-control" name="lastName" onChange={changeHandler}/><br></br>

                    <label>Nickname:</label>
                    <input type="text" className="form-control" name="nickName" onChange={changeHandler}/><br></br>

                    <span className="text-danger">{errors.imageUrl? errors.imageUrl.message : ""}</span><br></br>
                    <label>Picture:</label>
                    <input type="text" className="form-control" name="imageUrl" onChange={changeHandler}/><br></br>

                    <span className="text-danger">{errors.graduationDate? errors.graduationDate.message : ""}</span><br></br>
                    <label>Graduation Date:</label>
                    <input type="date" className="form-control" name="graduationDate" onChange={changeHandler}/><br></br>

                    <label>Veteran:</label>
                    <input type="checkbox" className="ml-2 mr-5" name="isVeteran" onChange={changeHandler}/>

                    <label>Part Time:</label>
                    <input type="checkbox" className="ml-2" name="isPartTime" onChange={changeHandler}/><br></br>

                    <div className="text-center">
                        <input className="btn btn-success" type="submit" value="Create Student" />
                    </div>

                </div>
            </form>
        </div>
    )
}
export default NewStudent