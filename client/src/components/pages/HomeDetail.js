import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class HomeDetail extends Component {
  render() {
    let curId = this.props.match.params.id
    let curHome = this.props.homes.find(home => home._id === curId)

    if (!curHome) {
      return <div />
    }

    return (
      <div>
        <h2>{curHome.title}</h2>
        
        <h4>Description</h4>
        {curHome.description}

        <h4>Price per night</h4>
        {curHome.pricePerNight}€

        <h4>Owner</h4>
        {curHome._owner.username}
      </div>
    )
  }
}
