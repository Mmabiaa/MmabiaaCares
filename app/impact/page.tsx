"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Heart, Search, Calendar, MapPin, User, Share2, MessageCircle, Eye, ArrowRight, Home, Info, Target, HandHeart, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/ui/theme-toggle"

const categories = ["All Stories", "Health", "Education", "Food", "Events", "Volunteer Stories"]

const impactStories = [
  {
    id: 1,
    title: "From Hunger to Hope: Akosua's Journey",
    category: "Food",
    date: "2024-01-15",
    author: "Sarah Johnson",
    location: "Kumasi, Ghana",
    excerpt:
      "When we first met 8-year-old Akosua, she was struggling with malnutrition. Today, she's thriving in school thanks to our daily feeding program.",
    image: "/placeholder.svg?height=300&width=400",
    readTime: "5 min read",
    views: 1247,
    shares: 89,
    comments: 23,
    featured: true,
    tags: ["nutrition", "children", "school-feeding"],
  },
  {
    id: 2,
    title: "Building Dreams: New Classroom Opens in Ashanti Region",
    category: "Education",
    date: "2024-01-10",
    author: "Michael Chen",
    location: "Ashanti Region, Ghana",
    excerpt:
      "With the help of our skilled volunteers and local community, we've completed construction of a new classroom serving 60 children.",
    image: "/placeholder.svg?height=300&width=400",
    readTime: "4 min read",
    views: 892,
    shares: 67,
    comments: 15,
    featured: false,
    tags: ["construction", "education", "community"],
  },
  {
    id: 3,
    title: "Mobile Clinic Saves Lives in Remote Villages",
    category: "Health",
    date: "2024-01-08",
    author: "Dr. Amelia Rodriguez",
    location: "Northern Region, Ghana",
    excerpt:
      "Our mobile health clinic reached 15 remote villages this month, providing essential healthcare to over 300 people.",
    image: "/placeholder.svg?height=300&width=400",
    readTime: "6 min read",
    views: 1456,
    shares: 134,
    comments: 41,
    featured: true,
    tags: ["healthcare", "mobile-clinic", "rural"],
  },
  {
    id: 4,
    title: "Empowering Women: Sewing Skills Transform Lives",
    category: "Events",
    date: "2024-01-05",
    author: "Kwame Osei",
    location: "Central Region, Ghana",
    excerpt: "Twenty women completed our 3-month sewing program, with 15 already starting their own small businesses.",
    image: "/placeholder.svg?height=300&width=400",
    readTime: "3 min read",
    views: 743,
    shares: 52,
    comments: 18,
    featured: false,
    tags: ["women-empowerment", "skills-training", "entrepreneurship"],
  },
  {
    id: 5,
    title: "Volunteer Spotlight: Jessica's Digital Marketing Impact",
    category: "Volunteer Stories",
    date: "2024-01-03",
    author: "Emmanuel Asante",
    location: "Remote",
    excerpt:
      "How one volunteer's digital marketing expertise helped us reach 10,000 new supporters and increase donations by 40%.",
    image: "/placeholder.svg?height=300&width=400",
    readTime: "4 min read",
    views: 634,
    shares: 78,
    comments: 12,
    featured: false,
    tags: ["volunteer", "digital-marketing", "fundraising"],
  },
  {
    id: 6,
    title: "Clean Water Changes Everything",
    category: "Health",
    date: "2023-12-28",
    author: "Robert Thompson",
    location: "Upper East Region, Ghana",
    excerpt: "The installation of a new water well has transformed daily life for 500 people in this rural community.",
    image: "/placeholder.svg?height=300&width=400",
    readTime: "5 min read",
    views: 1123,
    shares: 95,
    comments: 27,
    featured: false,
    tags: ["water", "infrastructure", "health"],
  },
]

export default function ImpactPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Stories")
  const [searchTerm, setSearchTerm] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("impact")

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
    { id: "donate", label: "Donate", icon: Heart, href: "/donate" },
  ]

  const filteredStories = impactStories.filter((story) => {
    const matchesCategory = selectedCategory === "All Stories" || story.category === selectedCategory
    const matchesSearch =
      story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredStories = filteredStories.filter((story) => story.featured)
  const regularStories = filteredStories.filter((story) => !story.featured)

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
                    item.id === "impact"
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
          src="https://i.pinimg.com/736x/05/d5/82/05d582318fb71d5ab602a5e26968284a.jpg"
          alt="Impact background"
          fill
          className="object-cover z-0"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-black text-white">Impact Stories</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Stories of
              <span className="block text-white">Transformation</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Discover the real impact of your support through powerful stories from the communities we serve. Every
              donation, every volunteer hour, every prayer creates ripples of change.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-white">156</div>
                <div className="text-sm text-white/80">Stories Shared</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">12,847</div>
                <div className="text-sm text-white/80">Lives Impacted</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">45</div>
                <div className="text-sm text-white/80">Communities</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">5</div>
                <div className="text-sm text-white/80">Years of Impact</div>
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
                  placeholder="Search stories, tags, or locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
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

      {/* Featured Stories */}
      {featuredStories.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Stories</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredStories.map((story) => (
                  <Card
                    key={story.id}
                    className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-shadow"
                  >
                    <div className="relative h-64">
                      <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <Badge className="absolute top-4 left-4 bg-black text-white">{story.category}</Badge>
                      <Badge className="absolute top-4 right-4 bg-red-600 text-white">Featured</Badge>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="mr-4">{new Date(story.date).toLocaleDateString()}</span>
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="mr-4">{story.location}</span>
                        <User className="w-4 h-4 mr-1" />
                        <span>{story.author}</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-black transition-colors">
                        <Link href={`/impact/${story.id}`}>{story.title}</Link>
                      </h3>

                      <p className="text-gray-600 mb-4 leading-relaxed">{story.excerpt}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {story.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {story.views}
                          </span>
                          <span className="flex items-center">
                            <Share2 className="w-4 h-4 mr-1" />
                            {story.shares}
                          </span>
                          <span className="flex items-center">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {story.comments}
                          </span>
                        </div>

                        <Button variant="ghost" size="sm" className="text-black hover:bg-black hover:text-white">
                          <Link href={`/impact/${story.id}`} className="flex items-center">
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
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

      {/* Regular Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                {selectedCategory === "All Stories" ? "All Stories" : selectedCategory}
              </h2>
              <p className="text-gray-600">
                {filteredStories.length} {filteredStories.length === 1 ? "story" : "stories"} found
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularStories.map((story) => (
                <Card key={story.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <Badge className="absolute top-3 left-3 bg-black text-white text-xs">{story.category}</Badge>
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-center text-xs text-gray-600 mb-2">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span className="mr-3">{new Date(story.date).toLocaleDateString()}</span>
                      <span>{story.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-black transition-colors line-clamp-2">
                      <Link href={`/impact/${story.id}`}>{story.title}</Link>
                    </h3>

                    <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-3">{story.excerpt}</p>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-3">
                        <span className="flex items-center">
                          <Eye className="w-3 h-3 mr-1" />
                          {story.views}
                        </span>
                        <span className="flex items-center">
                          <MessageCircle className="w-3 h-3 mr-1" />
                          {story.comments}
                        </span>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-black hover:bg-black hover:text-white p-1 h-auto"
                      >
                        <Link href={`/impact/${story.id}`}>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredStories.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No stories found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search terms or selecting a different category.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("All Stories")
                  }}
                  className="border-black text-black hover:bg-black hover:text-white"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl mb-8 opacity-90">
              Get the latest impact stories and updates delivered to your inbox monthly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input placeholder="Enter your email" className="bg-white text-black border-0" />
              <Button className="bg-white text-black hover:bg-gray-100">Subscribe</Button>
            </div>
            <p className="text-sm mt-4 opacity-70">Join 2,500+ subscribers. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
