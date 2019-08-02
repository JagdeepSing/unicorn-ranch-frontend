import React from 'react';

import UnicornArea from './unicorn-area/unicorn-area';

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      barnUnicorns: [],
      pastureUnicorns: [],
      trailsUnicorns: [],
      getUnicorns: this.getUnicorns,
    };
    this.getUnicorns();
  }

  async getUnicorns() {
    const unicorns = await fetch('http://localhost:3001/unicorns').then((response) => response.json());

    const barn = [];
    const pasture = [];
    const trails = [];

    unicorns.forEach((unicorn) => {
      if (unicorn.location.toLowerCase() === 'barn') {
        barn.push(unicorn);
      } else if (unicorn.location.toLowerCase() === 'pasture') {
        pasture.push(unicorn);
      } else {
        trails.push(unicorn);
      }
    });

    this.setState({
      barnUnicorns: barn,
      pastureUnicorns: pasture,
      trailsUnicorns: trails,
    });
  }

  async moveUnicorn(unicorn, newLocation) {
    await fetch('http://localhost:3001/moveUnicorn', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: unicorn.id,
        newLocation,
      }),
    });
  }

  render() {
    return (
      <>
        <h1>Unicorn Ranch</h1>
        <UnicornArea 
          id="barn" 
          heading="Barn" 
          unicorns={this.state.barnUnicorns} 
          moveUnicorn={this.moveUnicorn} 
        />
        <UnicornArea
          id="pasture"
          heading="Pasture"
          unicorns={this.state.pastureUnicorns}
          moveUnicorn={this.moveUnicorn}
        />
        <UnicornArea
          id="trails"
          heading="Trails"
          unicorns={this.state.trailsUnicorns}
          moveUnicorn={this.moveUnicorn}
        />
      </>
    );
  }
}
