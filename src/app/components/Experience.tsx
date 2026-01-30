import { Briefcase } from 'lucide-react';

const experiences = [
    {
    company: 'Business Operations Services, University of Virginia',
    location: 'Charlottesville, VA',
    role: 'Technical Support Assistant',
    period: 'August 2025 – Present',
    description: [
      'Provide technical support to 50+ users weekly, resolving system, software, and workflow issues',
      'Build dashboards to track operational metrics, helping teams monitor workload and identify recurring issues',
      'Automate recurring reports, cutting manual reporting time by ~15%'
    ]
  },
  {
    company: 'Deloitte',
    location: 'Rosslyn, VA',
    role: 'GPS Cyber Strategy & Transactions Intern',
    period: 'June 2025 – August 2025',
    description: [
      'Created training materials for Microsoft AI tools (AI Builder, Copilot) to help teams understand and use new AI features in daily worklows',
      'Worked with stakeholders to understand data needs and built dashboards and analyses to support planning and decision-making for public-sector project',
      'Built Power BI dashboards that summarized operational and financial data for senior leaders, helping teams track performance and spot trends'
    ]
  },
  {
    company: 'Code2040',
    location: 'Remote',
    role: 'Fellow',
    period: 'September 2025 - Present',
    description: [
      'Selected as a Fellow for the 2025–2026 Code2040 Program, a highly competitive 10-month experience',
      'Participating in workshops, hackathons, speaker events, and an all-expenses-paid in-person Summer Summit',
      'Matched with a mentor for one-on-one coaching and support navigating tech careers',
      'Gaining access to resources such as LeetCode Premium, technical interview prep, and a supportive career network'
    ]
  },
  {
  company: 'Deloitte',
  location: 'Rosslyn, VA',
  role: 'GPS Cyber Financial Risk & Advisory Intern',
  period: 'June 2024 – August 2024',
  description: [
    'Applied statistical analysis and data visualization techniques to identify trends, risks, and optimization opportunities for public-sector clients',
    'Created and presented client-facing slide decks, translating analytical findings into clear, actionable insights for non-technical stakeholders'
  ]
},
  {
    company: 'Country Club of Fairfax',
    location: 'Fairfax, VA',
    role: 'Server',
    period: 'May 2022 – August 2025',
    description: [
      'Cross-trained across multiple roles'
    ]
  }
];

const leadership = [
  {
    organization: 'UVA Student Council',
    location: 'University of Virginia',
    role: 'Data Science Committee',
    period: 'August 2024 – Present',
    description: [
      'Built dashboards showing how funding was distributed across 300+ student organizations, helping leadership understand usage patterns and impact',
      'Created interactive maps to explore where campus events and engagement were happening and identify gaps',
      'Turned operational data into clear insights for different audiences'
    ]
  },
  {
    organization: 'SEO Career',
    location: 'New York, NY',
    role: 'SEO Edge Participant',
    period: 'July 2025 – Present',
    description: [
      'Completed specialized industry training to enhance technical expertise, institutional knowledge, and precision in execution',
      'Engaged in personalized coaching and comprehensive online training for interviews, technical assessments, and professional development'
    ]
  },
  {
    organization: 'Latin American Identities Coalition',
    location: 'University of Virginia',
    role: 'Event Coordinator',
    period: 'August 2024 – Present',
    description: [
      'Plan and execute large-scale cultural and community events, overseeing end-to-end logistics, budgeting, programming, and stakeholder coordination',
      'Founded Latinx Heritage Month Dinner in partnership with 5 CIO organizations, engaging 100+ attendees (faculty, students, and community leaders) and secured $800+ funding',
      'Coordinated "Feliz Friday," an annual community-building kickoff event focused on Latinx student engagement and inclusion',
      'Managed budgets, vendor coordination, RSVP tracking, guest outreach, and event timelines to ensure smooth execution'
    ]
  },
  {
    organization: 'Hispanic Scholarship Fund',
    location: 'Los Angeles, CA',
    role: 'STEM Scholar',
    period: '2023 – Present',
    description: [
      'Selected as one of 120 scholars from a highly competitive pool of 10,000 students to attend the HSF STEM Summit in Los Angeles',
      'Participated in career fair, mock interviews, resume and LinkedIn reviews with industry professionals',
      'Connected with HSF alumni and mentors, building a network of support and guidance',
      'Learned to advocate for myself and communicate professional needs with confidence'
    ]
  },
  {
    organization: 'Society of Hispanic Professional Engineers',
    location: 'University of Virginia',
    role: 'First Year Rep [\'23-\'24] | VP [\'24-\'25]',
    period: 'August 2023 – Present',
    description: [
      'Lead chapter of 145+ members, driving engagement and inclusion for Hispanic-identifying STEM students',
      'Created internship resource guide and mentorSHPE program, pairing 35+ students with industry professionals for career development',
      'Planned monthly career development and social events'
    ]
  },
];

export function Experience() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-medium text-gray-900 mb-12">Experience</h2>
        <div className="space-y-12 mb-16">
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

        <h2 className="text-4xl font-medium text-gray-900 mb-12">Leadership</h2>
        <div className="space-y-12">
          {leadership.map((lead, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-red-900">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-red-900 rounded-full"></div>
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900">{lead.organization}</h3>
                    <p className="text-gray-600">{lead.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span>{lead.period}</span>
                  <span>•</span>
                  <span>{lead.location}</span>
                </div>
                <ul className="space-y-2">
                  {lead.description.map((item, i) => (
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