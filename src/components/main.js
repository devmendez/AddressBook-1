import React, { Component } from "react";
import User from './User'

class Main extends Component {
     state = {
       users: []
     }


    fetchUsers = () => {
        fetch('https://randomuser.me/api?results=25')
        .then(response => response.json())
        .then(response => {
          this.setState({ users: response.results })
      })
    }


  render() {

    return (
      <div>
        <button onClick={this.fetchUsers}>Fetch Users</button>
        {
          this.state.users.map(user => {
            return <User key={user.cell} user={user}/>
          })
        }
      </div>
    )
  }
}

export default Main;
