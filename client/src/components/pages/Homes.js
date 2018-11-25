import React, { Component } from 'react';
import api from '../../api';

class Homes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      homes: []
    }
  }
  render() {
    return (
      <div className="Homes">
        <h2>List of homes</h2>
        {this.state.homes.map(c => <li key={c._id}>{c.title} by {c._owner.username}</li>)}
      </div>
    );
  }
  componentDidMount() {
    api.getHomes()
      .then(homes => {
        console.log(homes)
        this.setState({
          homes: homes
        })
      })
      .catch(err => console.log(err))
  }
}

export default Homes;
