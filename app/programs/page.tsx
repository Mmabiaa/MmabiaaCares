"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, GraduationCap, Utensils, Shield, TrendingUp, CheckCircle, Home, Info, Target, HandHeart, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/ui/theme-toggle"

const programs = [
  {
    id: "food-outreach",
    title: "Food Outreach Program",
    icon: Utensils,
    description:
      "Addressing food insecurity through daily meal programs, emergency food distribution, and nutrition education for vulnerable families and children.",
    image: "https://i.pinimg.com/1200x/e7/29/c1/e729c19b8f1fdbf5a5cfec0778367c58.jpg",
    stats: {
      beneficiaries: "2,156",
      communities: "23",
      monthlyMeals: "8,450",
    },
    impact:
      "In the past year, our food program has prevented malnutrition in over 500 children and provided emergency food relief to 150 families during the dry season.",
    activities: [
      "Daily school feeding program",
      "Emergency food distribution",
      "Nutrition education workshops",
      "Community gardens development",
      "Food preservation training",
    ],
    testimonial: {
      quote:
        "My children no longer go to school hungry. The daily meals have improved their concentration and grades significantly.",
      author: "Akosua Mensah",
      role: "Mother of 3, Kumasi",
    },
    donationImpact: {
      $25: "Feeds 8 children for one day",
      $50: "Provides a week of meals for a family",
      $100: "Supports monthly nutrition education for 20 families",
    },
  },
  {
    id: "education",
    title: "Education Initiative",
    icon: GraduationCap,
    description:
      "Empowering communities through quality education, scholarships, literacy programs, and educational infrastructure development.",
    image: "https://i.pinimg.com/1200x/81/7b/78/817b782738959b6710913ce700ff81d3.jpg",
    stats: {
      beneficiaries: "1,847",
      communities: "18",
      scholarships: "156",
    },
    impact:
      "Our education program has increased school enrollment by 40% in target communities and improved literacy rates among adults by 65%.",
    activities: [
      "Scholarship programs for vulnerable children",
      "Adult literacy classes",
      "School infrastructure improvements",
      "Teacher training workshops",
      "Educational material distribution",
    ],
    testimonial: {
      quote:
        "The scholarship program allowed me to complete secondary school. Now I'm studying to become a nurse to serve my community.",
      author: "Kwame Osei",
      role: "Scholarship Recipient",
    },
    donationImpact: {
      $25: "Provides school supplies for one child",
      $50: "Funds one month of adult literacy classes",
      $100: "Supports a child's education for one term",
    },
  },
  {
    id: "healthcare",
    title: "Healthcare Access Program",
    icon: Shield,
    description:
      "Improving community health through mobile clinics, health education, preventive care, and access to essential medical services.",
    image: "https://i.pinimg.com/736x/2e/a1/ba/2ea1baf61986bee015a19869caadf880.jpg",
    stats: {
      beneficiaries: "3,245",
      communities: "15",
      clinics: "24",
    },
    impact:
      "Mobile health clinics have reduced preventable diseases by 55% and improved maternal health outcomes in rural communities.",
    activities: [
      "Mobile health clinic services",
      "Maternal and child health programs",
      "Health education workshops",
      "Vaccination campaigns",
      "Mental health support services",
    ],
    testimonial: {
      quote:
        "The mobile clinic saved my baby's life. Without it, we would have had to travel 50km to the nearest hospital.",
      author: "Ama Serwaa",
      role: "New Mother, Ashanti Region",
    },
    donationImpact: {
      $25: "Provides basic medical care for one person",
      $50: "Funds health education for 30 people",
      $100: "Supports mobile clinic operations for one day",
    },
  },
  {
    id: "empowerment",
    title: "Women & Children Empowerment",
    icon: Heart,
    description:
      "Building sustainable livelihoods through skills training, microfinance, women's cooperatives, and child protection programs.",
    image: "https://i.pinimg.com/736x/f4/be/33/f4be331406cc609d79030012e9de2f58.jpg",
    stats: {
      beneficiaries: "892",
      communities: "12",
      businesses: "67",
    },
    impact:
      "Women's income has increased by an average of 180% after completing our skills training and microfinance programs.",
    activities: [
      "Skills training workshops",
      "Microfinance and savings groups",
      "Women's cooperative development",
      "Child protection programs",
      "Leadership development training",
    ],
    testimonial: {
      quote:
        "The sewing skills I learned helped me start my own business. Now I can support my family and employ two other women.",
      author: "Efua Asante",
      role: "Entrepreneur, Central Region",
    },
    donationImpact: {
      $25: "Provides training materials for one woman",
      $50: "Funds a microfinance loan for small business",
      $100: "Supports complete skills training program",
    },
  },
]

export default function ProgramsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("programs")

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
    { id: "volunteer", label: "Volunteer", icon: HandHeart, href: "/volunteer" },
    
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
                    item.id === "programs"
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
          src="https://i.pinimg.com/736x/96/59/b6/9659b6909a3416d27c50c875e00a403a.jpg"
          alt="Programs background"
          fill
          className="object-cover z-0"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-black text-white">Our Programs</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Community
              <span className="block text-white">Development Programs</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Our four core programs work together to address the root causes of poverty and create sustainable
              change in communities across Ghana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
                <Link href="/donate">Support Our Programs</Link>
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

      {/* Programs Detail */}
      {programs.map((program, index) => (
        <section key={program.id} className={`py-16 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <program.icon className="w-12 h-12 mb-3" />
                      <h3 className="text-2xl font-bold">{program.title}</h3>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <Badge className="mb-4 bg-black text-white">Program {index + 1}</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{program.title}</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{program.description}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 bg-gray-100 rounded-lg">
                      <div className="text-2xl font-bold text-black">{program.stats.beneficiaries}</div>
                      <div className="text-sm text-gray-600">Beneficiaries</div>
                    </div>
                    <div className="text-center p-4 bg-gray-100 rounded-lg">
                      <div className="text-2xl font-bold text-black">{program.stats.communities}</div>
                      <div className="text-sm text-gray-600">Communities</div>
                    </div>
                    <div className="text-center p-4 bg-gray-100 rounded-lg">
                      <div className="text-2xl font-bold text-black">{Object.values(program.stats)[2]}</div>
                      <div className="text-sm text-gray-600">
                        {Object.keys(program.stats)[2]
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase())}
                      </div>
                    </div>
                  </div>

                  {/* Impact Statement */}
                  <div className="bg-black text-white p-6 rounded-lg mb-6">
                    <TrendingUp className="w-6 h-6 mb-3" />
                    <p className="font-medium">{program.impact}</p>
                  </div>

                  {/* Activities */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Activities</h4>
                    <ul className="space-y-2">
                      {program.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 text-black mr-3 flex-shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="bg-black hover:bg-gray-800 text-white">
                    <Link href={`/donate?program=${program.id}`}>Support This Program</Link>
                  </Button>
                </div>
              </div>

              {/* Testimonial */}
              <div className="mt-12">
                <Card className="p-8 border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt={program.testimonial.author}
                          width={100}
                          height={100}
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <blockquote className="text-xl text-gray-700 mb-4 leading-relaxed">
                          "{program.testimonial.quote}"
                        </blockquote>
                        <div>
                          <p className="font-semibold text-gray-900">{program.testimonial.author}</p>
                          <p className="text-black">{program.testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Donation Impact */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Your Impact</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.entries(program.donationImpact).map(([amount, impact]) => (
                    <Card
                      key={amount}
                      className="p-4 text-center border-2 border-gray-100 hover:border-black transition-colors"
                    >
                      <CardContent className="p-0">
                        <div className="text-xl font-bold text-black mb-2">{amount}</div>
                        <div className="text-sm text-gray-600">{impact}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Choose Your Impact</h2>
            <p className="text-xl mb-8 opacity-90">
              Support the program that resonates with your heart, or contribute to our general fund to support all four
              pillars of transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                <Link href="/donate">Donate to All Programs</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                <Link href="/volunteer">Volunteer Your Skills</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
