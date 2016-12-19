import React, { Component } from 'react';

class Picture extends React.Component {
  render() {
    const { src, alt, width, height } = this.props;

    return React.createElement(
      'img',
      { src, alt, style: { width, height } }
    );
  }
}

export default Picture;

