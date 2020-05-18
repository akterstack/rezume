import React from 'react';
import { StackConsumer } from '@/context';

const tooltip = (exp: string) => {
  return exp + ` ${+exp < 2 ? 'year' : 'years'} of experience`;
};

const Bar = ({ exp }: { exp: string }) => {
  const width = `${+exp * 15}%`;
  return (
    <div
      aria-label={tooltip(exp)}
      data-balloon-pos="up-left"
      className="bg-indigo-700 text-xs leading-none py-1 text-center text-white h-1"
      style={{ width }}
    />
  );
};

export function SkillSet() {
  return (
    <>
      <StackConsumer>
        {({ skillSet }) =>
          skillSet.map(
            ({ label, expBySkill }: { label: string; expBySkill: any }) => (
              <section key={label}>
                <div className="section-title">{label}</div>
                <div className="skills">
                  {Object.entries(expBySkill).map(([skill, exp]) => (
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
      <section>
        <div className="text-center text-xs italic mt-4">
          * All progress bars are indicating years of experience in the relative
          field
        </div>
      </section>
    </>
  );
}
