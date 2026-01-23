import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Nat4ek@Virginia.edu',
      link: 'mailto:Nat4ek@Virginia.edu'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(571) 494-0878',
      link: 'tel:+15714940878'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/madison-sejas-siles',
      link: 'https://linkedin.com/in/madison-sejas-siles'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Fairfax, VA',
      link: null
    }
  ];

  return (
    <div className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-medium text-gray-900 mb-4">Let's Connect</h2>
        <p className="text-gray-600 mb-12">
          I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {contactInfo.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-red-900 transition-colors">
              {item.link ? (
                <a
                  href={item.link}
                  target={item.icon === Linkedin ? '_blank' : undefined}
                  rel={item.icon === Linkedin ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-900 transition-colors">
                    <item.icon className="w-6 h-6 text-red-900 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                    <p className="text-gray-900 group-hover:text-red-900 transition-colors">{item.value}</p>
                  </div>
                </a>
              ) : (
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-red-900" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                    <p className="text-gray-900">{item.value}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-red-50 border border-red-100 rounded-lg p-8 text-center">
          <h3 className="text-xl font-medium text-gray-900 mb-3">Open to Opportunities</h3>
          <p className="text-gray-700 mb-6">
            I'm actively seeking Software Engineering internships and full-time opportunities for Summer 2026 and beyond.
            Let's discuss how I can contribute to your team!
          </p>
          <a
            href="mailto:Nat4ek@Virginia.edu"
            className="inline-block px-6 py-3 bg-red-900 text-white rounded-lg hover:bg-red-800 transition-colors"
          >
            Send Me an Email
          </a>
        </div>
      </div>
    </div>
  );
}
