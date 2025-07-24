import { useState } from 'react'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

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
      className="h-screen snap-start focus:outline-none flex items-center justify-center px-4 md:px-0 bg-[#FAF3E0] text-[#322828] animate-fadeIn"
    >
      <div className="max-w-3xl w-full py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#B23A48] mb-2 animate-fade-in">
          Send me a message!
        </h2>
        <p className="text-lg text-[#5F4B44] mb-12 animate-fade-in delay-200">
          Got a question or proposal, or just want to say hello? Go ahead.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left animate-fade-in delay-300"
        >
          <div>
            <label className="block text-sm font-medium text-[#5F4B44] mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full bg-transparent border-b border-[#CBD5C0] focus:outline-none focus:border-[#B23A48] py-2 text-[#322828] placeholder:text-[#9A8D85] transition-all duration-300"
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
              className="w-full bg-transparent border-b border-[#CBD5C0] focus:outline-none focus:border-[#B23A48] py-2 text-[#322828] placeholder:text-[#9A8D85] transition-all duration-300"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-[#5F4B44] mb-1">Your Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={3}
              placeholder="Hi, I think we need a design system for our products..."
              className="w-full bg-transparent border-b border-[#CBD5C0] focus:outline-none focus:border-[#B23A48] py-2 resize-none text-[#322828] placeholder:text-[#9A8D85] transition-all duration-300"
            />
          </div>

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              disabled={loading}
              className="mt-12 inline-flex items-center px-6 py-3 border border-[#B23A48] text-[#B23A48] rounded-md text-sm font-semibold tracking-wide hover:bg-[#F7E8A4]/30 transition-all duration-300"
            >
              {loading ? 'Sending...' : 'SHOOT'}
              <span className="ml-3">→</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
