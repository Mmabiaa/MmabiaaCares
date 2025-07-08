"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Heart,
  GraduationCap,
  Shield,
  Camera,
  Laptop,
  Wrench,
  Calendar,
  MapPin,
  Clock,
  Star,
  Download,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const volunteerRoles = [
  {
    id: "field-volunteer",
    title: "Field Volunteer",
    icon: Heart,
    description:
      "Work directly with communities in Ghana, helping with food distribution, education programs, and healthcare initiatives.",
    commitment: "2-4 weeks minimum",
    location: "Ghana (Kumasi, Accra)",
    skills: ["Cultural sensitivity", "Physical fitness", "Basic first aid"],
    responsibilities: [
      "Assist with daily meal programs",
      "Support education activities",
      "Help with community health screenings",
      "Document program activities",
    ],
    testimonial: {
      quote:
        "Working directly with the children changed my perspective on life. Their resilience and joy despite challenges was inspiring.",
      author: "Sarah Mitchell",
      role: "Field Volunteer 2023",
    },
  },
  {
    id: "education-specialist",
    title: "Education Specialist",
    icon: GraduationCap,
    description: "Support our education programs by teaching, developing curriculum, or training local teachers.",
    commitment: "3-6 months",
    location: "Ghana or Remote",
    skills: ["Teaching experience", "Curriculum development", "English proficiency"],
    responsibilities: [
      "Teach in local schools",
      "Train community teachers",
      "Develop educational materials",
      "Assess learning outcomes",
    ],
    testimonial: {
      quote:
        "Seeing the hunger for learning in both children and adults motivated me to extend my volunteer period twice.",
      author: "Michael Chen",
      role: "Education Volunteer",
    },
  },
  {
    id: "healthcare-volunteer",
    title: "Healthcare Volunteer",
    icon: Shield,
    description: "Medical professionals supporting our mobile clinics and health education programs.",
    commitment: "2-8 weeks",
    location: "Ghana (Rural communities)",
    skills: ["Medical license", "Tropical medicine knowledge", "Community health experience"],
    responsibilities: [
      "Provide medical care in mobile clinics",
      "Conduct health education sessions",
      "Train community health workers",
      "Support maternal health programs",
    ],
    testimonial: {
      quote:
        "The mobile clinic work was challenging but incredibly rewarding. We made a real difference in maternal health outcomes.",
      author: "Dr. Amelia Rodriguez",
      role: "Medical Volunteer",
    },
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Specialist",
    icon: Laptop,
    description:
      "Help us reach more donors and volunteers through social media, content creation, and online campaigns.",
    commitment: "3-6 hours/week",
    location: "Remote",
    skills: ["Social media management", "Content creation", "Digital marketing"],
    responsibilities: [
      "Manage social media accounts",
      "Create engaging content",
      "Develop fundraising campaigns",
      "Analyze digital metrics",
    ],
    testimonial: {
      quote: "Being able to use my marketing skills to help such an important cause has been incredibly fulfilling.",
      author: "Jessica Park",
      role: "Digital Marketing Volunteer",
    },
  },
  {
    id: "photographer",
    title: "Photographer/Videographer",
    icon: Camera,
    description: "Document our programs and create compelling visual stories to share our impact with the world.",
    commitment: "2-4 weeks",
    location: "Ghana",
    skills: ["Photography/videography", "Photo editing", "Storytelling"],
    responsibilities: [
      "Document program activities",
      "Create impact stories",
      "Train local staff in photography",
      "Maintain photo/video archives",
    ],
    testimonial: {
      quote:
        "Capturing the stories of transformation through my lens was one of the most meaningful projects I've worked on.",
      author: "David Kim",
      role: "Photography Volunteer",
    },
  },
  {
    id: "skilled-trades",
    title: "Skilled Trades Volunteer",
    icon: Wrench,
    description: "Help build and maintain infrastructure for our programs - schools, clinics, and community centers.",
    commitment: "2-6 weeks",
    location: "Ghana",
    skills: ["Construction experience", "Electrical/plumbing", "Project management"],
    responsibilities: [
      "Build/repair school facilities",
      "Install water systems",
      "Maintain medical equipment",
      "Train local craftsmen",
    ],
    testimonial: {
      quote:
        "Building the new classroom with the community was amazing. Everyone worked together with such enthusiasm.",
      author: "Robert Thompson",
      role: "Construction Volunteer",
    },
  },
]

const faqs = [
  {
    question: "Do I need previous volunteer experience?",
    answer:
      "No previous volunteer experience is required for most roles. We provide comprehensive orientation and training for all volunteers.",
  },
  {
    question: "What are the costs involved?",
    answer:
      "Volunteers are responsible for their travel costs and accommodation. We provide meals during program activities and can help arrange affordable local accommodation.",
  },
  {
    question: "Is it safe to volunteer in Ghana?",
    answer:
      "Yes, Ghana is considered one of the safest countries in West Africa. We provide safety briefings and maintain close contact with all volunteers.",
  },
  {
    question: "What vaccinations do I need?",
    answer:
      "We recommend consulting with a travel medicine clinic. Common vaccinations include Yellow Fever, Hepatitis A/B, and Typhoid.",
  },
  {
    question: "Can I volunteer remotely?",
    answer:
      "Yes! We have several remote volunteer opportunities including digital marketing, grant writing, and virtual education support.",
  },
]

export default function VolunteerPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    skills: [] as string[],
    availability: "",
    motivation: "",
    experience: "",
    backgroundCheck: false,
  })

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
              <Link href="/volunteer" className="text-black font-medium">
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
            <Badge className="mb-6 bg-black text-white">Join Our Mission</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Volunteer with
              <span className="block text-black">Mmabiaa Cares</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join our global community of volunteers making a real difference in Ghana. Whether you can spare a few
              hours online or several weeks in the field, your skills and passion can transform lives.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-black">247</div>
                <div className="text-sm text-gray-600">Active Volunteers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-black">23</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-black">6</div>
                <div className="text-sm text-gray-600">Volunteer Roles</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-black">4.9</div>
                <div className="text-sm text-gray-600">Satisfaction Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Volunteer Opportunities</h2>
            <p className="text-gray-600 text-lg">Find the perfect way to contribute your skills and passion</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerRoles.map((role) => (
              <Card key={role.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <role.icon className="w-16 h-16 text-black" />
                  </div>
                  <Badge className="absolute top-4 left-4 bg-black text-white">{role.commitment}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{role.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{role.description}</p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <MapPin className="w-4 h-4 mr-2 text-black" />
                      {role.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <Clock className="w-4 h-4 mr-2 text-black" />
                      {role.commitment}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Required Skills:</h4>
                    <div className="flex flex-wrap gap-1">
                      {role.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    className="w-full bg-black hover:bg-gray-800 text-white"
                    onClick={() => setSelectedRole(role.id)}
                  >
                    Apply for This Role
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Volunteer Stories</h2>
            <p className="text-gray-600 text-lg">Hear from volunteers who've made a difference</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerRoles.slice(0, 3).map((role) => (
              <Card key={role.id} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-black fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 leading-relaxed">"{role.testimonial.quote}"</blockquote>
                  <div className="flex items-center">
                    <Image
                      src="/placeholder.svg?height=50&width=50"
                      alt={role.testimonial.author}
                      width={50}
                      height={50}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{role.testimonial.author}</p>
                      <p className="text-sm text-black">{role.testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      {selectedRole && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="shadow-xl border-0">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Volunteer Application</h2>
                    <p className="text-gray-600">
                      Applying for: <strong>{volunteerRoles.find((r) => r.id === selectedRole)?.title}</strong>
                    </p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="country">Country of Residence *</Label>
                      <Input
                        id="country"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="availability">Availability *</Label>
                      <select
                        id="availability"
                        value={formData.availability}
                        onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-black"
                      >
                        <option value="">Select your availability</option>
                        <option value="1-2 weeks">1-2 weeks</option>
                        <option value="3-4 weeks">3-4 weeks</option>
                        <option value="1-3 months">1-3 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="6+ months">6+ months</option>
                        <option value="ongoing-remote">Ongoing (Remote)</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="motivation">Why do you want to volunteer with Mmabiaa Cares? *</Label>
                      <Textarea
                        id="motivation"
                        value={formData.motivation}
                        onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                        className="mt-2"
                        rows={4}
                      />
                    </div>

                    <div>
                      <Label htmlFor="experience">Relevant Experience and Skills</Label>
                      <Textarea
                        id="experience"
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="mt-2"
                        rows={4}
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="backgroundCheck"
                        checked={formData.backgroundCheck}
                        onCheckedChange={(checked) => setFormData({ ...formData, backgroundCheck: checked as boolean })}
                      />
                      <Label htmlFor="backgroundCheck" className="text-sm">
                        I consent to a background check if required for this volunteer position *
                      </Label>
                    </div>

                    <div className="flex space-x-4">
                      <Button type="submit" className="flex-1 bg-black hover:bg-gray-800 text-white py-3">
                        Submit Application
                      </Button>
                      <Button type="button" variant="outline" onClick={() => setSelectedRole(null)} className="px-6">
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Volunteer Resources</h2>
            <p className="text-gray-600 text-lg">Everything you need to prepare for your volunteer experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <Download className="w-12 h-12 text-black mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Volunteer Handbook</h3>
                <p className="text-gray-600 mb-4">Complete guide with everything you need to know</p>
                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white bg-transparent"
                >
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <Calendar className="w-12 h-12 text-black mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Orientation Schedule</h3>
                <p className="text-gray-600 mb-4">Pre-departure and on-site orientation programs</p>
                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white bg-transparent"
                >
                  View Schedule
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <MessageCircle className="w-12 h-12 text-black mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Volunteer Community</h3>
                <p className="text-gray-600 mb-4">Connect with other volunteers and alumni</p>
                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white bg-transparent"
                >
                  Join Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 text-lg">Get answers to common volunteer questions</p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <Button className="bg-black hover:bg-gray-800 text-white">
                <Link href="/contact">Contact Our Volunteer Coordinator</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
