import React, { Component } from 'react';
import {
  Container,
} from 'reactstrap'

class Home extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }
  render() {                
    return (
      <Container className="Home">
        <h2>Home</h2>
        <p>This is a sample project with the MERN stack</p>
        <button className="btn btn-primary">Hello</button>
      </Container>
    );
  }
}

export default Home;
