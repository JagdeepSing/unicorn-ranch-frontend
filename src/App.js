import React from 'react';
import './App.css';

class App extends React.Component {
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
    const unicorns = await fetch('http://localhost:3001/unicorns').then(response => response.json());
    const barn = [];
    const pasture = [];
    const trails = [];

    unicorns.forEach(unicorn => {
      if (unicorn.location === 'barn') {
        barn.push(unicorn);
      } else if (unicorn.location === 'pasture') {
        pasture.push(unicorn);
      } else {
        trails.push(unicorn);
      }
    });

    this.setState({
      barnUnicorns: barn,
      pastureUnicorns: pasture,
      trailsUnicrons: trails,
    });
  }

  render() {
    return (
      <>
        <section id="barn">
          <h2>Barn</h2>
          <ul>
            {
              this.state.barnUnicorns.map((unicorn) => {
                return (
                  <li>
                    <div>
                      <h4>{unicorn.name}</h4>
                      <p>{unicorn.location}</p>
                      <p>{unicorn.favorite_food}</p>
                    </div>
                  </li>
                  );
              })
            }
          </ul>
        </section>

        <section id="pasture">
          <h2>Pasture</h2>
          <ul>
            <li>
              Green Unicorn
            </li>
          </ul>
        </section>
        
        <section id="trails">
          <h2>Trails</h2>
          <ul>
            <li>
              Purple Unicorn
            </li>
          </ul>
        </section>
      </>
    );
  }
}

export default App;
