import React from 'react';
import { StackConsumer } from '@/context';

export function Masthead() {
  return (
    <StackConsumer>
      {({ masthead }) => (
        <div className="flex w-10/12 mt-0 mx-auto my-5">
          <div id="avatar" className="flex justify-end items-center pr-3">
            <img
              className="w-24 h-24 rounded-full justify-right"
              src="/resources/akter.hossain.png"
              alt={masthead.fullName}
            />
          </div>
          <div>
            <div className="uppercase text-5xl leading-none">
              {masthead.fullName}
            </div>
            <div
              className="text-xl"
              dangerouslySetInnerHTML={{
                __html: `${masthead.role}, ${masthead.experienceNote}`,
              }}
            />
            <div className="flex flex-wrap">
              <div className="badge">
                <i className="fas fa-phone-square" />
                {masthead.phone}
              </div>
              <div className="badge">
                <i className="fas fa-envelope" />
                {masthead.email}
              </div>
              <div className="badge">
                <i className="fas fa-map-marker-alt" />
                {masthead.address}
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="badge">
                <i className="fab fa-github-square" />
                <a
                  href={masthead.github}
                  target="_blank"
                  rel="noopener noreferrer">
                  akterstack
                  <sup>
                    <i className="fas fa-external-link-alt pl-1" />
                  </sup>
                </a>
              </div>
              <div className="badge">
                <i className="fab fa-linkedin" />
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
