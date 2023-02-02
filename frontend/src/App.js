import React from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import UsersList from './components/Users.js';
import ProjectsList from './components/Project';
import TodoList from './components/Todo';
import MenuList from './components/Menu.js';
/*import Footer from './components/Footer.js';*/
import {HashRouter, Route, Link, Switch, Redirect} from 'react-router-dom'
/* import axios from 'axios' */

/*
class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      'users': [],
      'tabs': []
    }
  }
  
  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/users')
      .then(response => {
        const users = response.data
          this.setState(
          {
            'users': users
          }
        )
      }).catch(error => console.log(error))
  
        const tabs = [
          {
          'user': 'user',
          'project': 'project',
          'todo': 'todo'
          }
        ]
          this.setState({ 'tabs': tabs })
  }
*/

const NotFound404 = ({ location }) => {
  return (
    <div>
      <h1>Страница по адресу '{location.pathname}' не найдена</h1>
    </div>
  )
}


class App extends React.Component {
  
  constructor(props) {
    super(props)
    const users = [
      {
        'user_name': 'Стрелок',
        'first_name': 'Игорь',
        'last_name': 'Попов',
        'email': 'efg777@mail.ru'
      },
      {
        'user_name': 'Капитан',
        'first_name': 'Степан',
        'last_name': 'Иванов',
        'email': 'rrf111@mail.ru',
      },
    ]
    const projects = [
      {
        'project_name': 'ships_in_space',
        'repo_link': 'github_link',
        'user_name': 'Стрелок',
      },
      {
        'project_name': 'ships_in_ocean',
        'repo_link': 'gitlab_link',
        'user_name': 'Капитан',
      }
    ]
    const todo = [
      {
        'project_name': 'ships_in_space',
        'content': 'spase is a big and dark',
        'time_create': '2006-10-25',
        'time_update': '2007-10-25',
        'user_name': 'Стрелок',
        'activate': 'True',
      },
      {
        'project_name': 'ships_in_ocean',
        'content': 'ocean is a big and blue',
        'time_create': '2016-10-25',
        'time_update': '2017-10-25',
        'user_name': 'Капитан',
        'activate': 'True',
      }
    ]
    const menu = [
      {
        'user': 'Стрелок',
        'project': 'ships_in_space',
        'todo': 'front',
      },
      {
        'user': 'Капитан',
        'project': 'ships_in_ocean',
        'todo': 'back',
      }
    ]
    this.state = {
      'users': users,
      'projects': projects,
      'todo': todo,
      'menu': menu,
    }
    /* this.setState(
      {
        'users': users,
        'menu': menu,
      }
    ) */

  }

  
  /*
  render () {
    return (
      <div>
        <MenuList tabs={this.state.menu} />
        <ProjectsList items={this.state.project} />
        <UsersList items={this.state.users} />
        <Footer /> 
      </div>
    )
  } */

  render() {
    return (
      <div className="App">
        <HashRouter>
          <nav>
            <ul>
              <li>
                <Link to='/'>Menu</Link>
              </li>
              <li>
                <Link to='/users'>Users</Link>
              </li>
              <li>
                <Link to='/projects'>Projects</Link>
              </li>
              <li>
                <Link to='/todo'>Todo</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path='/' component={() => <UsersList items={this.state.users} />} />
            <Route exact path='/menu' component={() => <MenuList items={this.state.menu} />} />            
            <Route exact path='/projects' component={() => <ProjectsList items={this.state.projects} />} />
            <Route exact path='/todo' component={() => <TodoList items={this.state.todo} />} />
            <Redirect from='/users' to='/' />
            <Route component={NotFound404} />
          </Switch>
        </HashRouter>
      </div>
    )
  }

}
  
export default App;
