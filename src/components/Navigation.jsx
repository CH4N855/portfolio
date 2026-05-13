import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import img1 from '../assets/1.png'
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/1.png' // Update this to the actual path of your CV file
    link.download = 'CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <header className="w-full px-4 sm:px-6 md:px-20 py-4 md:py-6 flex items-center justify-between bg-[#f5f5f5] sticky top-0 z-50 shadow-sm animate-slideDown">
      <Link to="/" className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight no-underline hover:scale-110 transition-transform">
        <span className="text-cyan-500">Doe</span>
        <span className="text-gray-700">.</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 lg:gap-14 text-sm lg:text-[17px] font-medium">
        <Link
          to="/"
          className={`relative no-underline transition-colors hover:scale-110 ${
            isActive('/') ? 'text-violet-500 hover:text-violet-600' : 'text-gray-800 hover:text-violet-500'
          } ${isActive('/') ? 'after:absolute after:left-1/2 after:-translate-x-1/2 after:top-7 after:w-1.5 after:h-1.5 after:bg-violet-500 after:rounded-full' : ''}`}
        >
          Home
        </Link>

        <Link
          to="/about"
          className={`no-underline transition-colors hover:scale-110 ${
            isActive('/about') ? 'text-violet-500 hover:text-violet-600' : 'text-gray-800 hover:text-violet-500'
          }`}
        >
          About
        </Link>

        <Link
          to="/projects"
          className={`no-underline transition-colors hover:scale-110 ${
            isActive('/projects') ? 'text-violet-500 hover:text-violet-600' : 'text-gray-800 hover:text-violet-500'
          }`}
        >
          Projects
        </Link>

        <Link
          to="/contact"
          className={`no-underline transition-colors hover:scale-110 ${
            isActive('/contact') ? 'text-violet-500 hover:text-violet-600' : 'text-gray-800 hover:text-violet-500'
          }`}
        >
          Contact
        </Link>
      </nav>

      {/* Desktop Download Button */}
      <button
        onClick={handleDownloadCV}
        className="hidden md:flex items-center gap-2 lg:gap-3 bg-white px-4 lg:px-6 py-3 lg:py-4 rounded-2xl shadow-sm hover:shadow-md transition-all font-medium text-sm lg:text-base hover:scale-105 active:scale-95"
      >
        Download CV

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="w-4 h-4 lg:w-5 lg:h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16.5v-9m0 9l-3-3m3 3l3-3M4.5 19.5h15"
          />
        </svg>
      </button>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-200 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden animate-slideDown">
          <nav className="flex flex-col p-4 sm:p-6 space-y-3 sm:space-y-4">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`no-underline transition-colors font-medium py-2 hover:scale-105 ${
                isActive('/') ? 'text-violet-500 hover:text-violet-600' : 'text-gray-800 hover:text-violet-500'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`no-underline transition-colors font-medium py-2 hover:scale-105 ${
                isActive('/about') ? 'text-violet-500 hover:text-violet-600' : 'text-gray-800 hover:text-violet-500'
              }`}
            >
              About
            </Link>

            <Link
              to="/projects"
              onClick={() => setIsOpen(false)}
              className={`no-underline transition-colors font-medium py-2 hover:scale-105 ${
                isActive('/projects') ? 'text-violet-500 hover:text-violet-600' : 'text-gray-800 hover:text-violet-500'
              }`}
            >
              Projects
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`no-underline transition-colors font-medium py-2 hover:scale-105 ${
                isActive('/contact') ? 'text-violet-500 hover:text-violet-600' : 'text-gray-800 hover:text-violet-500'
              }`}
            >
              Contact
            </Link>

            <button
              onClick={handleDownloadCV}
              className="w-full flex items-center justify-center gap-2 bg-violet-600 text-white px-4 py-3 rounded-2xl hover:bg-violet-700 transition-all font-medium mt-4 active:scale-95"
            >
              Download CV

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5v-9m0 9l-3-3m3 3l3-3M4.5 19.5h15"
                />
              </svg>
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
