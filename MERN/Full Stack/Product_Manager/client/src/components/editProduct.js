import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router'

const EditProduct = (props) => {
    console.log(props)
    const [productDetails, setProductDetails] = useState({
        name:"",
        price:"",
        description:""
    })

    const [errors, setErrors] = useState({})

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/product/${props.id}`)
            .then(res => {
                console.log("Response from one product: ", res)
                setProductDetails(res.data.result)
            })
            .catch(err => {
                console.log("Errors from one product: ", err)
            })
    }, [])

    const changeHandler = e => {
        setProductDetails({
            ...productDetails,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        Axios.put(`http://localhost:8000/api/product/update/${props.id}`, productDetails)
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
    }

    return(
        <>
            <h1>Edit A Product</h1>
            <div className="card col-4 mx-auto p-2">
                <form onSubmit={submitHandler}>
                    <span className="text-danger">{errors.name? errors.name.message: ""}</span><br></br>
                    <label>Name:</label>
                    <input type="text" name="name" className="form-control" id="" onChange={changeHandler} value={`${productDetails.name}`}/><br></br>

                    <span className="text-danger">{errors.price? errors.price.message: ""}</span><br></br>
                    <label>Price:</label>
                    <input type="number" name="price" id="" className="form-control" onChange={changeHandler} value={`${productDetails.price}`}/><br></br>

                    <span className="text-danger">{errors.description? errors.description.message: ""}</span><br></br>
                    <label>Description:</label>
                    <input type="text" name="description" className="form-control" id="" onChange={changeHandler} value={`${productDetails.description}`}/><br></br>

                    <input type="submit" value="Submit Form" />
                </form>
            </div>
        </>
    )
}
export default EditProduct