import React from 'react';

export default class Item extends React.Component {
  render() {
    return (
      <div>
        <h1>Name</h1>
        <section>Image</section>
        <section>Image Description</section>
        <section>price</section>
        <button>Buy now!</button>
      </div>
    );
  }
}
