import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Deloitte',
    location: 'Rosslyn, VA',
    role: 'R&A Intern [\'24] | GPS Cyber Strategy & Transaction Intern [\'25]',
    period: 'June 2025 – August 2025',
    description: [
      'Developed Power BI dashboards transforming raw data into analytics-ready insights for leadership decision-making',
      'Researched AI Builder & Copilot integration within enterprise workflows, evaluating scalability, security, and automation opportunities',
      'Translated technical findings into executive-level recommendations, simulating real-world Solutions Architect communication'
    ]
  },
  {
    company: 'Business Operations Services, University of Virginia',
    location: 'Charlottesville, VA',
    role: 'Technical Support Assistant',
    period: 'August 2025 – Present',
    description: [
      'Provide technical support to 50+ users (in-person, via email, and virtually) weekly, resolving system access and software issues',
      'Improve team efficiency by developing a streamlined reporting system that uses automated data tracking to keep project updates organized and accessible, reducing reporting time by 15%',
      'Build Power BI dashboards to monitor financial/ops trends, enabling data-driven decisions'
    ]
  },
  {
    company: 'Country Club of Fairfax',
    location: 'Fairfax, VA',
    role: 'Server',
    period: 'May 2022 – August 2025',
    description: [
      'Cross-trained across multiple roles, showcasing adaptability and strong leadership in dynamic environments'
    ]
  }
];

export function Experience() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-medium text-gray-900 mb-12">Work Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-red-900">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-red-900 rounded-full"></div>
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900">{exp.company}</h3>
                    <p className="text-gray-600">{exp.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span>{exp.period}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-700 flex gap-2">
                      <span className="text-red-900 mt-1.5">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
