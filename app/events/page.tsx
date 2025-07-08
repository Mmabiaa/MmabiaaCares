"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Heart, Calendar, MapPin, Users, Clock, Share2, Bookmark, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const eventCategories = ["All Events", "Fundraising", "Community", "Volunteer", "Educational"]

const upcomingEvents = [
  {
    id: 1,
    title: "Annual Gala: Night of Hope",
    category: "Fundraising",
    date: "2024-03-15",
    time: "18:00",
    location: "Accra International Conference Centre",
    description:
      "Join us for an elegant evening celebrating our impact and raising funds for our 2024 programs. Features dinner, live music, and inspiring stories from beneficiaries.",
    image: "/placeholder.svg?height=300&width=400",
    price: "$75 per person",
    capacity: 300,
    registered: 187,
    featured: true,
    tags: ["gala", "fundraising", "dinner"],
  },
  {
    id: 2,
    title: "Community Health Fair",
    category: "Community",
    date: "2024-02-28",
    time: "09:00",
    location: "Kumasi Central Market",
    description:
      "Free health screenings, vaccinations, and health education for the entire community. Our mobile clinic team will provide basic medical services.",
    image: "/placeholder.svg?height=300&width=400",
    price: "Free",
    capacity: 500,
    registered: 234,
    featured: false,
    tags: ["health", "free", "community"],
  },
  {
    id: 3,
    title: "Volunteer Orientation Workshop",
    category: "Volunteer",
    date: "2024-02-20",
    time: "14:00",
    location: "Mmabiaa Cares Office, Kumasi",
    description:
      "Comprehensive orientation for new volunteers covering our programs, cultural sensitivity, and safety protocols. Includes lunch and materials.",
    image: "/placeholder.svg?height=300&width=400",
    price: "Free",
    capacity: 25,
    registered: 18,
    featured: false,
    tags: ["orientation", "training", "volunteers"],
  },
  {
    id: 4,
    title: "Skills Training Graduation Ceremony",
    category: "Educational",
    date: "2024-02-25",
    time: "10:00",
    location: "Community Center, Ashanti Region",
    description:
      "Celebrating 30 women who completed our 3-month sewing and entrepreneurship program. Join us as they showcase their skills and receive certificates.",
    image: "/placeholder.svg?height=300&width=400",
    price: "Free",
    capacity: 100,
    registered: 67,
    featured: true,
    tags: ["graduation", "women-empowerment", "skills"],
  },
  {
    id: 5,
    title: "Monthly Donor Appreciation Lunch",
    category: "Fundraising",
    date: "2024-02-18",
    time: "12:00",
    location: "Golden Tulip Hotel, Kumasi",
    description:
      "Exclusive lunch for our monthly donors featuring program updates, impact presentations, and networking with fellow supporters.",
    image: "/placeholder.svg?height=300&width=400",
    price: "Invitation Only",
    capacity: 50,
    registered: 42,
    featured: false,
    tags: ["donors", "appreciation", "exclusive"],
  },
]

const pastEvents = [
  {
    id: 6,
    title: "Christmas Food Distribution",
    date: "2023-12-23",
    location: "Multiple Communities",
    description: "Distributed food packages to 500 families across 15 communities during the Christmas season.",
    image: "/placeholder.svg?height=200&width=300",
    attendees: 500,
    impact: "500 families received food packages",
  },
  {
    id: 7,
    title: "Back-to-School Campaign Launch",
    date: "2023-09-01",
    location: "Kumasi",
    description: "Launched our annual back-to-school campaign providing supplies to 200 children.",
    image: "/placeholder.svg?height=200&width=300",
    attendees: 200,
    impact: "200 children received school supplies",
  },
]

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Events")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)

  const filteredEvents = upcomingEvents.filter((event) => {
    const matchesCategory = selectedCategory === "All Events" || event.category === selectedCategory
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredEvents = filteredEvents.filter((event) => event.featured)
  const regularEvents = filteredEvents.filter((event) => !event.featured)

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
            <Badge className="mb-6 bg-black text-white">Events & Campaigns</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Join Our
              <span className="block text-black">Community Events</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Connect with our community through fundraising galas, volunteer opportunities, educational workshops, and
              celebration events. Every gathering strengthens our mission.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-black">24</div>
                <div className="text-sm text-gray-600">Events This Year</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-black">1,247</div>
                <div className="text-sm text-gray-600">Total Attendees</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-black">$45K</div>
                <div className="text-sm text-gray-600">Funds Raised</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-black">5</div>
                <div className="text-sm text-gray-600">Upcoming Events</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {eventCategories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    className={selectedCategory === category ? "bg-black text-white" : "border-gray-300"}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Events</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredEvents.map((event) => (
                  <Card
                    key={event.id}
                    className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-shadow"
                  >
                    <div className="relative h-64">
                      <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <Badge className="absolute top-4 left-4 bg-black text-white">{event.category}</Badge>
                      <Badge className="absolute top-4 right-4 bg-red-600 text-white">Featured</Badge>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="mr-4">{new Date(event.date).toLocaleDateString()}</span>
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="mr-4">{event.time}</span>
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{event.location}</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="text-lg font-semibold text-black">{event.price}</div>
                        <div className="text-sm text-gray-600">
                          <Users className="w-4 h-4 inline mr-1" />
                          {event.registered}/{event.capacity} registered
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button className="flex-1 bg-black hover:bg-gray-800 text-white">Register Now</Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Bookmark className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
              <p className="text-gray-600">
                {filteredEvents.length} {filteredEvents.length === 1 ? "event" : "events"} found
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                    <Badge className="absolute top-3 left-3 bg-black text-white text-xs">{event.category}</Badge>
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-center text-xs text-gray-600 mb-2">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span className="mr-3">{new Date(event.date).toLocaleDateString()}</span>
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{event.time}</span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{event.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2">{event.description}</p>

                    <div className="flex items-center text-xs text-gray-600 mb-3">
                      <MapPin className="w-3 h-3 mr-1" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-black">{event.price}</span>
                      <span className="text-xs text-gray-600">
                        {event.registered}/{event.capacity} spots
                      </span>
                    </div>

                    <Button className="w-full bg-black hover:bg-gray-800 text-white text-sm">Register</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Past Events</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pastEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden border-0 shadow-lg">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="relative h-48 md:h-full">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <CardContent className="p-6">
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span className="mr-4">{new Date(event.date).toLocaleDateString()}</span>
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{event.location}</span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>

                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-sm font-semibold text-black mb-1">Impact:</div>
                          <div className="text-sm text-gray-700">{event.impact}</div>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white bg-transparent"
              >
                View All Past Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Registration Modal would go here */}

      {/* Call to Action */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Connected</h2>
            <p className="text-xl mb-8 opacity-90">
              Never miss an event! Subscribe to our newsletter for early access to event registration and exclusive
              invitations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input placeholder="Enter your email" className="bg-white text-black border-0" />
              <Button className="bg-white text-black hover:bg-gray-100">Subscribe</Button>
            </div>
            <p className="text-sm mt-4 opacity-70">Join our community of 2,500+ supporters.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
