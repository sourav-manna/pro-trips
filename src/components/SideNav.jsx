import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCalendarPlus, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default class SideNav extends Component {
    render() {
        return (
            <div className="header">
                <Link to="/"><FontAwesomeIcon icon={faHome} size="lg"/></Link>
                <Link to="/addTrip"><FontAwesomeIcon icon={faCalendarPlus} size="lg"/></Link>
                <Link to="/Trips"><FontAwesomeIcon icon={faCalendarAlt} size="lg"/></Link>
            </div>
        )
    }
}