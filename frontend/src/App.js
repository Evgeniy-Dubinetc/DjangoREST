import React from 'react';
import logo from './logo.svg';
import './App.css';
import UsersList from './components/Users.js'


class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      'users': []
    }
  }
  
  componentDidMount() {
    const users = [
      {
        'user_name': 'Стрелок',
        'first_name': 'Игорь',
        'last_name': 'Попов',
        'email': 'efg777@mail.ru'
      },
      {
        'user_name': 'Автор',
        'first_name': 'Степан',
        'last_name': 'Иванов',
        'email': 'rrf111@mail.ru'
      },
    ]
    this.setState(
      {
        'users': users
      }
    )
  }
  
  render () {
    return (
      <div>
        <UsersList users={this.state.users} />
      </div>
    )
  }
}
  
export default App;
