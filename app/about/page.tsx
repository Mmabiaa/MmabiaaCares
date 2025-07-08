"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Target, Award, Mail, Linkedin, Quote } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const teamMembers = [
  {
    name: "Rev. Emmanuel Asante",
    role: "Founder & Executive Director",
    bio: "With over 15 years in community development, Rev. Asante founded Mmabiaa Cares to serve the most vulnerable communities in Ghana.",
    quote: "I serve because Christ calls us to love our neighbors as ourselves.",
    image: "/placeholder.svg?height=300&width=300",
    email: "emmanuel@mmabiaacares.org",
    linkedin: "#",
  },
  {
    name: "Dr. Akosua Mensah",
    role: "Program Director",
    bio: "Former WHO consultant with expertise in public health and community nutrition programs across West Africa.",
    quote: "Every child deserves the chance to reach their full potential.",
    image: "/placeholder.svg?height=300&width=300",
    email: "akosua@mmabiaacares.org",
    linkedin: "#",
  },
  {
    name: "Kwame Osei",
    role: "Operations Manager",
    bio: "Local community leader with deep connections across Ashanti region and 10+ years in nonprofit management.",
    quote: "Real change happens when communities lead their own transformation.",
    image: "/placeholder.svg?height=300&width=300",
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
    year: "2019",
    title: "Foundation Established",
    description: "Mmabiaa Cares officially registered as a nonprofit organization in Ghana",
  },
  {
    year: "2020",
    title: "First Food Program",
    description: "Launched emergency food distribution during COVID-19 pandemic",
  },
  {
    year: "2021",
    title: "Education Initiative",
    description: "Started school feeding program and scholarship fund for vulnerable children",
  },
  {
    year: "2022",
    title: "Healthcare Expansion",
    description: "Opened mobile health clinic serving 15 rural communities",
  },
  {
    year: "2023",
    title: "Women's Empowerment",
    description: "Launched microfinance and skills training programs for women",
  },
  {
    year: "2024",
    title: "International Recognition",
    description: "Received UN Sustainable Development Goals Partnership Award",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - Same as home page */}
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
              <Link href="/about" className="text-black font-medium">
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
      <section className="relative py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-black text-white">Our Story</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transforming Communities Through
              <span className="block text-black">Faith, Hope & Action</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
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
                className="border-black text-black hover:bg-black hover:text-white bg-transparent"
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
                  <Link href="/financial-reports">View Reports</Link>
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
