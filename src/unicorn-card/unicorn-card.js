import React from 'react';

import './unicorn-card.css';

export default class UnicornCard extends React.Component {
  render() {
    return (
      <div id={this.props.unicorn.id} className="unicorn-card">
        <h4>{this.props.unicorn.name}</h4>
        <p>Color: {this.props.unicorn.color}</p>
        <p>Favorite Food: {this.props.unicorn.favorite_food}</p>

        {this.props.unicorn.location !== 'barn' && 
          <button onClick={() => this.props.moveUnicorn(this.props.unicorn, 'barn')}>Move to Barn</button>
        }
        {this.props.unicorn.location !== 'pasture' &&
          <button onClick={() => this.props.moveUnicorn(this.props.unicorn, 'pasture')}>Move to Pasture</button>
        }
        {this.props.unicorn.location !== 'trails' && 
          <button onClick={() => this.props.moveUnicorn(this.props.unicorn, 'trails')}>Move to Trails</button>
        }
      </div>
    );
  }
}
