import { useState } from 'react'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

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
      className="relative min-h-screen snap-start focus:outline-none flex items-center justify-center px-6 py-24 bg-gradient-to-br from-[#FFF8F0] via-[#FAF3E0] to-[#F4E2D8] text-[#322828] overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#B23A48]/30 blur-3xl rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-[#5F4B44]/30 blur-2xl rounded-full z-0 animate-pulse" />

      <div className="max-w-3xl w-full py-12 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-[#B23A48] mb-2">Send me a message!</h2>
        <p className="text-lg text-[#5F4B44] mb-12">Got a question or proposal, or just want to say hello? Go ahead.</p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left"
        >
          <div>
            <label className="block text-sm font-medium text-[#5F4B44] mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full bg-white border border-[#CBD5C0] focus:outline-none focus:border-[#B23A48] py-3 px-4 rounded-md shadow-sm placeholder:text-[#9A8D85] transition"
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
              className="w-full bg-white border border-[#CBD5C0] focus:outline-none focus:border-[#B23A48] py-3 px-4 rounded-md shadow-sm placeholder:text-[#9A8D85] transition"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-[#5F4B44] mb-1">Your Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Hi, I think we need a design system for our products..."
              className="w-full bg-white border border-[#CBD5C0] focus:outline-none focus:border-[#B23A48] py-3 px-4 rounded-md shadow-sm resize-none placeholder:text-[#9A8D85] transition"
            />
          </div>

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              disabled={loading}
              className="mt-8 inline-flex items-center px-6 py-3 bg-[#B23A48] text-white rounded-md text-sm font-semibold tracking-wide hover:bg-[#9B2D3B] transition-all duration-300"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
