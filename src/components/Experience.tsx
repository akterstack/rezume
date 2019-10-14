import React from 'react';
import { StackConsumer } from '@/context';

function ExperienceHeadline({
  company,
  duration,
}: {
  company: any;
  duration: any[];
}) {
  return (
    <div className="flex justify-between text-sm">
      <div>
        <i className="far fa-calendar-alt" />
        {duration[0]} - {duration[1]}
      </div>
      <div>
        <a href={company.website}>
          <i className="fas fa-briefcase" />
          {company.title}
        </a>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <StackConsumer>
      {({ experiences }) => (
        <section>
          <div className="section-title">Experience</div>
          {experiences.map(experience => (
            <ExperienceHeadline
              company={experience.company}
              duration={experience.duration}
              key={Date.now()}
            />
          ))}
        </section>
      )}
    </StackConsumer>
  );
}
