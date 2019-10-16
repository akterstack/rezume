import React from 'react';
import { StackConsumer } from '@/context';

export function Workflow() {
  return (
    <StackConsumer>
      {({ workflow }) => (
        <section>
          <div className="section-title">
            <i className="fas fa-code-branch" />
            Workflow
          </div>
          <p>{workflow}</p>
        </section>
      )}
    </StackConsumer>
  );
}
