
import React from 'react';

type Experience = {
  company: string;
  role: string;
  period: string;
};

const experiences: Experience[] = [
  {
    company: 'Company 1',
    role: 'Chief Executive Officer',
    period: '2021 - Present',
  },
  {
    company: 'Company 2',
    role: 'Chief Technology Officer',
    period: '2018 - 2021',
  },
  {
    company: 'Company 3',
    role: 'Lead Developer',
    period: '2015 - 2018',
  },
];

const ExperienceCard: React.FC = () => {
  return (
    <div className="bg-vertx-gray rounded-xl p-6 h-full">
      <div className="flex items-baseline justify-between mb-6">
        <h3 className="text-lg font-bold">Experience</h3>
        <span className="text-6xl font-bold text-vertx-purple opacity-80">03</span>
      </div>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="border-t border-vertx-gray-light pt-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold">{exp.company}</h4>
                <p className="text-gray-400 text-sm">{exp.role}</p>
                <p className="text-gray-500 text-xs mt-1">{exp.period}</p>
              </div>
              <a
                href="#"
                className="text-vertx-purple text-sm hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
