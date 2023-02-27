import React from 'react'
import {Link} from 'react-router-dom'


const TodoItem = ({item, deleteTodo}) => {
    return (
        <tr>
            <td>{item.project_name}</td>
            <td>{item.content}</td>
            <td>{item.time_create}</td>
            <td>{item.time_update}</td>
            <td>{item.user_name}</td>
            <td>{item.activate}</td>
            <td><button onClick={()=>deleteTodo(item.id)} type='button'>Delete</button></td>
        </tr>
    )
}

   
const TodoList = ({items, deleteTodo}) => {
    return (
        <div>
        <table>
            <tr>
                <th>PROJECT_NAME</th>
                <th>CONTENT</th>
                <th>TIME_CREATE</th>
                <th>TIME_UPDATE</th>
                <th>USER_NAME</th>
                <th>ACTIVATE</th>
                <th></th>
            </tr>
            {items.map((item_) => <TodoItem item={item_} deleteTodo={deleteTodo} />)}
        </table>
        <Link to='/todo/create'>Create</Link>     
        </div>
        
    )
}
    
export default TodoList
