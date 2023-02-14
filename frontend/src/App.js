import React from 'react';
import NotFound404 from 'react';
import Cookies from "universal-cookie";
/* import logo from './logo.svg'; */
import './App.css';
import UsersList from './components/Users';
import ProjectsList from './components/Project';
import TodoList from './components/Todo';
import AuthorTodoList from './components/AuthorTodo';
import MenuList from './components/Menu';
/*import Footer from './components/Footer.js';*/
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom'
import axios from 'axios' 
import LoginForm  from './components/Auth';


class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      'users': [],
      'todo': [],
      'token': ''
    }
  }

  set_token(token) {
    const cookies = new Cookies() 
    cookies.set('token', token)
/*    localStorage.setItem('token', token)     - храним токен в cookies или в localStorage */
    this.setState({'token': token}, () => this.load_data())
  }

  is_authenticated() {
    return this.state.token != ''
  }

  logout () {
    this.set_token('')
  }

  get_token_from_storage() {
    const cookies = new Cookies()
    const token = cookies.get('token')
 /*   const token = localStorage.getItem('token')    - храним токен в cookies или в localStorage  */
    this.setState({'token': token}, () => this.load_data())
  }
  
  get_token(login, password) {
    axios.post('http://127.0.0.1:8000/api-token-auth/', {username: login, password: password} )
      .then(response => {
        this.set_token(response.data['token'])
      }).catch(error => alert('Неверный пароль'))
  }

  get_headers() {
    let headers = {
      'Content-Type': 'application/json',
    }
    if (this.is_authenticated())
    {
      headers['Authorization'] = 'Token' + this.state.token
    }
    return headers
  }

  load_data() {
    const headers = this.get_headers()
    axios.get('http://127.0.0.1:8000/api/users', {headers})
      .then(response => {
        const users = response.data
          this.setState(
          {
            'users': users['results']
          }
        )
      }).catch(error => console.log(error))
    
      
    axios.get('http://127.0.0.1:8000/api/todo', {headers})
      .then(response => {
        const todo = response.data
          this.setState(
          {
            'todo': todo['results']
          }
        )
      }).catch(error => console.log(error))
  }

  componentDidMount() {
    this.get_token_from_storage()    
  }

 
  render() {
    return (
      <div className="App">
        <BrowserRouter>
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
              <li>
                {this.is_authenticated() ? <button onClick={() => this.logout()}>Logout</button> : <Link to='/login'>Login</Link>}
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path='/' component={() => <UsersList items={this.state.users} />} />
            <Route exact path='/menu' component={() => <MenuList items={this.state.menu} />} />            
            <Route exact path='/projects' component={() => <ProjectsList items={this.state.projects} />} />
            <Route exact path='/todo' component={() => <TodoList items={this.state.todo} />} />
            <Route exact path="/users/:user_name"> <AuthorTodoList items={this.state.todo} /> </Route>
            <Route exact path='/login' component={() => <LoginForm get_token={(login, password) => this.get_token(login, password)}/>} />
            <Redirect from='/users' to='/' />
            <Route component={NotFound404} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

}
  
export default App;



/*
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

