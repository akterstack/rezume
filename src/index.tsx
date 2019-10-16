import React from 'react';
import { render } from 'react-dom';
import {About, Experience, Masthead, SkillSet, Workflow} from '@/components';
import { stack, StackProvider } from '@/context';

import './assets/base.css';
import './assets/print.css';

const App = () => {
  return (
    <StackProvider value={stack.java}>
      <div className="flex flex-wrap items-start w-full mx-auto">
        <Masthead />
        <div id="content" className="flex flex-wrap w-2/3">
          <About />
          <Experience />
          <Workflow />
        </div>
        <div id="sidebar" className="flex flex-wrap w-1/3">
          <SkillSet />
        </div>
      </div>
    </StackProvider>
  );
};

render(<App />, document.getElementById('main'));
