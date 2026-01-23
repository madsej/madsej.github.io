import { GraduationCap, Award, Users } from 'lucide-react';

export function Education() {
  return (
    <div className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-medium text-gray-900 mb-12">Education</h2>
        
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-red-900" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-medium text-gray-900 mb-1">University of Virginia</h3>
              <p className="text-gray-600 mb-2">B.S. in Computer Science</p>
              <p className="text-sm text-gray-500 mb-4">May 2027 • GPA: 3.74</p>
              <p className="text-gray-700">Minors: Applied Mathematics, Data Science</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-red-900" />
                <h4 className="font-medium text-gray-900">Student Organizations</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Society of Hispanic Professional Engineers', 'Latin American Identities Coalition', 'Student Council Data Science Committee', 'ColorStack'].map((org) => (
                  <span key={org} className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg">
                    {org}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-red-900" />
                <h4 className="font-medium text-gray-900">Honors & Awards</h4>
              </div>
              <ul className="space-y-2">
                {[
                  'Undergraduate Achievement Award (UAA)',
                  'UVA McIntire School of Commerce Finance Academy Badge',
                  'Hispanic Scholarship Fund STEM Scholar (HSF)',
                  'Code2040 Fellow'
                ].map((award) => (
                  <li key={award} className="text-gray-700 flex gap-2">
                    <span className="text-red-900">•</span>
                    <span>{award}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-3">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Foundations of Machine Learning',
                  'Software Development Essentials',
                  'Computer Systems',
                  'Data Structures & Algorithms 2',
                  'Software Engineering',
                  'Computational BME',
                  'Probability',
                  'Linear Algebra'
                ].map((course) => (
                  <span key={course} className="px-3 py-1.5 bg-red-50 text-red-900 text-sm rounded-lg border border-red-100">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
