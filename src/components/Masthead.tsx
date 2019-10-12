import React from 'react';
import { StackConsumer } from '@/context';

export function Masthead() {
  return (
    <StackConsumer>
      {({ masthead }) => (
        <div className="flex w-10/12 mt-0 mx-auto my-5">
          <div id="avatar" className="flex justify-end">
            <img
              className="w-20 h-20 rounded-full justify-right"
              src="/resources/akter.hossain.png"
              alt={masthead.fullName}
            />
          </div>
          <div>
            <div className="full-name">{masthead.fullName}</div>
            <div className="subtitle">
              {masthead.role}, {masthead.experienceNote}
            </div>
            <div className="flex flex-wrap">
              <div className="badge">
                <i className="fas fa-phone-square" />
                {masthead.phone}
              </div>
              <div className="badge">
                <i className="fas fa-envelope" />
                <a
                  href={`mailto:${masthead.email}`}
                  target="_blank"
                  rel="noopener noreferrer">
                  {masthead.email}
                </a>
              </div>
              <div className="badge">
                <i className="fab fa-github-square" />
                <a
                  href={masthead.github}
                  target="_blank"
                  rel="noopener noreferrer">
                  /akterstack
                  <sup>
                    <i className="fas fa-external-link-alt pl-1" />
                  </sup>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </StackConsumer>
  );
}
