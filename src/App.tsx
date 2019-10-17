import React from 'react';
import { render } from 'react-dom';
import {
  About,
  Education,
  Experience,
  Masthead,
  Projects,
  SkillSet,
  Workflow,
} from '@/components';
import { stack, StackProvider } from '@/context';

import './assets/base.css';
import './assets/print.css';

function App() {
  return (
    <StackProvider value={stack.java}>
      <div className="flex flex-wrap items-start w-full mx-auto">
        <Masthead />
        <div id="content" className="flex flex-wrap w-2/3">
          <About />
          <Experience />
          <Workflow />
          <Education />
        </div>
        <div id="sidebar" className="flex flex-wrap w-1/3">
          <SkillSet />
          <Projects />
        </div>
      </div>
    </StackProvider>
  );
}

render(<App />, document.getElementById('main'));
