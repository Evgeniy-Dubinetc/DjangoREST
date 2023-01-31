import React from 'react'


const UserItem = ({item}) => {
    return (
        <tr>
            <td>
                {item.user_name}
            </td>
            <td>
                {item.first_name}
            </td>
            <td>
                {item.last_name}
            </td>
            <td>
                {item.email}
            </td>
        </tr>
    )
}

const UsersList = ({items}) => {
    return (
        <table>
            <th>
                USER_NAME
            </th>
            <th>
                FIRST_NAME
            </th>
            <th>
                LAST_NAME
            </th>
            <th>
                EMAIL
            </th>
            {items.map((item_) => <UserItem item={item_} />)}
        </table>
    )
}
    
export default UsersList
