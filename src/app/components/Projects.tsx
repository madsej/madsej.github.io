import { Code, Users, TrendingUp } from 'lucide-react';

const projects = [
  {
    title: 'Carpool Buddy Web Application',
    role: 'Scrum Lead & Developer',
    period: 'September 2025 - December 2025',
    icon: Users,
    link: 'https://rideshare-b-14-7cf1a7dbfeed.herokuapp.com/',
    description: [
      'Designed application architecture supporting user authentication, role-based access (admin/driver/rider), and persistent storage',
      'Collaborated on backend integration and ensured data integrity and accessibility compliance',
      'Applied Agile/Scrum practices, coordinating sprint planning and delivery accessibility compliance'
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Agile/Scrum']
  },
  {
    title: 'Goldman Sachs Full-Stack Investment App',
    role: 'Developer',
    period: 'October 2024 – January 2025',
    icon: TrendingUp,
    description: [
      'Worked in a group to develop a full-stack web application that estimates potential returns on mutual fund investments using CAPM',
      'Integrated external APIs for real-time data and providing an intuitive frontend for user interaction',
      'Implemented backend services, frontend components, and advanced features like investment tracking and data visualization'
    ],
    tech: ['Full-Stack', 'APIs', 'CAPM', 'Data Visualization']
  },
  {
    title: 'Breast Cancer Diagnostic ML Model',
    role: 'Machine Learning Developer',
    period: 'Fall 2025',
    icon: Activity,
    link: 'https://www.canva.com/design/DAG5LUlxOI0/v-IN4QELI3_h5L6jjr3_ZQ/view?utm_content=DAG5LUlxOI0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha504e850ed',
    description: [
      'Developed machine learning models to classify tumors as malignant or benign using the Breast Cancer Wisconsin Diagnostic dataset',
      'Implemented Random Forest, Logistic Regression, and K-Means clustering with feature standardization and hyperparameter tuning',
      'Achieved 97.37% accuracy with Random Forest and 0.995 AUC with Logistic Regression while analyzing feature importance and model ethics'
    ],
    tech: ['Python', 'Machine Learning', 'Random Forest', 'Logistic Regression', 'K-Means', 'Scikit-learn'],
  },
  {
    title: 'Cryocompression Device for Chemotherapy-Induced Peripheral Neuropathy',
    role: 'Engineering Designer & Researcher',
    period: 'Spring 2024',
    icon: Cpu,
    link: 'https://drive.google.com/file/d/1jPzfrPeViNKLVQ6xr8SQbIOz19-iqpVo/view',
    description: [
      'Collaborated with clinical stakeholders to design a cryocompression device to help prevent chemotherapy-induced peripheral neuropathy (CIPN)',
      'Conducted literature reviews and clinical research to define safety constraints, usability requirements, and treatment effectiveness',
      'Created CAD models, technical documentation, and testing plans for a modular and cost-effective device suitable for clinical and at-home use'
    ],
    tech: ['Medical Device Design', 'CAD', 'User-Centered Design', 'Research', 'Testing']
  },

  {
    title: 'CodePath Technical Interview Prep',
    role: 'Participant',
    period: 'June 2024 – August 2025',
    icon: Code,
    description: [
      'Completed 10-week intensive Technical Interview Prep (TIP) program led by professional engineers',
      'Focused on algorithmic problem solving, data structures, dynamic programming, Big O analysis, and systems design',
      'Gained hands-on experience through algorithm labs, coding challenges, mock interviews, and mentorship from industry professionals'
    ],
    tech: ['Algorithms', 'Data Structures', 'Systems Design', 'Problem Solving']
  }
];

export function Projects() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-medium text-gray-900 mb-4">Projects & Programs</h2>
        <p className="text-gray-600 mb-12">Technical projects and professional development programs</p>
        
        <div className="space-y-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-red-900 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <project.icon className="w-6 h-6 text-red-900" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-gray-900 mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{project.role}</p>
                  <p className="text-sm text-gray-500 mb-4">{project.period}</p>
                </div>
              </div>
              <ul className="space-y-2 mb-4">
                {project.description.map((item, i) => (
                  <li key={i} className="text-gray-700 flex gap-2">
                    <span className="text-red-900 mt-1.5">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
