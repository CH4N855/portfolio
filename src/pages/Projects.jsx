export default function Projects() {
  const projectsData = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A fully responsive e-commerce platform built with React and Tailwind CSS with advanced filtering and cart management.',
      image: 'https://picsum.photos/500/300?random=1',
      tags: ['React', 'Tailwind CSS', 'JavaScript']
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application featuring task management, calendar integration, and real-time collaboration features.',
      image: 'https://picsum.photos/500/300?random=2',
      tags: ['React', 'Firebase', 'Tailwind CSS']
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A modern portfolio website showcasing my works with smooth animations and interactive elements.',
      image: 'https://picsum.photos/500/300?random=3',
      tags: ['React', 'Vite', 'Tailwind CSS']
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'A real-time weather application with location-based forecasts and beautiful UI design.',
      image: 'https://picsum.photos/500/300?random=4',
      tags: ['React', 'API Integration', 'Tailwind CSS']
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'A comprehensive dashboard for managing multiple social media accounts with analytics and insights.',
      image: 'https://picsum.photos/500/300?random=5',
      tags: ['React', 'Charts', 'Tailwind CSS']
    },
    {
      id: 6,
      title: 'Learning Platform',
      description: 'An interactive online learning platform with courses, videos, and interactive quizzes.',
      image: 'https://picsum.photos/500/300?random=6',
      tags: ['React', 'Video Integration', 'Tailwind CSS']
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-gray-800 font-sans flex flex-col overflow-x-hidden">
      {/* Projects Section */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-slideDown">My Projects</h1>

            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto animate-slideUp px-4">
              Explore some of my recent works and featured designs. Each project showcases my skills in modern web development and design.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projectsData.map((project, idx) => (
              <div
                key={project.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 cursor-pointer animate-scaleIn"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-40 sm:h-48 md:h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 hover:text-violet-600 transition-colors">{project.title}</h3>

                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-violet-100 text-violet-700 text-xs font-semibold px-3 py-1 rounded-full hover:bg-violet-200 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
