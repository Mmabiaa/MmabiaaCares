"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart } from "lucide-react"
import Link from "next/link"

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
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-black text-white">Get In Touch</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Contact
              <span className="block text-black">Mmabiaa Cares</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We'd love to hear from you. Whether you have questions about our programs, want to volunteer, 
              or need support, our team is here to help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-black rounded-full\
