import React, { DOM } from 'react';

import _ from 'lodash';

import BlogItem from './BlogItem'

const BlogList = ({ list }) => (
  DOM.ul(
    null,
    _.map(
      list,
      (item, key) => (
        React.createElement(BlogItem, {
          key: key,
          image: item.image,
          text: item.text
        })
      )
    )
  )
);

export default BlogList;

