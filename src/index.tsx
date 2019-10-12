import React from 'react';
import { render } from 'react-dom';
import { About, BackendSkill, Masthead } from '@/components';
import { stack, StackProvider } from '@/context';

import './assets/base.css';
import './assets/print.css';

const App = () => {
  return (
    <StackProvider value={stack.java}>
      <div className="flex flex-wrap w-full mx-auto">
        <Masthead />
        <div id="content" className="flex w-2/3">
          <About />
        </div>
        <div id="sidebar" className="flex w-1/3">
          <BackendSkill />
        </div>
      </div>
    </StackProvider>
  );
};

render(<App />, document.getElementById('main'));
