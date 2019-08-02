import React from 'react';

import UnicornCard from '../unicorn-card/unicorn-card';
import './unicorn-area.css';

export default class UnicornArea extends React.Component {
  render() {
    return (
      <>
      <h2>{this.props.heading}</h2>
      <section id={this.props.id} className="unicorn-area">
        {this.props.unicorns.map((unicorn) => {
          return <UnicornCard key={unicorn.id} unicorn={unicorn} moveUnicorn={this.props.moveUnicorn} />;
        })}
      </section>
      </>
    );
  }
}
