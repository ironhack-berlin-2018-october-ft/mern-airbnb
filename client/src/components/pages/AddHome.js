import React, { Component } from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from 'reactstrap';
import api from '../../api';


class AddHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: "",
      pricePerNight: 0,
      lng: 13.3711224,
      lat: 52.5063688,
      message: null
    }
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick(e) {
    e.preventDefault()
    console.log(this.state.title, this.state.description)
    let data = {
      title: this.state.title,
      description: this.state.description,
      pricePerNight: this.state.pricePerNight,
      lng: this.state.lng,
      lat: this.state.lat,
    }
    api.addHome(data)
      .then(result => {
        console.log('SUCCESS!')
        this.setState({
          title: "",
          description: "",
          pricePerNight: 0,
          lng: 13.3711224,
          lat: 52.5063688,
          message: `Your home has been created`
        })
        setTimeout(() => {
          this.setState({
            message: null
          })
        }, 2000)
      })
      .catch(err => this.setState({ message: err.toString() }))
  }
  render() {
    return (
      <Container className="AddHome">
        <h2>Add your Home</h2>

        <Row>
          <Col md={6}>
            <Form>
              <FormGroup row>
                <Label for="title" xl={3}>Title</Label>
                <Col xl={9}>
                  <Input type="text" value={this.state.title} name="title" onChange={this.handleInputChange} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="description" xl={3}>Description</Label>
                <Col xl={9}>
                  <Input type="textarea" value={this.state.description} name="description" cols="30" rows="10" onChange={this.handleInputChange} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="pricePerNight" xl={3}>Price Per Night</Label>
                <Col xl={9}>
                  <Input type="number" value={this.state.pricePerNight} name="pricePerNight" onChange={this.handleInputChange} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="title" xl={3}>Longitude/Latitude</Label>
                <Col xl={9}>
                  <Row>
                  <Col sm={6}>
                      <Input type="number" value={this.state.lng} name="lng" onChange={this.handleInputChange} />
                    </Col>
                    <Col sm={6}>
                      <Input type="number" value={this.state.lat} name="lat" onChange={this.handleInputChange} />
                    </Col>
                  </Row>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col xl={{ size: 9, offset: 3 }}>
                  <Button color="primary" onClick={(e) => this.handleClick(e)}>Create it!</Button>
                </Col>
              </FormGroup>

            </Form>
          </Col>
          <Col md={6} style={{ background: 'lightgrey' }}>Map</Col>
        </Row>

        {this.state.message && <div className="info">
          {this.state.message}
        </div>}
      </Container>
    );
  }
}

export default AddHome;
