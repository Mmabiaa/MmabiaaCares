"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Heart,
  Users,
  GraduationCap,
  Utensils,
  Shield,
  Play,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Clock,
  Star,
  ArrowRight,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
// Import carousel components
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

// Animated counter component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

// Testimonial data
const testimonials = [
  {
    name: "Akosua Mensah",
    role: "Beneficiary Mother",
    location: "Kumasi, Ghana",
    quote:
      "Mmabiaa Cares provided my children with school supplies and meals when we had nothing. They gave us hope when we needed it most.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Dr. Sarah Johnson",
    role: "Monthly Donor",
    location: "London, UK",
    quote:
      "I've been supporting Mmabiaa Cares for 2 years. Their transparency and real impact stories keep me motivated to give monthly.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Kwame Asante",
    role: "Local Volunteer",
    location: "Accra, Ghana",
    quote:
      "Volunteering with Mmabiaa Cares has been life-changing. We're not just helping others - we're building stronger communities together.",
    image: "/placeholder.svg?height=80&width=80",
  },
]

// Hero carousel images (update this array to change images)
const heroCarouselImages = [
  "https://i.pinimg.com/736x/7d/1a/a3/7d1aa30d26fa23d48604aea4f85e79e4.jpg",
  "https://i.pinimg.com/736x/93/f4/56/93f456a574e3e7f538da7355b5d8c7c0.jpg",
  "https://i.pinimg.com/736x/66/0e/ef/660eef3ef655750b7f5940a88098e314.jpg",
  "https://i.pinimg.com/736x/b3/ca/59/b3ca59412cafcf6e12dc8b243470b9ba.jpg",
  "https://i.pinimg.com/736x/f7/d7/d0/f7d7d0ccfd7bbf564ec2a7df2023c618.jpg"
]

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-amber-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Mmabiaa Cares</h1>
                <p className="text-xs text-gray-600">Transforming Communities</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
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

            {/* Mobile menu button */}
            <Button variant="ghost" className="md:hidden">
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-gray-600"></div>
                <div className="w-full h-0.5 bg-gray-600"></div>
                <div className="w-full h-0.5 bg-gray-600"></div>
              </div>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 w-full h-full">
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {heroCarouselImages.map((img, idx) => (
                <CarouselItem key={idx} className="relative w-full h-full min-h-[90vh]">
                  <Image
                    src={img}
                    alt={`Hero carousel image ${idx + 1}`}
                    fill
                    className="object-cover"
                    priority={idx === 0}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-black/90 text-white border-0 px-4 py-2">Faith • Hope • Community</Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transforming Lives
            <br />
            <span className="text-white">One Community</span>
            <br />
            at a Time
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering communities across Ghana through food programs, education, healthcare, and women & children
            empowerment. Together, we build hope.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold">
              <Heart className="w-5 h-5 mr-2" />
              Donate Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg bg-transparent"
            >
              <Users className="w-5 h-5 mr-2" />
              Volunteer Today
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-white hover:bg-white/20 px-8 py-4 text-lg"
              onClick={() => setIsVideoPlaying(true)}
            >
              <Play className="w-5 h-5 mr-2" />
              See Our Work
            </Button>
          </div>

          <div className="mt-12 text-sm text-white/80">
            <p>🌟 Trusted by 1,247+ donors worldwide • Registered Nonprofit</p>
          </div>
        </div>
      </section>

      {/* Impact Counter Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
            <p className="text-gray-600 text-lg">Real change, measured and transparent</p>
            <Badge variant="secondary" className="mt-2">
              Updated 2 hours ago
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="w-8 h-8 text-black" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter end={12847} />
                </div>
                <p className="text-gray-600 font-medium">Meals Served</p>
                <p className="text-sm text-gray-500 mt-1">This month: +2,156</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-gray-800" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter end={2156} />
                </div>
                <p className="text-gray-600 font-medium">Kids Educated</p>
                <p className="text-sm text-gray-500 mt-1">This month: +342</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-gray-700" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter end={891} />
                </div>
                <p className="text-gray-600 font-medium">Families Helped</p>
                <p className="text-sm text-gray-500 mt-1">This month: +127</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-gray-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter end={45} />
                </div>
                <p className="text-gray-600 font-medium">Communities</p>
                <p className="text-sm text-gray-500 mt-1">Across 3 regions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Campaign */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="bg-red-100 text-red-800 mb-4">Urgent Campaign</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Emergency School Feeding Program</h2>
              <p className="text-gray-600 text-lg">
                Help us provide daily meals to 500 children in rural Ashanti region during the dry season
              </p>
            </div>

            <Card className="overflow-hidden shadow-xl">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Children waiting for meals in Ghana school"
                    width={600}
                    height={400}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-2xl font-bold text-gray-900">$18,450</span>
                      <span className="text-gray-600">of $25,000 goal</span>
                    </div>
                    <Progress value={74} className="h-3 mb-2" />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>74% funded</span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        12 days left
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-5 h-5 mr-3 text-amber-600" />
                      <span>Ashanti Region, Ghana</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Users className="w-5 h-5 mr-3 text-amber-600" />
                      <span>500 children will benefit</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-6">
                    <Button variant="outline" className="text-sm bg-transparent">
                      $25
                    </Button>
                    <Button variant="outline" className="text-sm bg-transparent">
                      $50
                    </Button>
                    <Button variant="outline" className="text-sm bg-transparent">
                      $100
                    </Button>
                  </div>

                  <Button className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3">
                    Donate to This Campaign
                  </Button>

                  <p className="text-xs text-gray-500 mt-2 text-center">$25 = feeds 8 children for one day</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive community support through four key pillars of development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Food distribution program"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Utensils className="w-8 h-8 mb-2" />
                  <h3 className="text-xl font-bold">Food Outreach</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Daily meal programs and emergency food distribution to vulnerable families and children.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-amber-600 font-medium">2,156 meals this month</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Education program"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <GraduationCap className="w-8 h-8 mb-2" />
                  <h3 className="text-xl font-bold">Education</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  School supplies, scholarships, and literacy programs for children and adults.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-600 font-medium">342 students supported</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Healthcare program"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Shield className="w-8 h-8 mb-2" />
                  <h3 className="text-xl font-bold">Healthcare</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Medical outreach, health education, and access to essential healthcare services.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-600 font-medium">127 families treated</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Women and children empowerment"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Heart className="w-8 h-8 mb-2" />
                  <h3 className="text-xl font-bold">Empowerment</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Skills training, microfinance, and support programs for women and children.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-600 font-medium">89 women trained</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white bg-transparent"
            >
              Learn More About Our Programs
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stories of Hope</h2>
            <p className="text-gray-600 text-lg">Hear from those whose lives have been transformed</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <Image
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      width={120}
                      height={120}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-black fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
                      "{testimonials[currentTestimonial].quote}"
                    </blockquote>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</p>
                      <p className="text-black font-medium">{testimonials[currentTestimonial].role}</p>
                      <p className="text-gray-500 text-sm">{testimonials[currentTestimonial].location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center items-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="rounded-full w-10 h-10 p-0"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? "bg-black" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="rounded-full w-10 h-10 p-0"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission Today</h2>
            <p className="text-xl mb-8 opacity-90">
              Every donation, every volunteer hour, every prayer makes a difference. Together, we can transform more
              communities across Ghana.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                <Heart className="w-5 h-5 mr-2" />
                Donate Monthly
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg bg-transparent"
              >
                <Users className="w-5 h-5 mr-2" />
                Become a Volunteer
              </Button>
            </div>

            <p className="text-sm mt-6 opacity-80">🔒 Secure donations • Tax-deductible • 100% goes to programs</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Mmabiaa Cares</h3>
                  <p className="text-sm text-gray-400">Transforming Communities</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                A faith-based nonprofit organization dedicated to empowering communities across Ghana through
                sustainable development programs.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="hover:text-white transition-colors">
                    Our Programs
                  </Link>
                </li>
                <li>
                  <Link href="/impact" className="hover:text-white transition-colors">
                    Impact Stories
                  </Link>
                </li>
                <li>
                  <Link href="/volunteer" className="hover:text-white transition-colors">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-white transition-colors">
                    Events
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/donate" className="hover:text-white transition-colors">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="hover:text-white transition-colors">
                    Sponsor a Child
                  </Link>
                </li>
                <li>
                  <Link href="/donate" className="hover:text-white transition-colors">
                    Monthly Giving
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="hover:text-white transition-colors">
                    Corporate Partners
                  </Link>
                </li>
                <li>
                  <Link href="/impact" className="hover:text-white transition-colors">
                    Financial Reports
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">Kumasi, Ashanti Region, Ghana</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">+233 24 123 4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm">info@mmabiaacares.org</span>
                </div>
              </div>

              <div className="mt-6">
                <h5 className="font-medium mb-2">Newsletter</h5>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-sm focus:outline-none focus:border-black"
                  />
                  <Button className="bg-black hover:bg-gray-800 rounded-l-none px-4">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Mmabiaa Cares. All rights reserved. | Registered Nonprofit Organization</p>
            <div className="flex justify-center space-x-6 mt-2 text-sm">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/impact" className="hover:text-white transition-colors">
                Financial Transparency
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
