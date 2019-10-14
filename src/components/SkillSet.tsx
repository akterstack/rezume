import React from 'react';
import { StackConsumer } from '@/context';

export function SkillSet() {
  return (
    <StackConsumer>
      {({ skillSet }) =>
        skillSet.map(
          ({ label, skills }: { label: string; skills: string[] }) => (
            <section key={label}>
              <div className="section-title">{label}</div>
              <ul className="skills">
                {skills.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </section>
          )
        )
      }
    </StackConsumer>
  );
}
