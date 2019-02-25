# MERN Airbnb

## Introduction

Your goal is to recreate a very simple Airbnb clone. You can find an example here: https://mern-airbnb.herokuapp.com

To reproduce this lab, you have to use the MERN boilerplate (and not this repository that is the solution).


## Lesson | How to add a Map with Mapbox?

### Initialisation to do the first time

```sh
cd client
npm install mapbox-gl
```

```js
// client/src/index.js
import 'mapbox-gl/dist/mapbox-gl.css' // Import of Mapbox CSS
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'

// ...

// Inform your Mapbox token (https://www.mapbox.com/account/)
mapboxgl.accessToken = 'YourToken'
```

### Add a simple map in a component

```js
import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'

class MapboxExample extends Component {
  constructor(props) {
    super(props)
    this.mapRef = React.createRef()
    this.map = null
    this.marker = null
  }
  initMap() {
    // Embed the map where "this.mapRef" is defined in the render
    this.map = new mapboxgl.Map({
      container: this.mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [13.37, 52.51], // Berlin lng,lat
      zoom: 5
    })

    // Add zoom control on the top right corner
    this.map.addControl(new mapboxgl.NavigationControl())

    // Create a marker on the map in Berlin ([13.37, 52.51])
    this.marker = new mapboxgl.Marker({ color: 'red' })
      .setLngLat([13.37, 52.51])
      .addTo(this.map)
  }
  render() {
    return (
      <div>
        {/* The map will be injected here. Don't forget to give a height! */}
        <div ref={this.mapRef} style={{height: 300, width: 400}}></div>
      </div>
    )
  }
  componentDidMount() {
    this.initMap()
  }
}

export default MapboxExample
```


## Instructions

### Setup

First, create a new project by using the MERN boilerplate: https://github.com/mc100s/mern-boilerplate

### Create Home feature

The task is the following one: "The user should be able to add a Home".

WIP