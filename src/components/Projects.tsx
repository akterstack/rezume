import React from 'react';
import { StackConsumer } from '@/context';

export function Projects() {
  return (
    <StackConsumer>
      {({ projects, masthead }) => (
        <section>
          <div className="section-title">Projects</div>
          {projects.map(({ title, description }) => (
            <div key={title} className="mb-2">
              <h3 className="inline font-bold">{title} - </h3>
              <p
                className="inline"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          ))}
          <div className="text-center text-xs italic">
            Please visit my{' '}
            <a href={masthead.linkedin} target="_blank">
              <i className="fab fa-linkedin" />
              linkedin profile
            </a>{' '}
            to see all projects I have worked on.
          </div>
        </section>
      )}
    </StackConsumer>
  );
}
