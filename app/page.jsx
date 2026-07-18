'use client'

import { useEffect, useRef } from 'react'

export default function Home() {
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    // Scroll animations can be added here
    const handleScroll = () => {
      // Scroll animations
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main ref={scrollContainerRef} className="bg-[#050505] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-light backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-display text-2xl font-bold glow-blue-text">
            LUXE<span className="text-[#00D9FF]">AUTO</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#inventory" className="hover:text-[#00D9FF] transition">Inventory</a>
            <a href="#services" className="hover:text-[#00D9FF] transition">Services</a>
            <a href="#about" className="hover:text-[#00D9FF] transition">About</a>
            <button className="btn-primary text-sm">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00D9FF]/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="font-display text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
            Premium Luxury <span className="glow-blue-text">Automotive</span> Experience
          </h1>
          
          <p className="text-xl text-gray-400 mb-12 animate-slide-up max-w-2xl mx-auto">
            Experience the pinnacle of automotive excellence. Curated luxury vehicles, expert craftsmanship, and unparalleled service.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center animate-slide-up">
            <button className="btn-primary text-lg">Explore Inventory</button>
            <button className="btn-secondary text-lg">Book Consultation</button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#00D9FF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#00D9FF]/3 rounded-full blur-3xl" />
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-5xl font-bold text-center mb-16 glow-blue-text">
            Our Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Curated Selection',
                description: 'Handpicked luxury vehicles from around the world, authenticated and certified.'
              },
              {
                title: 'Premium Detailing',
                description: 'State-of-the-art detailing and restoration services for your prized collection.'
              },
              {
                title: 'Expert Maintenance',
                description: 'Specialized maintenance by certified technicians using OEM parts.'
              }
            ].map((item, idx) => (
              <div key={idx} className="glass p-8 rounded-2xl glow-blue hover:glow-blue-border transition group">
                <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-[#00D9FF] transition">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto glass rounded-3xl p-12 text-center glow-blue">
          <h2 className="font-display text-4xl font-bold mb-6">
            Ready to Elevate Your Driving Experience?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Contact our team today to explore our exclusive inventory or schedule a consultation.
          </p>
          <button className="btn-primary text-lg">Get In Touch</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#00D9FF]/10 py-12 px-6 text-center text-gray-500">
        <p>&copy; 2024 LUXE AUTO. All rights reserved.</p>
      </footer>
    </main>
  )
}
