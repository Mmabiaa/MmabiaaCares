"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Heart, Shield, CreditCard, Smartphone, Building, Gift, Star, Lock, CheckCircle } from "lucide-react"
import Link from "next/link"

const donationAmounts = [25, 50, 100, 250, 500, 1000]

const impactDescriptions = {
  25: "Feeds 8 children for one day",
  50: "Provides school supplies for 2 children",
  100: "Supports a family's healthcare for one month",
  250: "Funds skills training for 5 women",
  500: "Sponsors a child's education for one term",
  1000: "Supports mobile clinic operations for one week",
}

const recentDonors = [
  { name: "Sarah J.", amount: "$100", message: "For the children's education", time: "2 minutes ago" },
  { name: "Michael K.", amount: "$50", message: "Keep up the great work!", time: "5 minutes ago" },
  { name: "Anonymous", amount: "$250", message: "In memory of my grandmother", time: "12 minutes ago" },
  { name: "Emma L.", amount: "$75", message: "Monthly donation", time: "18 minutes ago" },
  { name: "David M.", amount: "$200", message: "For healthcare program", time: "25 minutes ago" },
]

export default function DonatePage() {
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time")
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100)
  const [customAmount, setCustomAmount] = useState("")
  const [selectedProgram, setSelectedProgram] = useState("general")
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [dedicateGift, setDedicateGift] = useState(false)

  const finalAmount = selectedAmount || Number.parseInt(customAmount) || 0

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
              <Button className="bg-black hover:bg-gray-800 text-white">Donate Now</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-black text-white">Secure Donation</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform Lives with
              <span className="block text-black">Your Generosity</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Every donation directly impacts communities across Ghana. 100% of your contribution goes to programs -
              administrative costs are covered by separate grants.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Lock className="w-4 h-4 mr-2" />
                SSL Secured
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                Tax Deductible
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                100% to Programs
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                {/* Donation Type */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Donation Type</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant={donationType === "one-time" ? "default" : "outline"}
                      className={`p-4 h-auto ${donationType === "one-time" ? "bg-black text-white" : "border-gray-300"}`}
                      onClick={() => setDonationType("one-time")}
                    >
                      <div className="text-center">
                        <Gift className="w-6 h-6 mx-auto mb-2" />
                        <div className="font-semibold">One-Time</div>
                        <div className="text-sm opacity-80">Single donation</div>
                      </div>
                    </Button>
                    <Button
                      variant={donationType === "monthly" ? "default" : "outline"}
                      className={`p-4 h-auto ${donationType === "monthly" ? "bg-black text-white" : "border-gray-300"}`}
                      onClick={() => setDonationType("monthly")}
                    >
                      <div className="text-center">
                        <Heart className="w-6 h-6 mx-auto mb-2" />
                        <div className="font-semibold">Monthly</div>
                        <div className="text-sm opacity-80">Recurring impact</div>
                      </div>
                    </Button>
                  </div>
                  {donationType === "monthly" && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Monthly donors receive:</strong> Quarterly impact reports, exclusive updates, and
                        invitation to annual donor appreciation event.
                      </p>
                    </div>
                  )}
                </div>

                {/* Amount Selection */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Select Amount</h3>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {donationAmounts.map((amount) => (
                      <Button
                        key={amount}
                        variant={selectedAmount === amount ? "default" : "outline"}
                        className={`p-4 h-auto ${selectedAmount === amount ? "bg-black text-white" : "border-gray-300"}`}
                        onClick={() => {
                          setSelectedAmount(amount)
                          setCustomAmount("")
                        }}
                      >
                        <div className="text-center">
                          <div className="font-semibold">${amount}</div>
                          <div className="text-xs opacity-80">
                            {impactDescriptions[amount as keyof typeof impactDescriptions]}
                          </div>
                        </div>
                      </Button>
                    ))}
                  </div>
                  <div>
                    <Label htmlFor="custom-amount">Custom Amount</Label>
                    <Input
                      id="custom-amount"
                      type="number"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value)
                        setSelectedAmount(null)
                      }}
                      className="mt-2"
                    />
                  </div>
                </div>

                {/* Program Selection */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Choose Program</h3>
                  <select
                    value={selectedProgram}
                    onChange={(e) => setSelectedProgram(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="general">General Fund - Greatest Need</option>
                    <option value="food">Food Outreach Program</option>
                    <option value="education">Education Initiative</option>
                    <option value="healthcare">Healthcare Access Program</option>
                    <option value="empowerment">Women & Children Empowerment</option>
                  </select>
                </div>

                {/* Payment Method */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment Method</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                    <Button
                      variant={paymentMethod === "card" ? "default" : "outline"}
                      className={`p-4 h-auto ${paymentMethod === "card" ? "bg-black text-white" : "border-gray-300"}`}
                      onClick={() => setPaymentMethod("card")}
                    >
                      <div className="text-center">
                        <CreditCard className="w-6 h-6 mx-auto mb-2" />
                        <div className="text-sm">Credit Card</div>
                      </div>
                    </Button>
                    <Button
                      variant={paymentMethod === "mobile" ? "default" : "outline"}
                      className={`p-4 h-auto ${paymentMethod === "mobile" ? "bg-black text-white" : "border-gray-300"}`}
                      onClick={() => setPaymentMethod("mobile")}
                    >
                      <div className="text-center">
                        <Smartphone className="w-6 h-6 mx-auto mb-2" />
                        <div className="text-sm">Mobile Money</div>
                      </div>
                    </Button>
                    <Button
                      variant={paymentMethod === "paypal" ? "default" : "outline"}
                      className={`p-4 h-auto ${paymentMethod === "paypal" ? "bg-black text-white" : "border-gray-300"}`}
                      onClick={() => setPaymentMethod("paypal")}
                    >
                      <div className="text-center">
                        <div className="w-6 h-6 mx-auto mb-2 bg-blue-600 rounded text-white text-xs flex items-center justify-center">
                          PP
                        </div>
                        <div className="text-sm">PayPal</div>
                      </div>
                    </Button>
                    <Button
                      variant={paymentMethod === "bank" ? "default" : "outline"}
                      className={`p-4 h-auto ${paymentMethod === "bank" ? "bg-black text-white" : "border-gray-300"}`}
                      onClick={() => setPaymentMethod("bank")}
                    >
                      <div className="text-center">
                        <Building className="w-6 h-6 mx-auto mb-2" />
                        <div className="text-sm">Bank Transfer</div>
                      </div>
                    </Button>
                  </div>
                </div>

                {/* Donor Information */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="first-name">First Name *</Label>
                      <Input id="first-name" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="last-name">Last Name *</Label>
                      <Input id="last-name" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" className="mt-2" />
                    </div>
                  </div>
                </div>

                {/* Dedicate Gift */}
                <div className="mb-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <Checkbox
                      id="dedicate"
                      checked={dedicateGift}
                      onCheckedChange={(checked) => setDedicateGift(checked as boolean)}
                    />
                    <Label htmlFor="dedicate" className="text-sm font-medium">
                      Dedicate this gift in honor or memory of someone
                    </Label>
                  </div>
                  {dedicateGift && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="dedication-type">Dedication Type</Label>
                        <select className="w-full p-3 border border-gray-300 rounded-md mt-2">
                          <option>In Honor Of</option>
                          <option>In Memory Of</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="honoree-name">Person's Name</Label>
                        <Input id="honoree-name" className="mt-2" />
                      </div>
                      <div>
                        <Label htmlFor="dedication-message">Personal Message (Optional)</Label>
                        <Textarea id="dedication-message" className="mt-2" rows={3} />
                      </div>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <Button className="w-full bg-black hover:bg-gray-800 text-white py-4 text-lg font-semibold">
                  <Lock className="w-5 h-5 mr-2" />
                  Donate ${finalAmount} {donationType === "monthly" ? "Monthly" : "Now"}
                </Button>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  By clicking donate, you agree to our terms and privacy policy. Your donation is secure and encrypted.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Impact Summary */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Impact</h3>
                {finalAmount > 0 && (
                  <div className="space-y-3">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-black">${finalAmount}</div>
                      <div className="text-sm text-gray-600">
                        {donationType === "monthly" ? "Monthly donation" : "One-time donation"}
                      </div>
                    </div>
                    <div className="text-sm text-gray-700">
                      {impactDescriptions[finalAmount as keyof typeof impactDescriptions] ||
                        `Your generous donation will make a significant impact in our communities.`}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Recent Donors */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Donations</h3>
                <div className="space-y-3">
                  {recentDonors.map((donor, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {donor.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-900">{donor.name}</span>
                          <span className="text-sm font-semibold text-black">{donor.amount}</span>
                        </div>
                        <p className="text-xs text-gray-600 truncate">{donor.message}</p>
                        <p className="text-xs text-gray-500">{donor.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">Join 1,247+ donors this month</p>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Donate?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">100% to Programs</div>
                      <div className="text-xs text-gray-600">Administrative costs covered separately</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">Tax Deductible</div>
                      <div className="text-xs text-gray-600">Registered 501(c)(3) nonprofit</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-yellow-500 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">Transparent Reporting</div>
                      <div className="text-xs text-gray-600">Quarterly impact updates</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
