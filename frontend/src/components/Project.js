import React from 'react'


const ProjectItem = ({item}) => {
    return (
        <tr>
            <td>
                {item.project_name}
            </td>
            <td>
                {item.repo_link}
            </td>
            <td>
                {item.user_name}
            </td>
        </tr>
    )
}
 
   
const ProjectsList = ({items}) => {
    return (
        <table>
            <th>
                PROJECT_NAME
            </th>
            <th>
                REPO_LINK
            </th>
            <th>
                USER_NAME
            </th>
            {items.map((item_) => <ProjectItem item={item_} />)}
        </table>
    )
}
    
export default ProjectsList
