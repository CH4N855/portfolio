import { useEffect, useState } from 'react'
import img1 from '../assets/project1.jpg'
export default function PortfolioHero() {
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
    <div className="min-h-screen bg-[#f5f5f5] text-gray-800 font-sans flex flex-col overflow-x-hidden">
      {/* Navbar */}
      <header className="w-full px-6 md:px-20 py-6 flex items-center justify-between">
        <div className="text-4xl font-extrabold tracking-tight">
          <span className="text-cyan-500">Doe</span>
          <span className="text-gray-700">.</span>
        </div>

        <nav className="hidden md:flex items-center gap-14 text-[17px] font-medium">
          <a
            href="#home"
            className="relative text-violet-500 after:absolute after:left-1/2 after:-translate-x-1/2 after:top-7 after:w-1.5 after:h-1.5 after:bg-violet-500 after:rounded-full"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-violet-500 transition-colors"
          >
            About
          </a>

          <a
            href="#projects"
            className="hover:text-violet-500 transition-colors"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-violet-500 transition-colors"
          >
            Contact
          </a>
        </nav>

        <button className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-sm hover:shadow-md transition-all font-medium">
          Download CV

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5v-9m0 9l-3-3m3 3l3-3M4.5 19.5h15"
            />
          </svg>
        </button>
      </header>

      {/* Hero Section */}
      <main
        id="home"
        className="flex-1 flex flex-col lg:flex-row items-center justify-between px-6 md:px-20 pt-10 lg:pt-0 gap-16"
      >
        {/* Left Content */}
        <div className="max-w-2xl space-y-8">
          <div className="inline-block bg-yellow-500 text-white text-sm px-4 py-1 rounded-lg shadow-sm">
            John Doe
          </div>

          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight min-h-[120px] md:min-h-[160px]">
              I'm{' '}

              <span className="text-cyan-500 relative inline-block min-w-[240px]">
                {text}

                <span className="absolute -right-3 top-0 text-gray-500 animate-pulse">
                  |
                </span>
              </span>
            </h1>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            Experienced frontend developer with a passion for creating visually
            stunning and user-friendly websites.
          </p>

          <div className="flex flex-wrap gap-5 pt-2">
            <button className="bg-violet-600 hover:bg-violet-700 transition-all text-white px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-violet-200">
              Hire Me
            </button>

            <button className="bg-white hover:bg-gray-100 transition-all px-8 py-4 rounded-2xl font-medium flex items-center gap-3 shadow-sm">
              Download CV

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-5 h-5"
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
          <div className="flex items-center gap-6 pt-10 flex-wrap">
            {[
              'Instagram',
              'LinkedIn',
              'Dribbble',
              'GitHub',
            ].map((item, index) => (
              <div
                key={index}
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:-translate-y-1 transition-all cursor-pointer text-sm font-semibold"
              >
                {item.charAt(0)}
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex items-center justify-center">
          <div className="w-[320px] h-[320px] md:w-[500px] md:h-[500px] rounded-full bg-cyan-500 overflow-hidden shadow-2xl flex items-end justify-center">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>

      {/* About Section */}
      <section
        id="about"
        className="px-6 md:px-20 py-24 bg-white grid md:grid-cols-2 gap-16 items-center"
      >
        <div>
          <h2 className="text-5xl font-bold mb-6">About Me</h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            I build modern, responsive, and high-performance websites using
            React, Tailwind CSS, and creative UI/UX principles.
          </p>
        </div>

        <div className="bg-[#f5f5f5] rounded-3xl p-10 shadow-lg">
          <div className="grid grid-cols-2 gap-6 text-center">
            <div>
              <h3 className="text-4xl font-bold text-violet-600">3+</h3>
              <p className="text-gray-500 mt-2">Years Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-500">50+</h3>
              <p className="text-gray-500 mt-2">Projects Done</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="px-6 md:px-20 py-24 bg-[#f5f5f5]"
      >
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">Projects</h2>

          <p className="text-gray-500 mt-4 text-lg">
            Recent works and featured designs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={`https://picsum.photos/500/300?random=${item}`}
                alt="project"
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Creative Project</h3>

                <p className="text-gray-600">
                  Modern responsive UI design with clean user experience.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="px-6 md:px-20 py-24 bg-white"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Contact Me</h2>

          <p className="text-gray-600 text-lg mb-12">
            Have a project idea? Let's build something amazing together.
          </p>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-5 rounded-2xl border-none outline-none shadow-sm"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-5 rounded-2xl border-none outline-none shadow-sm"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full p-5 rounded-2xl border-none outline-none shadow-sm"
            />

            <button className="bg-violet-600 hover:bg-violet-700 text-white px-10 py-4 rounded-2xl font-semibold transition-all">
              Send Message
            </button>
          </form>
        </div>
      </section>

    </div>
  )
}
