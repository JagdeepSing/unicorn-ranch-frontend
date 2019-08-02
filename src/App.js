import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      barnUnicorns: [],
      pastureUnicorns: [],
      trailsUnicorns: [],
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

  render() {
    return (
      <>
        <UnicornArea id="barn" heading="Barn" unicorns={this.state.barnUnicorns} />
        <UnicornArea id="pasture" heading="Pasture" unicorns={this.state.pastureUnicorns} />
        <UnicornArea id="trails" heading="Trails" unicorns={this.state.trailsUnicorns} />
      </>
    );
  }
}

class UnicornCard extends React.Component {
  render() {
    return (
      <div id={this.props.unicorn.id} className="unicorn">
        <h4>{this.props.unicorn.name}</h4>
        <p>{this.props.unicorn.color}</p>
        <p>{this.props.unicorn.favorite_food}</p>
      </div>
    );
  }
}

class UnicornArea extends React.Component {
  render() {
    return (
      <section id={this.props.id}>
        <h2>{this.props.heading}</h2>
        {this.props.unicorns.map((unicorn) => {
          return <UnicornCard key={unicorn.id} unicorn={unicorn} />;
        })}
      </section>
    );
  }
}
