import { useState, useEffect } from 'react'
import { Button } from './components/ui/button'
import { Card } from './components/ui/card'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { Phone, Menu, X, CheckCircle, Star, MapPin, ArrowRight } from 'lucide-react'
import titanLogo from './assets/file_00000000155461f9ace92ddb9769bd89(1).png'
import lawnImage from './assets/lawn-service.jpg'
import exteriorImage from './assets/pressure-washing.jpg'
import junkImage from './assets/junk-removal.jpg'

// Gallery images - using original images from the website
import galleryImage1 from './assets/gallery-seasonal-cleanup.jpeg'
import galleryImage2 from './assets/gallery-deck-restoration.jpeg'
import galleryImage3 from './assets/gallery-space-reclamation.png'

import './App.css'

function App() {
  const [activeService, setActiveService] = useState('lawn')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    services: [],
    message: ''
  })
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle service checkbox changes
  const handleServiceChange = (serviceName, checked) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, serviceName]
        : prev.services.filter(s => s !== serviceName)
    }))
  }

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ type: '', message: '' })

    try {
      // Prepare form data for submission
      const submissionData = {
        to: 'ryan@titancleanups.com',
        from: formData.email,
        subject: `New Service Request from ${formData.name}`,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        services: formData.services.join(', '),
        message: formData.message,
        timestamp: new Date().toISOString()
      }

      // For now, simulate form submission
      // In production, this would send to your form handler service
      console.log('Form submission data:', submissionData)
      
      setTimeout(() => {
        setFormStatus({ 
          type: 'success', 
          message: 'Thank you! We will contact you soon at ryan@titancleanups.com.' 
        })
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          services: [],
          message: ''
        })
        setIsSubmitting(false)
      }, 1000)
    } catch (error) {
      setFormStatus({ 
        type: 'error', 
        message: 'Sorry, there was an error sending your message. Please call (916) 269-3491 directly.' 
      })
      setIsSubmitting(false)
    }
  }

  const services = {
    lawn: {
      title: 'Lawn Care & Yard Maintenance',
      image: lawnImage,
      features: [
        'Regular mowing, edging, and trimming',
        'Leaf and debris cleanups',
        'Hedge and bush trimming',
        'Seasonal yard prep (fall & spring)'
      ],
      tagline: 'Keep your yard looking sharp without the hassle.'
    },
    exterior: {
      title: 'Exterior Cleaning',
      image: exteriorImage,
      features: [
        'Driveways, patios, and walkways',
        'Fences, decks, and siding',
        'Garage floors and entryways',
        'Outdoor furniture refresh'
      ],
      tagline: 'Restore your curb appeal with a fresh, clean look—without the cost of "power washing."'
    },
    junk: {
      title: 'Junk & Debris Removal',
      image: junkImage,
      features: [
        'Household clutter and old furniture',
        'Yard waste and storm debris',
        'Garage and shed cleanouts',
        'Small appliance and junk hauling'
      ],
      tagline: 'We clear it out so you can take back your space.'
    }
  }

  const galleryItems = [
    { title: 'Seasonal Cleanup', subtitle: 'Fall & spring yard preparation', image: galleryImage1 },
    { title: 'Exterior Cleaning', subtitle: 'Bringing outdoor spaces back to life', image: galleryImage2 },
    { title: 'Junk Removal', subtitle: 'From cluttered to organized', image: galleryImage3 }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Midtown Sacramento", 
      rating: 5,
      text: "Titan Cleanups transformed our overgrown backyard into a beautiful space. Professional, reliable, and affordable!"
    },
    {
      name: "Mike Chen",
      location: "East Sacramento", 
      rating: 5,
      text: "Best junk removal service in Sacramento. They cleared out our garage in no time and left it spotless."
    },
    {
      name: "Lisa Rodriguez",
      location: "Land Park",
      rating: 5,
      text: "Their exterior cleaning service made our driveway look brand new. Highly recommend!"
    }
  ]

  const serviceAreas = [
    'Sacramento', 'Elk Grove', 'Folsom', 'Roseville', 'Citrus Heights',
    'Fair Oaks', 'Carmichael', 'Rancho Cordova', 'West Sacramento', 'Davis'
  ]

  return (
    <div className="min-h-screen geometric-pattern">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-transparent backdrop-blur-sm shadow-2xl border-b border-gray-700/30' : 'bg-transparent backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img src={titanLogo} alt="Titan Cleanups" className="h-10 w-auto" />
              <div>
                <h1 className="text-xl font-bold text-white">Titan Cleanups</h1>
                <p className="text-xs text-gray-400">Sacramento's Trusted Team</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <nav className="flex space-x-6">
                <a href="#services" className="text-gray-300 hover:text-green-400 transition-colors font-medium">Services</a>
                <a href="#gallery" className="text-gray-300 hover:text-green-400 transition-colors font-medium">Gallery</a>
                <a href="#service-areas" className="text-gray-300 hover:text-green-400 transition-colors font-medium">Service Areas</a>
                <a href="#testimonials" className="text-gray-300 hover:text-green-400 transition-colors font-medium">Reviews</a>
                <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors font-medium">Contact</a>
              </nav>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">(916) 269-3491</span>
              </div>
              <Button className="bg-green-500 hover:bg-green-400 text-black font-bold px-4 py-2 transform hover:scale-105 transition-all shadow-lg btn-sharp">
                Free Estimate
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-800 py-4">
              <nav className="flex flex-col space-y-4">
                <a href="#services" className="text-gray-300 hover:text-green-400 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Services</a>
                <a href="#gallery" className="text-gray-300 hover:text-green-400 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
                <a href="#service-areas" className="text-gray-300 hover:text-green-400 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Service Areas</a>
                <a href="#testimonials" className="text-gray-300 hover:text-green-400 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
                <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                <div className="flex items-center space-x-2 text-gray-300 pt-2">
                  <Phone className="w-4 h-4" />
                  <span className="font-semibold">(916) 269-3491</span>
                </div>
                <Button className="bg-green-500 hover:bg-green-400 text-black font-bold w-fit btn-sharp">
                  Free Estimate
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white hero-title">
            Clean Lawns. Clear Spaces. Fresh Starts.
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
            Sacramento's trusted team for lawn care, exterior cleaning, and junk removal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 text-lg btn-sharp">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black font-bold px-8 py-4 text-lg btn-sharp">
              Book Free Estimate
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20">
        <div className="absolute inset-0 bg-gray-900/85"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              One call. Three solutions. Lawn care, exterior cleaning, and junk removal—done right.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-8">
                {Object.entries(services).map(([key, service]) => (
                  <button
                    key={key}
                    onClick={() => setActiveService(key)}
                    className={`px-6 py-3 font-semibold btn-sharp transition-all ${
                      activeService === key
                        ? 'bg-green-500 text-black'
                        : 'bg-black text-white hover:bg-gray-900 border border-white/20'
                    }`}
                  >
                    {service.title.split(' ')[0]}
                  </button>
                ))}
              </div>
              
              <Card className="bg-black rounded-lg p-8 border border-white/20 card-depth accent-line">
                <h3 className="text-2xl font-bold text-white mb-4 ml-6">
                  {services[activeService].title}
                </h3>
                <ul className="space-y-3 mb-6 ml-6">
                  {services[activeService].features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-400 ml-6">
                  {services[activeService].tagline}
                </blockquote>
              </Card>
            </div>
            
            <div className="relative">
              <div className="rounded-lg overflow-hidden card-depth border border-white/10">
                <img 
                  src={services[activeService].image} 
                  alt={services[activeService].title}
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-black px-6 py-3 rounded font-bold btn-sharp">
                Professional Results
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative py-20">
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">See Our Work in Action</h2>
            <p className="text-xl text-gray-400">Real results from real customers across Sacramento</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <Card key={index} className="bg-gray-800 border-white/20 overflow-hidden hover:border-green-500 transition-all card-depth">
                <div className="relative">
                  <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-gray-300">{item.subtitle}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative py-20">
        <div className="absolute inset-0 bg-gray-900/85"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-400">Trusted by homeowners across Sacramento</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-black border-white/20 p-6 hover:border-green-500 transition-all card-depth">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-green-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-300 mb-4 italic">
                  "{testimonial.text}"
                </blockquote>
                <div className="text-white font-semibold">{testimonial.name}</div>
                <div className="text-gray-400 text-sm">{testimonial.location}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="service-areas" className="relative py-20">
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Service Areas</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We proudly serve Sacramento and surrounding communities with reliable lawn care, exterior cleaning, and junk removal services.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Sacramento Metro Area Coverage</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-4">Primary Service Areas:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Downtown Sacramento
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Midtown Sacramento
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      East Sacramento
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Land Park
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Natomas
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Elk Grove
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-4">Extended Areas:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Roseville
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Folsom
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Citrus Heights
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Fair Oaks
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Rancho Cordova
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      West Sacramento
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-2">Don't see your area listed?</h4>
                <p className="text-gray-400 mb-4">
                  We're always expanding our service areas. Contact us to check if we can serve your location!
                </p>
                <Button className="bg-green-500 hover:bg-green-400 text-black font-bold btn-sharp">
                  Check Service Availability
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-800 rounded-lg overflow-hidden card-depth border border-white/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d403701.3607427677!2d-121.74485!3d38.555605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sacramento Service Area Map"
                  className="w-full h-96"
                ></iframe>
              </div>
              <div className="absolute top-4 left-4 bg-gray-800/95 backdrop-blur-sm rounded-lg p-3 card-depth border border-white/20">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span className="font-semibold text-white">Sacramento Metro Area</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20">
        <div className="absolute inset-0 bg-gray-900/85"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get Your Free Estimate</h2>
            <p className="text-xl text-gray-400">
              Ready to transform your space? Contact us today for a free, no-obligation estimate.
            </p>
          </div>
          
          <Card className="p-8 bg-black border-white/20 card-depth">
            <form onSubmit={handleFormSubmit} className="grid md:grid-cols-2 gap-6">
              {formStatus.message && (
                <div className={`md:col-span-2 p-4 rounded-lg ${
                  formStatus.type === 'success' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-red-500/20 text-red-400 border border-red-500/30'
                }`}>
                  {formStatus.message}
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                <Input 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name" 
                  className="bg-gray-800 border-white/20 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500" 
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone *</label>
                <Input 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(916) 269-3491" 
                  className="bg-gray-800 border-white/20 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500" 
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                <Input 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@titancleanups.com" 
                  className="bg-gray-800 border-white/20 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500" 
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">Services Needed</label>
                <div className="flex flex-wrap gap-3 mb-4">
                  {Object.entries(services).map(([key, service]) => (
                    <label key={key} className="flex items-center space-x-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={formData.services.includes(service.title)}
                        onChange={(e) => handleServiceChange(service.title, e.target.checked)}
                        className="rounded border-white/20 bg-gray-800 text-green-500 focus:ring-green-500 focus:ring-offset-gray-800" 
                      />
                      <span className="text-sm text-gray-300">{service.title}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project..." 
                  className="bg-gray-800 border-white/20 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500" 
                  rows={4} 
                />
              </div>
              <div className="md:col-span-2">
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-500 hover:bg-green-400 disabled:bg-gray-600 text-black font-bold py-3 text-lg btn-sharp"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 mr-2 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <ArrowRight className="w-5 h-5 mr-2" />
                      Get Free Estimate
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-500 text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8">
            From overgrown to outstanding—affordable lawn & cleanup services serving Sacramento and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg transform hover:scale-105 transition-all font-bold shadow-xl btn-sharp">
              <Phone className="w-5 h-5 mr-2" />
              Call (916) 269-3491
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg transform hover:scale-105 transition-all font-bold btn-sharp">
              Schedule Free Estimate
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={titanLogo} alt="Titan Cleanups" className="h-10 w-auto" />
                <h3 className="text-xl font-bold">Titan Cleanups</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Sacramento's trusted team for lawn care, exterior cleaning, and junk removal.
              </p>
              <p className="text-sm text-gray-500">
                No job too small: mowing, cleanups, junk hauling, and more.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Lawn Care & Maintenance</li>
                <li>Exterior Cleaning</li>
                <li>Junk & Debris Removal</li>
                <li>Seasonal Yard Prep</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">Contact</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(916) 269-3491</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Sacramento, CA</span>
                </div>
                <p className="text-sm">
                  Serving Sacramento and surrounding areas
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2025 Titan Cleanups. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
