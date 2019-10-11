import React from 'react';
import { masthead } from '../data';

export function Masthead() {
  return (
    <div className="flex flex-wrap w-2/3 mt-0 mx-auto">
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
          <div className="email">
            <i className="fas fa-envelope" />
            {masthead.email}
          </div>
          <div className="phone">
            <i className="fas fa-phone-square" />
            {masthead.phone}
          </div>
          <div className="github">
            <i className="fab fa-github-square" />
            <a href={masthead.github}>/akterstack</a>
          </div>
        </div>
      </div>
    </div>
  );
}
