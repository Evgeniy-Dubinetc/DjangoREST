import React from 'react'
import { useParams } from 'react-router-dom'


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


const AuthorTodoList = ({items}) => {
    let { user_name } = useParams();
    let filtered_items = items.filter((item) => item.users.user_name == user_name)
    return (
        <table>
            <tr>
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
            </tr>
            {filtered_items.map((item) => <TodoItem item={item} />)}
        </table>
    )   
}
export default AuthorTodoList