import React from 'react';
import { StackConsumer } from '@/context';

export function Masthead() {
  return (
    <StackConsumer>
      {({
        masthead: { fullName, roles, phone, email, address, github, linkedin },
      }) => (
        <div className="flex w-full justify-center mt-0 mx-auto my-5">
          <div id="avatar" className="flex justify-end items-center pr-5">
            <img
              className="rounded-full justify-right"
              src="/resources/akter.hossain.png"
              alt={fullName}
            />
          </div>
          <div className="">
            <div className="uppercase text-5xl leading-none">{fullName}</div>
            {roles.map((role: string) => (
              <div
                key={role}
                className="text-xl"
                dangerouslySetInnerHTML={{
                  __html: `${role}`,
                }}
              />
            ))}
            <div className="flex flex-wrap">
              <div className="badge">
                <i className="fas fa-phone-square" />
                {phone}
              </div>
              <div className="badge">
                <i className="fas fa-envelope" />
                {email}
              </div>
              <div className="badge">
                <i className="fas fa-map-marker-alt" />
                {address}
              </div>
            </div>
          </div>
        </div>
      )}
    </StackConsumer>
  );
}
