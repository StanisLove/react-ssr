import React, { Component } from 'react';

import BlogList from '../ui/BlogList'

const list = [
  {
    text: 'Some text about React',
    image: {
      src: 'https://facebook.github.io/react/img/logo_og.png',
      alt: 'React picture',
      width: '100px',
      height: 'auto'
    }
  },
  {
    text: 'Some text about Babel',
    image: {
      src: 'https://raw.githubusercontent.com/babel/logo/master/babel.png',
      alt: 'Babel picture',
      width: '100px',
      height: 'auto'
    }
  },
  {
    text: 'Some text about Lodash',
    image: {
      src: 'https://babeljs.io/images/users/lodash.svg',
      alt: 'Lodash picture',
      width: '100px',
      height: 'auto'
    }
  }
]


class PageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { list };
  }

  render() {
    const { list } = this.state;
    return React.createElement(BlogList, { list });
  }
}

export default PageContainer;

