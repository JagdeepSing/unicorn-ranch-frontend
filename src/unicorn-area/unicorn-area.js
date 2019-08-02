import React from 'react';

import UnicornCard from '../unicorn-card/unicorn-card';

export default class UnicornArea extends React.Component {
  render() {
    return (
      <section id={this.props.id}>
        <h2>{this.props.heading}</h2>
        {this.props.unicorns.map((unicorn) => {
          return <UnicornCard key={unicorn.id} unicorn={unicorn} moveUnicorn={this.props.moveUnicorn} />;
        })}
      </section>
    );
  }
}
