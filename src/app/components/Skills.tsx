import { Code, Database, Cloud, Globe } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Programming & Development',
    skills: ['Python', 'Java', 'SQL', 'Data Structures & Algorithms', 'Software Engineering']
  },
  {
    icon: Database,
    title: 'Data & Analytics',
    skills: ['Pandas', 'Power BI', 'Data Visualization', 'Data Science', 'Machine Learning Foundations']
  },
  {
    icon: Cloud,
    title: 'Cloud & Tools',
    skills: ['AWS (AI Practitioner Certified)', 'ArcGIS', 'Git', 'Agile/Scrum']
  },
  {
    icon: Globe,
    title: 'Languages',
    skills: ['English (Fluent)', 'Spanish (Native)', 'Quechua (Intermediate)']
  }
];

export function Skills() {
  return (
    <div className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-medium text-gray-900 mb-4">Skills & Expertise</h2>
        <p className="text-gray-600 mb-12">Technical skills, tools, and languages</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-red-900" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-gray-50 text-gray-700 text-sm rounded-lg border border-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg border border-gray-200 p-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Certifications & Training</h3>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-red-900">✓</span>
              <span className="text-gray-700">AWS AI Practitioner Certified</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-900">✓</span>
              <span className="text-gray-700">CodePath Technical Interview Prep (Advanced)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-900">✓</span>
              <span className="text-gray-700">Goldman Sachs Emerging Leaders Series</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-900">✓</span>
              <span className="text-gray-700">SEO Career Edge Program</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
