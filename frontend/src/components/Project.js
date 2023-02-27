import React from 'react'
import {Link} from 'react-router-dom'


const ProjectItem = ({item, deleteProject}) => {
    return (
        <tr>
            <td>{item.project_name}</td>
            <td>{item.repo_link}</td>
            <td>{item.user_name}</td>
            <td><button onClick={()=>deleteProject(item.id)} type='button'>Delete</button></td>
        </tr>
    )
}
 
   
const ProjectsList = ({items, deleteProject}) => {
    return (
        <div>        
        <table>
            <tr>
                <th>PROJECT_NAME</th>
                <th>REPO_LINK</th>
                <th>USER_NAME</th>
                <th></th>
            </tr>            
            {items.map((item_) => <ProjectItem item={item_} deleteProject={deleteProject} />)}
        </table>
        <Link to='/project/create'>Create</Link>
        </div>
    )
}
    
export default ProjectsList
