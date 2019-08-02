import React from 'react';

export default class UnicornCard extends React.Component {
  render() {
    return (
      <div id={this.props.unicorn.id} className="unicorn">
        <h4>{this.props.unicorn.name}</h4>
        <p>{this.props.unicorn.color}</p>
        <p>{this.props.unicorn.favorite_food}</p>

        <button onClick={() => this.props.moveUnicorn(this.props.unicorn, 'barn')}>Move to Barn</button>
        <button onClick={() => this.props.moveUnicorn(this.props.unicorn, 'pasture')}>Move to Pasture</button>
        <button onClick={() => this.props.moveUnicorn(this.props.unicorn, 'trails')}>Move to Trails</button>
      </div>
    );
  }
}
