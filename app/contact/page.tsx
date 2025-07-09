"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const departments = [
  { value: "general", label: "General Inquiry" },
  { value: "donations", label: "Donations & Partnerships" },
  { value: "volunteer", label: "Volunteer Opportunities" },
  { value: "programs", label: "Program Information" },
  { value: "media", label: "Media & Press" },
  { value: "support", label: "Technical Support" },
]

const officeHours = [
  { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
  { day: "Sunday", hours: "Closed" },
]

const teamContacts = [
  {
    name: "Rev. Emmanuel Asante",
    role: "Executive Director",
    email: "emmanuel@mmabiaacares.org",
    phone: "+233 24 123 4567",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Dr. Akosua Mensah",
    role: "Program Director",
    email: "akosua@mmabiaacares.org",
    phone: "+233 24 234 5678",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Sarah Johnson",
    role: "International Relations",
    email: "sarah@mmabiaacares.org",
    phone: "+1 555 123 4567",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    subject: '',
    message: '',
    newsletter: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    // Reset form or show success message
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Mmabiaa Cares</h1>
                <p className="text-xs text-gray-600">Transforming Communities</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-black transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-black transition-colors">
                About
              </Link>
              <Link href="/programs" className="text-gray-700 hover:text-black transition-colors">
                Programs
              </Link>
              <Link href="/impact" className="text-gray-700 hover:text-black transition-colors">
                Impact
              </Link>
              <Link href="/volunteer" className="text-gray-700 hover:text-black transition-colors">
                Volunteer
              </Link>
              <Button className="bg-black hover:bg-gray-800 text-white">
                <Link href="/donate">Donate Now</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
        {/* Background image */}
        <Image
          src="https://i.pinimg.com/736x/c2/38/37/c23837d30d89a1ffe97807f5bb32d668.jpg"
          alt="Contact background"
          fill
          className="object-cover z-0"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-black text-white">Get In Touch</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact
              <span className="block text-white">Mmabiaa Cares</span>
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              We'd love to hear from you. Whether you have questions about our programs, want to volunteer, 
              or need support, our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                  required
                />
              </div>
              <div className="md:col-span-2 flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                  className="mr-2 h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                />
                <label htmlFor="newsletter" className="text-sm text-gray-700">
                  Subscribe to our newsletter
                </label>
              </div>
              <div className="md:col-span-2">
                <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-6">
              If you have any questions or feedback, please don't hesitate to reach out to us.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Heart className="w-6 h-6 text-black mr-3 flex-shrink-0" />
                <span className="text-gray-700">Mmabiaa Cares, P.O. Box 1234, Accra, Ghana</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-black mr-3"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.06 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.06-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:+233241234567" className="text-gray-700 hover:text-black transition-colors">+233 24 123 4567</a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-black mr-3"><path d="M21 10c0 6.07-8 12-8 12s-8-5.93-8-12a8 8 0 0 1 16 0Z"/></svg>
                <a href="mailto:info@mmabiaacares.org" className="text-gray-700 hover:text-black transition-colors">info@mmabiaacares.org</a>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Office Hours</h3>
            <ul className="space-y-4">
              {officeHours.map((hour, index) => (
                <li key={index} className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-black mr-3"><path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v7"/></svg>
                  <span className="text-gray-700">{hour.day}: {hour.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Team</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {teamContacts.map((contact, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
                    <img src={contact.image} alt={contact.name} className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{contact.name}</h4>
                    <p className="text-sm text-gray-600">{contact.role}</p>
                    <p className="text-sm text-gray-700">{contact.email}</p>
                    <p className="text-sm text-gray-700">{contact.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
