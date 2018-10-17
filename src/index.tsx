import React from 'react';
import ReactDOM from 'react-dom';

import { Application } from './application';

ReactDOM.render(
  <Application compiler='TS' framework='React' />,
  document.getElementById('root')
);
