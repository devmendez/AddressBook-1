import React, { Component } from 'react';
import UserDetails from './UserDetails'

class User extends Component {
   state = {
       showDetails: false
   }

   toggleDetails = () => this.setState({ showDetails: !this.state.showDetails}) 
   
    render() {
      const {name, picture} = this.props.user
      const message= this.state.showDetails ? 'Hide Details' : 'Show Details'
        return (
            <div style={{ border: '1px dashed blue', margin: '25px', padding: '25px'}}>
                <img src={picture.thumbnail} />
                <p>{name.first}</p>
        <button onClick={this.toggleDetails}>{message}</button>
                <UserDetails show={this.state.showDetails} user={this.props.user} />
            </div>
        )
    }
}

export default User