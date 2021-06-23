import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const OneProduct = (props) => {
    console.log(props)
    const [productDetails, setProductDetails] = useState({
        name:"",
        price:"",
        description:""
    })

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
    return (
        <>
        <div className="card col-5 mx-auto text-center">
            <h1 className="card-title">Item Name: {productDetails.name}</h1>
            <p>item price: ${productDetails.price}</p>
            <p>item description: {productDetails.description}</p>
        </div>
        </>
    )
}

export default OneProduct