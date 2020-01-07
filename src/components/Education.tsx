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
            <div key={title}>
              <h2>{title}</h2>
              <div className="flex justify-between" style={{ fontSize: 13 }}>
                <div>
                  <i className="far fa-calendar-alt" />
                  {`${duration[0]} - ${duration[1]}`}
                </div>
                <div>
                  <a href={school.website} target="_blank">
                    {school.title}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </StackConsumer>
  );
}
