export default function AirbnbManagementWebsite() {
  const properties = [
    {
      title: "Ocean View Apartment",
      location: "Dar es Salaam",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Modern City Studio",
      location: "Zanzibar",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Luxury Beach Villa",
      location: "Arusha",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const services = [
    "Airbnb Listing Setup",
    "Guest Communication",
    "Cleaning Coordination",
    "Property Photography",
    "Pricing Optimization",
    "Maintenance Management",
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-5 border-b border-gray-200 sticky top-0 bg-white z-50">
        <h1 className="text-2xl font-bold">Palm Haven</h1>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#home" className="hover:text-gray-500">
            Home
          </a>
          <a href="#properties" className="hover:text-gray-500">
            Properties
          </a>
          <a href="#services" className="hover:text-gray-500">
            Services
          </a>
          <a href="#contact" className="hover:text-gray-500">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative h-[80vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 px-6 max-w-3xl text-white">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Professional Airbnb Property Management
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            We help property owners manage Airbnb rentals with ease, comfort,
            and higher bookings.
          </p>

          <a
            href="#contact"
            className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-200 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-8 max-w-6xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-6">About Us</h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-8">
          Palm Haven specializes in managing short-term rental properties for
          Airbnb hosts. From guest communication to cleaning coordination, we
          make property management simple and stress-free.
        </p>
      </section>

      {/* Properties */}
      <section id="properties" className="py-20 bg-gray-50 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-bold mb-4">Featured Properties</h3>
            <p className="text-gray-600 text-lg">
              Explore some of our managed Airbnb properties.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-64 w-full object-cover"
                />

                <div className="p-6">
                  <h4 className="text-2xl font-semibold mb-2">
                    {property.title}
                  </h4>
                  <p className="text-gray-500 mb-3">{property.location}</p>
                  <div className="flex items-center justify-end">
                    <button className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition">
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-12">Our Services</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-3xl p-8 hover:bg-gray-200 transition"
              >
                <h4 className="text-xl font-semibold">{service}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 bg-black text-white px-8 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl font-bold mb-6">Get In Touch</h3>
          <p className="text-gray-300 text-lg mb-8">
            Ready to grow your Airbnb business? Contact us today.
          </p>

          <div className="space-y-4 text-lg">
            <p>📍 Dar es Salaam, Tanzania</p>
            <p>📞 +255623293254</p>
            <p>✉️ info@palmhaven.com</p>
          </div>

          <a
            href="https://wa.me/255623293254"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition"
          >
            WhatsApp Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-200">
        © 2026 Palm Haven. All rights reserved.
      </footer>
    </div>
  );
}
