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
import { getStack, StackProvider } from '@/context';

import './assets/balloon.css';
import './assets/base.css';
import './assets/print.css';

function App() {
  return (
    <StackProvider value={getStack(location.pathname.replace('/', ''))}>
      <div className="flex flex-wrap items-start w-full mx-auto my-auto">
        <Masthead />
        <div id="content" className="flex flex-wrap w-2/3">
          <About />
          <Workflow />
          <Experience />
          <Education />
        </div>
        <div id="sidebar" className="flex flex-wrap w-1/3">
          <SkillSet />
        </div>
      </div>
      <div className="flex flex-wrap w-full">
        <Projects />
      </div>
    </StackProvider>
  );
}

render(<App />, document.getElementById('main'));
