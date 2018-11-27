import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom'
import {
  Button,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap'
import HomeDetail from './HomeDetail'
import api from '../../api';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl'

class Homes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      homes: []
    }
    this.mapRef = React.createRef()
    this.map = null
    this.markers = []
  }
  initMap() {
    // Embed the map where "this.mapRef" is defined in the render
    this.map = new mapboxgl.Map({
      container: this.mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [0, 0], // Africa lng,lat
      zoom: 5
    })

    // Add zoom control on the top right corner
    this.map.addControl(new mapboxgl.NavigationControl())
  }
  handleHomeSelection(iSelected) {
    this.map.setCenter(this.state.homes[iSelected].location.coordinates)
  }
  render() {
    return (
      <div className="Homes">
        <Row>
          <Col sm={3} className="col-text">
            <ListGroup>
              {this.state.homes.map((h, i) => (
                <ListGroupItem key={h._id} action tag={NavLink} to={"/homes/" + h._id} onClick={() => this.handleHomeSelection(i)}>
                  {h.title} by {h._owner.username}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col sm={4} className="col-text">
            <Switch>
              <Route path="/homes/:id" render={(props) => <HomeDetail {...props} homes={this.state.homes} />} />
              <Route render={() => <h2>Select a home</h2>} />
            </Switch>
          </Col>
          <Col sm={5}>
            <div ref={this.mapRef} className="map"></div>
          </Col>
        </Row>
      </div>
    );
  }
  componentDidMount() {
    api.getHomes()
      .then(homes => {
        console.log(homes)
        this.setState({
          homes: homes.map(home => {
            const [lng, lat] = home.location.coordinates
            return {
              ...home,
              marker: new mapboxgl.Marker({ color: 'red' })
                .setLngLat([lng, lat])
                .on('click', () => { console.log("clicked") })
                .addTo(this.map)
            }
          })
        })
      })
      .catch(err => console.log(err))
    this.initMap()

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        let center = [position.coords.longitude,position.coords.latitude]
        this.map.setCenter(center)
      })
    }
  }
}

export default Homes;
