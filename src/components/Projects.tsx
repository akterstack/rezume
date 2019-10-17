import React from 'react';
import { StackConsumer } from '@/context';

export function Projects() {
  return (
    <StackConsumer>
      {({ projects }) => (
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
        </section>
      )}
    </StackConsumer>
  );
}
