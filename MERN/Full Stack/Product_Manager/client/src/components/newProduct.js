import React, { useState } from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router'

const NewProduct = () => {
    const [productDetails, setProductDetails] = useState({
        name:"",
        price:"",
        description:""
    })

    const [errors, setErrors] = useState({})


    const changeHandler = e => {
        setProductDetails({
            ...productDetails,
            [e.target.name]:e.target.value
        })
    }
    const submitHandler = e => {
        e.preventDefault()
        Axios.post('http://localhost:8000/api/product/create', productDetails)
            .then(res=> {
                console.log("Response: ", res)
                if(res.data.result) {
                    navigate('/')
                }
                else {
                    console.log("Submitted info is not valid")
                    setErrors(res.data.errors)
                }
            })
            .catch(err=>console.log("Errors: ", err))
            console.log("Created new product")
    }

    return (
        <div className="card col-4 mx-auto p-2">
            <form onSubmit={submitHandler}>
                <span className="text-danger">{errors.name? errors.name.message: ""}</span><br></br>
                <label>Name:</label>
                <input type="text" name="name" className="form-control" id="" onChange={changeHandler} /><br></br>

                <span className="text-danger">{errors.price? errors.price.message: ""}</span><br></br>
                <label>Price:</label>
                <input type="number" name="price" id="" className="form-control" onChange={changeHandler} /><br></br>

                <span className="text-danger">{errors.description? errors.description.message: ""}</span><br></br>
                <label>Description:</label>
                <input type="text" name="description" className="form-control" id="" onChange={changeHandler} /><br></br>

                <input type="submit" value="Submit Form" />
            </form>
        </div>
    )
}
export default NewProduct