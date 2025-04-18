'use client'

import React, { useRef } from 'react'
import toast from 'react-hot-toast'

const Contactme = () => {
  const form = useRef<HTMLFormElement | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    toast.promise(
      new Promise((resolve) => {
        setTimeout(() => {
          resolve('done')
        }, 1500)
      }),
      {
        loading: 'Sending message...',
        success:
          'This is a demo. No message was sent. You can reach me directly at adirg.dev ✉️',
        error: 'Oops! Something went wrong.',
      },
      {
        style: {
          background: '#fff',
          color: '#000',
        },
        success: {
          duration: 6000,
        },
        error: {
          duration: 5000,
        },
      }
    )

    // Reset form fields
    if (form.current) form.current.reset()
  }

  return (
    <section
      id="contact"
      className="bg-white min-h-screen mt-[250px] dark:bg-gray-900 px-4 py-12 sm:py-16"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-4">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 text-base sm:text-lg mb-10">
          For further questions, including partnership opportunities, please
          email{' '}
          <a
            href="mailto:2000adir2000@gmail.com"
            className="text-blue-600 underline"
          >
            2000adir2000@gmail.com
          </a>{' '}
          or use the form below.
        </p>

        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-3 text-sm rounded-lg border border-gray-300 shadow-sm bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-blue-500 focus:border-blue-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="w-full p-3 text-sm rounded-lg border border-gray-300 shadow-sm bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-blue-500 focus:border-blue-500"
            required
          />

          <input
            type="text"
            name="title"
            placeholder="Subject"
            className="w-full p-3 text-sm rounded-lg border border-gray-300 shadow-sm bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-blue-500 focus:border-blue-500"
            required
          />

          <textarea
            name="message"
            rows={6}
            placeholder="Type your message here..."
            className="w-full p-3 text-sm rounded-lg border border-gray-300 shadow-sm bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-blue-500 focus:border-blue-500"
            required
          />

          <button
            type="submit"
            className="bg-[#D8FC68] hover:bg-[#c6eb59] text-black text-sm font-medium py-3 px-6 rounded-lg transition focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 w-full sm:w-auto"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contactme
