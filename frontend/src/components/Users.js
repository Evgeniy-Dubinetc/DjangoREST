import React from 'react'


const UsersItem = ({user}) => {
    return (
        <tr>
            <td>
                {user.user_name}
            </td>
            <td>
                {user.first_name}
            </td>
            <td>
                {user.last_name}
            </td>
            <td>
                {user.email}
            </td>
        </tr>
    )
}

const UsersList = ({users}) => {
    return (
        <table>
            <th>
                User name
            </th>
            <th>
                First name
            </th>
            <th>
                Last Name
            </th>
            <th>
                Email
            </th>
            {users.map((user_) => <UsersItem user={user_} />)}
        </table>
    )
}
    
export default UsersList
