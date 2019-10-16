import React from 'react';
import { StackConsumer } from '@/context';

function ExperienceHeading({
  title,
  company,
  duration,
}: {
  title: any;
  company: any;
  duration: any[];
}) {
  return (
    <div className="experience-heading">
      <h2 className="font-bold">{title}</h2>
      <div className="flex justify-between text-sm text-gray-700">
        <div>
          <a href={company.website}>
            <i className="fas fa-briefcase" />
            {company.title}
          </a>
        </div>
        <div>
          <i className="far fa-calendar-alt" />
          {duration[0]} - {duration[1]}
        </div>
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
          {experiences.map(({ title, duration, company, roles }) => {
            return (
              <>
                <ExperienceHeading
                  title={title}
                  company={company}
                  duration={duration}
                />
                <ul className="mb-2">
                  {roles.map(item => (
                    <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              </>
            );
          })}
        </section>
      )}
    </StackConsumer>
  );
}
