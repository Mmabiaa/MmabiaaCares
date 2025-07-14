"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Target, Award, Mail, Linkedin, Quote, Home, Info, HandHeart, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/ui/theme-toggle"

const teamMembers = [
  {
    name: "Rev. Emmanuel Asante",
    role: "Founder & Executive Director",
    bio: "With over 15 years in community development, Rev. Asante founded Mmabiaa Cares to serve the most vulnerable communities in Ghana.",
    quote: "I serve because Christ calls us to love our neighbors as ourselves.",
    image: "https://i.pinimg.com/1200x/58/ad/7a/58ad7a0e9878f69f6c8a5a93c60ca2d7.jpg",
    email: "emmanuel@mmabiaacares.org",
    linkedin: "#",
  },
  {
    name: "Dr. Akosua Mensah",
    role: "Program Director",
    bio: "Former WHO consultant with expertise in public health and community nutrition programs across West Africa.",
    quote: "Every child deserves the chance to reach their full potential.",
    image: "https://i.pinimg.com/1200x/81/7b/78/817b782738959b6710913ce700ff81d3.jpg",
    email: "akosua@mmabiaacares.org",
    linkedin: "#",
  },
  {
    name: "Kwame Osei",
    role: "Operations Manager",
    bio: "Local community leader with deep connections across Ashanti region and 10+ years in nonprofit management.",
    quote: "Real change happens when communities lead their own transformation.",
    image: "https://i.pinimg.com/1200x/c9/31/45/c931451ef5a9518b2317f4ca2615069e.jpg",
    email: "kwame@mmabiaacares.org",
    linkedin: "#",
  },
  {
    name: "Sarah Johnson",
    role: "International Relations",
    bio: "Bridges our Ghana operations with international donors and volunteers, ensuring transparent communication.",
    quote: "Transparency builds trust, and trust builds lasting partnerships.",
    image: "/placeholder.svg?height=300&width=300",
    email: "sarah@mmabiaacares.org",
    linkedin: "#",
  },
]

const milestones = [
  {
    year: "2024",
    title: "Foundation Established",
    description: "Mmabiaa Cares officially registered as a nonprofit organization in Ghana",
  },
  {
    year: "2025",
    title: "First Food Program",
    description: "Launched emergency food distribution during COVID-19 pandemic",
  },
  {
    year: "2025",
    title: "Education Initiative",
    description: "Started school feeding program and scholarship fund for vulnerable children",
  },
  {
    year: "2025",
    title: "Healthcare Expansion",
    description: "Opened mobile health clinic serving 15 rural communities",
  },
  {
    year: "2025",
    title: "Women's Empowerment",
    description: "Launched microfinance and skills training programs for women",
  },
  {
    year: "2025",
    title: "International Recognition",
    description: "Received UN Sustainable Development Goals Partnership Award",
  },
]

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  // Navigation items for bottom bar
  const navItems = [
    { id: "home", label: "Home", icon: Home, href: "/" },
    { id: "about", label: "About", icon: Info, href: "/about" },
    { id: "programs", label: "Programs", icon: Target, href: "/programs" },
    { id: "impact", label: "Impact", icon: Heart, href: "/impact" },
    { id: "volunteer", label: "Volunteer", icon: HandHeart, href: "/volunteer" }
  ]

  return (
    <div className="min-h-screen bg-white pb-20 md:pb-0">
      {/* Top Header - Branding Only */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 dark:bg-gray-900/95 dark:border-gray-800">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                <Heart className="w-6 h-6 text-white dark:text-black" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Mmabiaa Cares</h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">Transforming Communities</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.slice(1).map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`transition-colors font-medium ${
                    item.id === "about"
                      ? "text-black dark:text-white"
                      : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-black">
                <Link href="/donate">Donate Now</Link>
              </Button>
              <ThemeToggle />
            </nav>

            {/* Mobile Actions */}
            <div className="flex items-center space-x-2 lg:hidden">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
                className="p-2"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden" 
            aria-hidden="true" 
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed inset-y-0 right-0 z-50 w-80 max-w-[85vw] bg-white dark:bg-gray-900 shadow-2xl lg:hidden">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white dark:text-black" />
                  </div>
                  <span className="text-lg font-bold text-gray-900 dark:text-white">Menu</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-2"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 px-6 py-6 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>

              {/* Donate Button */}
              <div className="p-6 border-t border-gray-200 dark:border-gray-800">
                <Button className="w-full bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-black font-semibold py-3">
                  <Heart className="w-4 h-4 mr-2" />
                  Donate Now
                </Button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Bottom Navigation Bar - Mobile Only */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 lg:hidden">
        <div className="flex justify-around items-center px-2 py-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all duration-200 min-w-[60px] ${
                  isActive
                    ? "text-black dark:text-white bg-gray-100 dark:bg-gray-800"
                    : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
                onClick={() => setActiveSection(item.id)}
                aria-label={`Navigate to ${item.label}`}
              >
                <Icon className={`w-5 h-5 mb-1 ${isActive ? "scale-110" : ""} transition-transform`} />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
        {/* Background image */}
        <Image
          src="https://i.pinimg.com/736x/c2/38/37/c23837d30d89a1ffe97807f5bb32d668.jpg"
          alt="About Mmabiaa Cares background"
          fill
          className="object-cover z-0"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-black text-white">Our Story</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transforming Communities Through
              <span className="block text-white">Faith, Hope & Action</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Founded in 2019, Mmabiaa Cares has grown from a small faith-based initiative to a recognized nonprofit
              organization serving over 45 communities across Ghana's Ashanti, Central, and Northern regions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
                <Link href="/donate">Support Our Mission</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                <Link href="/volunteer">Join Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower vulnerable communities in Ghana through sustainable programs in food security, education,
                  healthcare, and women & children empowerment, guided by Christian values of love and service.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  A Ghana where every community has access to basic necessities, quality education, healthcare, and
                  opportunities for sustainable development, creating lasting transformation for generations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                <ul className="text-gray-600 text-left space-y-2">
                  <li>
                    • <strong>Compassion:</strong> Serving with love and empathy
                  </li>
                  <li>
                    • <strong>Integrity:</strong> Transparent and accountable
                  </li>
                  <li>
                    • <strong>Excellence:</strong> Quality in all we do
                  </li>
                  <li>
                    • <strong>Community:</strong> Local ownership and participation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 text-lg">Key milestones in our mission to transform communities</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-black"></div>

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-8 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="p-6 shadow-lg border-0">
                      <CardContent className="p-0">
                        <Badge className="mb-2 bg-black text-white">{milestone.year}</Badge>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-lg">Dedicated leaders committed to community transformation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-black font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>

                  <div className="bg-gray-50 p-3 rounded-lg mb-4">
                    <Quote className="w-4 h-4 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-700 italic">"{member.quote}"</p>
                  </div>

                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Mail className="w-4 h-4 mr-1" />
                      Email
                    </Button>
                    <Button variant="outline" size="sm">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials & Partnerships */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Credentials & Partnerships</h2>
            <p className="text-gray-600 text-lg">Trusted by communities and recognized by institutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center border-0 shadow-lg">
              <CardContent className="p-0">
                <Award className="w-12 h-12 text-black mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Registered Nonprofit</h3>
                <p className="text-gray-600 mb-4">Officially registered with Ghana's Department of Social Welfare</p>
                <Badge variant="secondary">Reg. No: DSW/2019/0847</Badge>
              </CardContent>
            </Card>

            <Card className="p-6 text-center border-0 shadow-lg">
              <CardContent className="p-0">
                <Users className="w-12 h-12 text-black mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">UN Partnership</h3>
                <p className="text-gray-600 mb-4">
                  Recognized partner for Sustainable Development Goals implementation
                </p>
                <Badge variant="secondary">SDG Partner 2024</Badge>
              </CardContent>
            </Card>

            <Card className="p-6 text-center border-0 shadow-lg">
              <CardContent className="p-0">
                <Target className="w-12 h-12 text-black mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Financial Transparency</h3>
                <p className="text-gray-600 mb-4">Annual audits and public financial reporting for donor confidence</p>
                <Button variant="outline" size="sm">
                  <Link href="/contact">View Reports</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Story</h2>
            <p className="text-xl mb-8 opacity-90">
              Be part of the transformation happening across Ghana. Your support creates lasting change in communities
              that need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                <Link href="/donate">Donate Today</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                <Link href="/volunteer">Volunteer With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
