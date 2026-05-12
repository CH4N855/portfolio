export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col overflow-x-hidden">
      {/* About Section */}
      <section
        id="about"
        className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20 md:py-24 bg-white"
      >
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-12 animate-slideDown">About Me</h1>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="animate-slideLeft">
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-4 sm:mb-6 hover:text-gray-700 transition-colors">
                I'm a creative and passionate frontend developer with over 3 years of experience building modern, responsive, and high-performance websites.
              </p>

              <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-4 sm:mb-6 hover:text-gray-700 transition-colors">
                My expertise includes React, Tailwind CSS, JavaScript, and creating exceptional user experiences. I love turning complex problems into simple, beautiful, and intuitive designs.
              </p>

              <p className="text-gray-600 leading-relaxed text-base sm:text-lg hover:text-gray-700 transition-colors">
                When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or working on personal creative projects.
              </p>
            </div>

            <div className="bg-[#f5f5f5] rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg animate-slideRight hover:shadow-2xl transition-shadow">
              <div className="space-y-6 sm:space-y-8">
                <div className="animate-scaleIn" style={{ animationDelay: '0.1s' }}>
                  <h3 className="text-3xl sm:text-4xl font-bold text-violet-600">3+</h3>
                  <p className="text-gray-500 mt-2 text-base sm:text-lg">Years Experience</p>
                </div>

                <div className="animate-scaleIn" style={{ animationDelay: '0.2s' }}>
                  <h3 className="text-3xl sm:text-4xl font-bold text-cyan-500">50+</h3>
                  <p className="text-gray-500 mt-2 text-base sm:text-lg">Projects Done</p>
                </div>

                <div className="animate-scaleIn" style={{ animationDelay: '0.3s' }}>
                  <h3 className="text-3xl sm:text-4xl font-bold text-yellow-500">100%</h3>
                  <p className="text-gray-500 mt-2 text-base sm:text-lg">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-16 sm:mt-20 animate-slideUp">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10">Skills & Technologies</h2>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="p-6 sm:p-8 bg-gradient-to-br from-violet-50 to-transparent rounded-2xl hover:shadow-lg transition-shadow animate-slideLeft">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-violet-600">Frontend</h3>
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-gray-600 hover:text-gray-800 transition-colors">React • JavaScript • TypeScript</p>
                  <p className="text-gray-600 hover:text-gray-800 transition-colors">Tailwind CSS • HTML5 • CSS3</p>
                  <p className="text-gray-600 hover:text-gray-800 transition-colors">Vite • Webpack • Responsive Design</p>
                </div>
              </div>

              <div className="p-6 sm:p-8 bg-gradient-to-br from-cyan-50 to-transparent rounded-2xl hover:shadow-lg transition-shadow animate-slideRight">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-500">Tools & Others</h3>
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-gray-600 hover:text-gray-800 transition-colors">Git • GitHub • VS Code</p>
                  <p className="text-gray-600 hover:text-gray-800 transition-colors">Figma • Adobe XD • Design Systems</p>
                  <p className="text-gray-600 hover:text-gray-800 transition-colors">SEO • Performance Optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
