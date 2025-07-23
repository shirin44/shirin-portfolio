import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent (not yet wired to backend)");
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-start px-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="w-full border p-3 rounded"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          className="w-full border p-3 rounded"
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows="5"
          className="w-full border p-3 rounded"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
