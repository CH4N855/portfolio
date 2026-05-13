import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const subject = encodeURIComponent(`New Message from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    
    window.location.href = `emailto:reactjs35@gmail.com ? subject=${subject}&body=${body}`

    
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col overflow-x-hidden">
      {/* Contact Section */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-slideDown">Get In Touch</h1>

            <p className="text-gray-600 text-base sm:text-lg animate-slideUp px-4">
              Have a project idea or want to collaborate? I'd love to hear from you. Feel free to reach out anytime!
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
            <a
              href="mailto:hello@johndoe.com"
              className="bg-[#f5f5f5] rounded-2xl p-6 sm:p-8 text-center hover:shadow-lg hover:-translate-y-2 transition-all cursor-pointer no-underline animate-slideLeft"
            >
              <div className="text-4xl mb-3 sm:mb-4">📧</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600 hover:text-violet-600 transition-colors text-sm sm:text-base break-all">reactjs35@gmail.com </p>
            </a>

            <a
              href="tel:+15551234567"
              className="bg-[#f5f5f5] rounded-2xl p-6 sm:p-8 text-center hover:shadow-lg hover:-translate-y-2 transition-all cursor-pointer no-underline animate-slideUp"
            >
              <div className="text-4xl mb-3 sm:mb-4">📱</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-600 hover:text-violet-600 transition-colors text-sm sm:text-base">+1 (555) 123-4567</p>
            </a>

            <div className="bg-[#f5f5f5] rounded-2xl p-6 sm:p-8 text-center hover:shadow-lg transition-shadow animate-slideRight">
              <div className="text-4xl mb-3 sm:mb-4">📍</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-600 text-sm sm:text-base">Cambodia</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#f5f5f5] rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg animate-slideUp">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Send Me a Message</h2>

            {submitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-2xl mb-6 text-sm sm:text-base animate-slideDown">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full p-3 sm:p-4 rounded-2xl border-2 border-gray-200 outline-none focus:border-violet-500 transition-colors text-sm sm:text-base"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-semibold mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="reactjs35@gmail.com"
                  required
                  className="w-full p-3 sm:p-4 rounded-2xl border-2 border-gray-200 outline-none focus:border-violet-500 transition-colors text-sm sm:text-base"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-semibold mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell me about your project or idea..."
                  required
                  className="w-full p-3 sm:p-4 rounded-2xl border-2 border-gray-200 outline-none focus:border-violet-500 transition-colors resize-none text-sm sm:text-base"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-violet-600 hover:bg-violet-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-2xl font-semibold transition-all shadow-lg shadow-violet-200 hover:scale-105 active:scale-95 text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links */}
          {/* <div className="mt-12 sm:mt-16 text-center animate-slideUp">
            <h3 className="text-2xl sm:mt-2 font-bold mb-4 sm:mb-6">Connect With Me</h3>
            <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
              {[
                { name: 'Instagram', icon: '📷', href: '#' },
                { name: 'LinkedIn', icon: '💼', href: '#' },
                { name: 'GitHub', icon: '🔗', href: '#' },
                { name: 'Twitter', icon: '𝕏', href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 rounded-full flex items-center justify-center text-xl sm:text-2xl hover:-translate-y-2 hover:shadow-lg transition-all cursor-pointer hover:bg-violet-100"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div> */}
        </div>
      </section>
    </div>
  )
}
