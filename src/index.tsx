import React from 'react';
import { render } from 'react-dom';
import { Masthead } from '@/components';

import './assets/base.css';
import './assets/print.css';

const App = () => {
  return (
    <div className="flex flex-wrap w-full mx-auto">
      <Masthead />
    </div>
  );
};

render(<App />, document.getElementById('main'));
