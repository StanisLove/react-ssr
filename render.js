import React from 'react';
import ReactDOMServer from 'react-dom/server';

import PageContainer from './components/containers/PageContainer';

const result = ReactDOMServer.renderToString(
  React.createElement(PageContainer)
);

export default result;

