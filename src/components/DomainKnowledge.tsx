import React from 'react';
import { StackConsumer } from '@/context';

export function DomainKnowledge() {
  return (
    <StackConsumer>
      {({ domainKnowledge }) => (
        <section>
          <div className="section-title">Business & Domain Knowledge</div>
          <p dangerouslySetInnerHTML={{ __html: domainKnowledge }} />
        </section>
      )}
    </StackConsumer>
  );
}
