import React, { Component } from 'react'

import Picture from './Picture'
import TextBox from './TextBox'

class BlogItem extends React.Component {
  render() {
    const { text, image } = this.props;

    return React.createElement(
      'li',
      null,
      React.createElement(Picture, image),
      React.createElement(TextBox, { text })
    )
  }
}

export default BlogItem;

