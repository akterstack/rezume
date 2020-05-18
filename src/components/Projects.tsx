import React from 'react';
import { StackConsumer } from '@/context';

export function Projects() {
  return (
    <StackConsumer>
      {({ projects, masthead }) => (
        <section>
          <div className="projects text-3xl text-center mt-10">Projects</div>
          <div className="flex flex-wrap">
            {projects.map(
              ({ title, role, duration, img, description, tech }) => (
                <div key={title} className="w-1/2">
                  <div className="p-4 flex flex-col justify-between leading-normal">
                    <div className="mt-3">
                      <div className="h-40">
                        <img className="max-h-full" src={img} />
                      </div>
                      <div className="text-gray-900 font-bold leading-7 text-xl mt-2">
                        {title}
                      </div>
                      <p className="text-sm text-gray-600 flex items-center mt-2">
                        <i className="fas fa-briefcase" /> {role}
                      </p>
                      <p className="text-sm text-gray-600 flex items-center">
                        <i className="far fa-calendar-alt" /> {duration[0]} -{' '}
                        {duration[1]}
                      </p>
                      <p
                        className="text-gray-700 mt-2"
                        dangerouslySetInnerHTML={{ __html: description }}
                      />
                      <p className="text-sm text-gray-800 flex flex-wrap items-center">
                        <i className="fas fa-charging-station" />
                        {tech.map((t: string) => (
                          <span key={t} className="mr-2 font-bold">
                            {t}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </section>
      )}
    </StackConsumer>
  );
}
