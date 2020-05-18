import React from 'react';
import { StackConsumer } from '@/context';

export function About() {
  return (
    <StackConsumer>
      {({ about }) => (
        <section>
          <div className="section-title">About</div>
          <p dangerouslySetInnerHTML={{ __html: about }} />
        </section>
      )}
    </StackConsumer>
  );
}
