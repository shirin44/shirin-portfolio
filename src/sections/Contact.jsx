import { useState } from 'react'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import { Mail, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all fields')
      return
    }

    setLoading(true)
    try {
      await emailjs.send(
        'service_rkz56ng',
        'template_duwhh3o',
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        '8ZRDaEyS2_t72DkFZ'
      )
      toast.success('Message sent successfully!')
      setForm({ name: '', email: '', message: '' })
    } catch (error) {
      console.error(error)
      toast.error('Failed to send message.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      tabIndex={-1}
      className=" snap-start relative h-screen  flex items-center justify-center px-4 sm:px-6 md:px-12 py-16 sm:py-24 bg-gradient-to-br from-[#FFF8F0] via-[#FAF3E0] to-[#F4E2D8] text-[#322828] overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 sm:w-96 sm:h-96 bg-[#B23A48]/30 blur-3xl rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-0 -right-20 w-72 h-72 sm:w-96 sm:h-96 bg-[#5F4B44]/30 blur-2xl rounded-full z-0 animate-pulse" />

      <div className="max-w-5xl w-full flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12 items-start relative z-10">
        {/* Left: Contact Info */}
        <div className="text-center md:text-left space-y-4 md:space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#B23A48]">Let's Connect</h2>
          <p className="text-base sm:text-lg text-[#5F4B44]">
            Got a <strong>project</strong>, idea, or just want to say <em>hi</em>? Feel free to reach out!
          </p>

          <div className="space-y-4 text-left">
            <a
              href="mailto:shirinshujaa2468@gmail.com"
              className="flex items-center gap-3 text-[#322828] hover:text-[#B23A48] transition-all"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">shirinshujaa2468@gmail.com</span>
            </a>

            <a
              href="https://linkedin.com/in/shirin-shujaa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#322828] hover:text-[#B23A48] transition-all"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-medium">LinkedIn: Shirin Shujaa</span>
            </a>

            <a
              href="https://github.com/shirin44"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#322828] hover:text-[#B23A48] transition-all"
            >
              <Github className="w-5 h-5" />
              <span className="font-medium">github.com/shirin44</span>
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 text-left w-full"
        >
          <div>
            <label className="block text-sm font-medium text-[#5F4B44] mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full bg-white border border-[#CBD5C0] focus:outline-none focus:border-[#B23A48] py-2.5 sm:py-3 px-4 rounded-md text-sm placeholder:text-[#9A8D85] transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#5F4B44] mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="w-full bg-white border border-[#CBD5C0] focus:outline-none focus:border-[#B23A48] py-2.5 sm:py-3 px-4 rounded-md text-sm placeholder:text-[#9A8D85] transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#5F4B44] mb-1">Your Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Hi, I think we need a design system for our products..."
              className="w-full bg-white border border-[#CBD5C0] focus:outline-none focus:border-[#B23A48] py-2.5 sm:py-3 px-4 rounded-md text-sm resize-none placeholder:text-[#9A8D85] transition"
            />
          </div>

          <div className="text-center md:text-left">
            <button
              type="submit"
              disabled={loading}
              className="mt-4 sm:mt-6 inline-flex items-center justify-center w-full md:w-auto px-6 py-2.5 bg-[#B23A48] text-white rounded-md text-sm font-semibold tracking-wide hover:bg-[#9B2D3B] transition-all duration-300"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
