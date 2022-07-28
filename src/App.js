import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideNav from './components/SideNav';
import Home from './components/Home';
import CreateTrip from './components/CreateTrip';
import DisplayTrip from './components/DisplayTrip';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      trips: [
        { date: "2017-01-10", place: "Manali", type: "trek" },
        { date: "2017-04-05", place: "Mumbai", type: "club" },
        { date: "2017-02-09", place: "Marina", type: "tropic" },
        { date: "2020-10-21", place: "Coimbatore", type: "trek" }
      ]
    }
  }
  addTrip = (newTrips) => {
    this.setState({
      trips: [...newTrips]
    })
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <SideNav />
          <div className="workplace">
            <Routes>
              <Route exact path="/" element={<Home trips={this.state.trips} />}/>
              <Route path="/addTrip" element={<CreateTrip addTrip={this.addTrip} trips={this.state.trips} />} />
              <Route path="/Trips"element={ <DisplayTrip trips={this.state.trips} />} />
            </Routes>
          </div>
        </BrowserRouter>
      </>
    );
  }
}
