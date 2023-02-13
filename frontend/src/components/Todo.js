import React from 'react'


const TodoItem = ({item}) => {
    return (
        <tr>
            <td>
                {item.project_name}
            </td>
            <td>
                {item.content}
            </td>
            <td>
                {item.time_create}
            </td>
            <td>
                {item.time_update}
            </td>
            <td>
                {item.user_name}
            </td>
            <td>
                {item.activate}
            </td>
        </tr>
    )
}

   
const TodoList = ({items}) => {
    return (
        <table>
            <th>
                PROJECT_NAME
            </th>
            <th>
                CONTENT
            </th>
            <th>
                TIME_CREATE
            </th>
            <th>
                TIME_UPDATE
            </th>
            <th>
                USER_NAME
            </th>
            <th>
                ACTIVATE
            </th>
            {items.map((item_) => <TodoItem item={item_} />)}
        </table>
    )
}
    
export default TodoList
