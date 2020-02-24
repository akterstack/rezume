import React from 'react';
import { StackConsumer } from '@/context';

export function SkillSet() {
  const Bar = ({ exp }: { exp: string }) => {
    const width = `${+exp * 15}%`;
    return (
      <div
        className="bg-indigo-700 text-xs leading-none py-1 text-center text-white h-1"
        style={{ width }}
      />
    );
  };

  return (
    <StackConsumer>
      {({ skillSet }) =>
        skillSet.map(
          ({ label, skillVsExp }: { label: string; skillVsExp: any }) => (
            <section key={label}>
              <div className="section-title">{label}</div>
              <div className="skills">
                {Object.entries(skillVsExp).map(([skill, exp]) => (
                  <div key={skill} className="flex">
                    <div className="w-1/4">{skill}</div>
                    <div className="w-3/4 flex justify-end items-center">
                      <Bar exp={exp as string} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )
        )
      }
    </StackConsumer>
  );
}
