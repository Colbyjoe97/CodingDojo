import React, { useState, useEffect } from 'react';
import {Link} from '@reach/router';
import Axios from 'axios';

import axios from 'axios';

const Products = () => {
    const [productData, setProductData] = useState([])

    const [deletedClicked, setDeletedClicked] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(productData => {
                console.log("************")
                console.log(productData.data.result)
                console.log("************")
                productData.data.result.sort(function(a, b) {
                    let nameA = a.name.toLowerCase()        // These lines sort by name a to z
                    let nameB = b.name.toLowerCase()
                    if(nameA < nameB) {
                        return -1
                    }
                    else {
                        return 1
                    }                                       // end of name sorting
                    // return a.name > b.name;       // this line Sorts by price - lowest to highest
                });
                setProductData(productData.data.result)
            })
            .catch(err => console.log(err))
    }, [deletedClicked]);

    const deleteHandler = (e, productId) => {
        console.log("Deleting an item", productId)
        Axios.delete(`http://localhost:8000/api/product/delete/${productId}`)
            .then(res => {
                console.log("Response on delete: ", res)
                setDeletedClicked(!deletedClicked)
            })
            .catch(err => console.log("Errors on delete: ", err))
    }

    return (
        <div>
            <table className="table table-success table-hover col-7 mx-auto">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productData.map((prodObj, i) => {
                            return(
                                <tr key={i}>
                                    <td>{prodObj.name}</td>
                                    <td>${prodObj.price}</td>
                                    <td>{prodObj.description}</td>
                                    <td>
                                        <Link to={`/view/${prodObj._id}`}>View </Link>
                                        |
                                        <Link to={`/product/edit/${prodObj._id}`}> Edit </Link>
                                        |
                                        <Link to="" onClick={(e)=>deleteHandler(e,prodObj._id)}> Delete </Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Products