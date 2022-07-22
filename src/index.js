import React from 'react';
import ReactDOM from 'react-dom';

import { CraftianosMoney } from './CraftianosMoney';

// Import SCSS & Bootstrap Bundle
import './styles/styles.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
  <CraftianosMoney />,
  document.getElementById('root')
);