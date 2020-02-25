import React from 'react';
import { StackConsumer } from '@/context';

export function Projects() {
  return (
    <StackConsumer>
      {({ projects, masthead }) => (
        <section>
          <div className="projects text-3xl text-center mt-16">Projects</div>
          <div className="flex flex-wrap">
            {projects.map(({ type, duration, img, title, description }) => (
              <div key={title} className="w-1/2">
                <div className="p-4 flex flex-col justify-between leading-normal">
                  <div className="my-4">
                    <img className="" src={img} />
                    <div className="text-gray-900 font-bold text-xl mt-2">
                      {title}
                    </div>
                    <p className="text-sm text-gray-600 flex items-center mb-2">
                      <i className="far fa-calendar-alt" /> {duration[0]} -
                      {duration[1]}
                    </p>
                    <p
                      className="text-gray-700 inline"
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
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
