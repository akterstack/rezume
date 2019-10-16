import React from 'react';
import { StackConsumer } from '@/context';

export function Workflow() {
  return (
    <StackConsumer>
      {({ workflow }) => (
        <section>
          <div className="section-title">Workflow</div>
          <p>{workflow}</p>
        </section>
      )}
    </StackConsumer>
  );
}
