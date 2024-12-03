import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <div id="contact" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-xl text-gray-500">
            Let's discuss how we can help your startup succeed
          </p>
        </div>

        <div className="mt-20 max-w-lg mx-auto">
          <form className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 py-3 px-6 rounded-md text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 space-y-4">
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-indigo-600" />
              <span className="ml-3 text-gray-500">contact@dusky.tech</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-indigo-600" />
              <span className="ml-3 text-gray-500">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-6 w-6 text-indigo-600" />
              <span className="ml-3 text-gray-500">123 Innovation Street, Tech City, TC 12345</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}