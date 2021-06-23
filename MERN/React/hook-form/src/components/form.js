import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password}
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };
    const msg = () => {
        if(hasBeenSubmitted) {
            return "Form has been submitted!"
        }
        else {
            return "Please submit the form"
        }
    }
    const firstNameError = () => {
        if(firstName.length > 0 && firstName.length < 2) {
            return "First name must be at least 2 characters long"
        }
    }
    const lastNameError = () => {
        if(lastName.length > 0 && lastName.length < 2) {
            return "Last name must be at least 2 characters long"
        }
    }
    const emailError = () => {
        if(email.length > 0 && email.length < 5) {
            return "Email must be at least 5 characters long"
        }
    }
    const passwordError = () => {
        if(password.length > 0 && password.length < 8) {
            return "Password must be at least 8 characters long"
        }
    }
    const confirmPasswordError = () => {
        if(confirmPassword.length > 0 && confirmPassword !== password) {
            return "Passwords do not match"
        }
    }
    return(
        <>
            <div className="card col-5">
                <div className="card-body">
                    <h3>{msg()}</h3>
                    <h1 className="card-title text-center">Create User</h1>
                    <form onSubmit={ createUser }>
                        <div>
                            <label>First Name: </label>
                            <input className="form-control" type="text" onChange={ (e) => setFirstName(e.target.value) } />
                            <p style={{color: "red"}}>{firstNameError()}</p>
                        </div>
                        <div>
                            <label>Last Name: </label>
                            <input className="form-control" type="text" onChange={ (e) => setLastName(e.target.value) } />
                            <p style={{color: "red"}}>{lastNameError()}</p>
                        </div>
                        <div>
                            <label>Email: </label>
                            <input className="form-control" type="text" onChange={ (e) => setEmail(e.target.value) } />
                            <p style={{color: "red"}}>{emailError()}</p>
                        </div>
                        <div>
                            <label>Password: </label>
                            <input className="form-control" type="text" onChange={ (e) => setPassword(e.target.value) } />
                            <p style={{color: "red"}}>{passwordError()}</p>
                        </div>
                        <div>
                            <label>Confirm Password: </label>
                            <input className="form-control" type="text" onChange={ (e) => setConfirmPassword(e.target.value) } />
                            <p style={{color: "red"}}>{confirmPasswordError()}</p>
                        </div>
                        <div>
                            <input className="btn-success mt-3" type="submit" value="Create User"></input>
                        </div>
                    </form>
                </div>
                <div className="card">
                    <div className="card-title">
                        <h3>Name: {firstName} {lastName}</h3>
                    </div>
                    <h6>Email: {email}</h6>
                    <h6>Password: {password}</h6>
                </div>
            </div>
        </>
    )
};

export default UserForm;