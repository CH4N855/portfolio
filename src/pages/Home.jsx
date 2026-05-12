import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/1.png'
export default function Home() {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const roles = ['Designer', 'Developer', 'Freelancer', 'Creator']
    const currentWord = roles[index]

    const typingSpeed = isDeleting ? 70 : 130

    const timeout = setTimeout(() => {
      setText((prev) => {
        if (isDeleting) {
          return currentWord.substring(0, prev.length - 1)
        }

        return currentWord.substring(0, prev.length + 1)
      })

      if (!isDeleting && text === currentWord) {
        setTimeout(() => {
          setIsDeleting(true)
        }, 1000)
      }

      if (isDeleting && text === '') {
        setIsDeleting(false)
        setIndex((prev) => (prev + 1) % roles.length)
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, index])

  return (
    <div className="max-w-full bg-[#f5f5f5] text-gray-800 font-sans flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <main
        id="home"
        className="flex-1 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 pt-8 sm:pt-10 lg:pt-0 gap-8 lg:gap-16"
      >
        {/* Left Content */}
        <div className="max-w-2xl space-y-6 sm:space-y-8 w-full lg:w-auto animate-slideUp">
          <div className="inline-block bg-yellow-500 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-lg shadow-sm animate-slideDown">
            Welcome to my portfolio
          </div>

          <div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight min-h-[80px] sm:min-h-[120px] md:min-h-[160px] animate-slideLeft">
              I'm a{' '}

              <span className="text-cyan-500 relative inline-block min-w-[140px] sm:min-w-[200px] md:min-w-[240px]">
                {text}

                <span className="absolute -right-2 sm:-right-3 top-0 text-gray-500 animate-pulse">
                  |
                </span>
              </span>
            </h1>
          </div>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl animate-slideLeft" style={{ animationDelay: '0.1s' }}>
            Experienced frontend developer with a passion for creating visually stunning and user-friendly websites. I specialize in React, modern web technologies, and delivering pixel-perfect designs that make a difference.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-5 pt-2 animate-slideLeft" style={{ animationDelay: '0.2s' }}>
            <Link
              to="/contact"
              className="bg-violet-600 hover:bg-violet-700 transition-all text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold shadow-lg shadow-violet-200 hover:scale-105 active:scale-95 w-full sm:w-auto text-center no-underline"
            >
              Hire Me
            </Link>

            <button className="bg-white hover:bg-gray-100 transition-all px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-medium flex items-center justify-center sm:justify-start gap-2 sm:gap-3 shadow-sm hover:scale-105 active:scale-95 w-full sm:w-auto">
              Download CV

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5v-9m0 9l-3-3m3 3l3-3M4.5 19.5h15"
                />
              </svg>
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 sm:gap-6 pt-6 sm:pt-10 flex-wrap animate-slideLeft" style={{ animationDelay: '0.3s' }}>
            {[
              { name: 'Instagram', icon: 'I' },
              { name: 'LinkedIn', icon: 'L' },
              { name: 'Dribbble', icon: 'D' },
              { name: 'GitHub', icon: 'G' },
            ].map((item, idx) => (
              <a
                key={idx}
                href="#"
                title={item.name}
                className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:-translate-y-2 hover:shadow-lg transition-all cursor-pointer text-lg sm:text-xl font-semibold hover:scale-110 no-underline"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex items-center justify-center w-full lg:w-auto animate-float" style={{ animationDelay: '0.4s' }}>
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 overflow-hidden shadow-2xl flex items-end justify-center hover:shadow-2xl transition-shadow">
            <img
              src={img1}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>

      {/* Quick Stats Section */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-violet-50 to-transparent hover:shadow-lg transition-all animate-scaleIn" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl sm:text-4xl font-bold text-violet-600">3+</div>
              <div className="text-gray-600 text-sm sm:text-base mt-2">Years Experience</div>
            </div>

            <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-cyan-50 to-transparent hover:shadow-lg transition-all animate-scaleIn" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl sm:text-4xl font-bold text-cyan-600">50+</div>
              <div className="text-gray-600 text-sm sm:text-base mt-2">Projects Done</div>
            </div>

            <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-yellow-50 to-transparent hover:shadow-lg transition-all animate-scaleIn" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl sm:text-4xl font-bold text-yellow-600">100%</div>
              <div className="text-gray-600 text-sm sm:text-base mt-2">Satisfaction</div>
            </div>

            <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-transparent hover:shadow-lg transition-all animate-scaleIn" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl sm:text-4xl font-bold text-pink-600">10+</div>
              <div className="text-gray-600 text-sm sm:text-base mt-2">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 bg-gradient-to-r from-violet-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center animate-slideUp">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Ready to Start Your Project?</h2>
          <p className="text-white text-opacity-90 text-base sm:text-lg mb-8">Let's create something amazing together. Get in touch and let's discuss your ideas.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center flex-wrap">
            <Link
              to="/projects"
              className="bg-white hover:bg-gray-100 text-violet-600 px-8 py-4 rounded-2xl font-semibold transition-all hover:scale-105 active:scale-95 no-underline"
            >
              View My Work
            </Link>

            <Link
              to="/contact"
              className="bg-transparent hover:bg-white hover:bg-opacity-10 text-white border-2 border-white px-8 py-4 rounded-2xl font-semibold transition-all hover:scale-105 active:scale-95 no-underline"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  )
}
