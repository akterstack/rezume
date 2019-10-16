import React from 'react';
import { StackConsumer } from '@/context';

interface IEducation {
  title: any;
  duration: any[];
  school: any;
}

export function Education() {
  return (
    <StackConsumer>
      {({ educations }) => (
        <section>
          <div className="section-title">
            <i className="fas fa-graduation-cap" />
            Education
          </div>
          {educations.map(({ title, duration, school }: IEducation) => (
            <>
              <h2>{title}</h2>
              <div>
                <a href={school.website} target="_blank">
                  {school.title}
                </a>
              </div>
              <div>
                <i className="far fa-calendar-alt" />
                {`${duration[0]} - ${duration[1]}`}
              </div>
            </>
          ))}
        </section>
      )}
    </StackConsumer>
  );
}
