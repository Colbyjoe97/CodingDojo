import React, { useState } from 'react';

const Todo = () => {
    const [todoInfo, setTodoInfo] = useState({
        desc: "",
        complete: false
    })


    const [todoList, setTodoList] = useState([])

    const changeHandler = (event) => {
        setTodoInfo({
            ...todoInfo,
            [event.target.name]: event.target.value
        })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        console.log("Created a new event: ", todoInfo)
        setTodoList([...todoList, todoInfo])
        setTodoInfo({
            desc: "",
            complete: false
        })
    }

    let line = {textDecoration: 'line-through'}
    let noline = {textDecoration: 'none'}

    const itemComplete = (event, itemId) => {
        todoList[itemId].complete = !todoList[itemId].complete
        console.log(`${todoList[itemId].desc} is complete`, todoList[itemId].complete)
        setTodoList([...todoList])
    }

    const itemDelete = (event, itemId, clickedItem) => {
        console.log(`Deleted ${todoList[itemId].desc}`, itemId, "looks like:", clickedItem)
        let todoListCopy = [...todoList]
        todoListCopy.splice(itemId, 1)
        setTodoList(todoListCopy);
    }

    return(
        <>
        <div className="card col-3" style={{marginLeft: 150, marginTop: 50}}>
            <div className="card-body">
                <h1 className="card-title">Create a new event!</h1>
                <form onSubmit={submitHandler}>
                    <label>ToDo:</label>
                    <input className="form-control" type="text" name="desc" onChange={ changeHandler } value={todoInfo.desc}></input>
                    <input type="submit" value="Create ToDo" className="btn btn-success mt-3"></input>
                </form>
            </div>
        </div>
        <div style={{marginTop: 50, marginLeft: 150}}>

            <div className="card col-5">
                <table className="table table-hover ml-50">
                    <thead>
                        <tr>
                            <th>Desc</th>
                            <th>Completed</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todoList.map((item, i) => {
                                return <tr key={i} className="listItems" style={ item.complete ? line : noline }>
                                        <td>{item.desc}</td>
                                        <td><input type="checkbox" name="complete" onClick={(e)=>itemComplete(e, i)}></input></td>
                                        <td onClick={(e)=>itemDelete(e, i, item)}>Delete</td>
                                    </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default Todo;