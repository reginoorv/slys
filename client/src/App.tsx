import { useEffect } from "react";
import "./script.js";

function App() {
  useEffect(() => {
    document.title = "Sly's Barbershop - Excellence in Every Detail";
  }, []);

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-poppins font-bold text-primary">Sly's</span>
          </div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            <li><a href="#home" className="font-opensans text-dark hover:text-primary transition-colors">Home</a></li>
            <li><a href="#about" className="font-opensans text-dark hover:text-primary transition-colors">About</a></li>
            <li><a href="#reviews" className="font-opensans text-dark hover:text-primary transition-colors">Reviews</a></li>
            <li><a href="#services" className="font-opensans text-dark hover:text-primary transition-colors">Services</a></li>
            <li><a href="#contact" className="font-opensans text-dark hover:text-primary transition-colors">Contact</a></li>
          </ul>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button id="menu-toggle" className="focus:outline-none">
              <i className="fas fa-bars text-2xl text-primary"></i>
            </button>
          </div>
        </nav>
        
        {/* Mobile Navigation */}
        <div id="mobile-menu" className="mobile-menu md:hidden bg-white shadow-lg absolute w-full">
          <ul className="flex flex-col py-4 space-y-2">
            <li><a href="#home" className="block px-6 py-2 hover:bg-primary hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" className="block px-6 py-2 hover:bg-primary hover:text-white transition-colors">About</a></li>
            <li><a href="#reviews" className="block px-6 py-2 hover:bg-primary hover:text-white transition-colors">Reviews</a></li>
            <li><a href="#services" className="block px-6 py-2 hover:bg-primary hover:text-white transition-colors">Services</a></li>
            <li><a href="#contact" className="block px-6 py-2 hover:bg-primary hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080&q=80" 
            alt="Professional service background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-6 z-10 reveal">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold leading-tight mb-4">
              Excellence in Every Detail
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Professional barbering services tailored to your unique style.
            </p>
            <a href="#contact" className="inline-block bg-secondary hover:bg-opacity-90 text-white font-opensans px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:-translate-y-1 hover:shadow-lg">
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-2">About Us</h2>
            <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center reveal">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-poppins font-semibold mb-4">Our Story</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded with a vision of excellence, Sly's has been delivering premium barbering services since 2010. What began as a small local barbershop has grown into a trusted name recognized for our commitment to quality, attention to detail, and exceptional customer service.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We believe that the customer experience extends beyond the haircut itself—it's about creating relationships built on trust, reliability, and satisfaction. Our experienced team of barbers works tirelessly to ensure that every client receives personalized attention and the highest standard of service.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-4">
                  <i className="fas fa-award text-white text-xl"></i>
                </div>
                <p className="font-opensans font-semibold">Over 10 years of excellence</p>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Our professional team"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-2">Client Reviews</h2>
            <div className="w-20 h-1 bg-accent rounded-full mb-4"></div>
            <p className="text-center text-gray-600 max-w-2xl">
              Don't just take our word for it. See what our clients have to say about their experiences with us.
            </p>
          </div>
          
          <div className="relative review-carousel reveal">
            <div className="overflow-hidden">
              <div id="reviews-container" className="flex transition-transform duration-300">
                <div className="min-w-full md:min-w-[33.333%] px-4">
                  <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                        <i className="fas fa-user text-gray-400"></i>
                      </div>
                      <div>
                        <h4 className="font-opensans font-semibold">James Wilson</h4>
                        <div className="star-rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic flex-grow">
                      "Absolutely the best service I've experienced. Professional, thorough, and friendly. Would highly recommend to anyone looking for quality work."
                    </p>
                    <p className="text-gray-500 text-sm mt-4">3 months ago</p>
                  </div>
                </div>
                
                <div className="min-w-full md:min-w-[33.333%] px-4">
                  <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                        <i className="fas fa-user text-gray-400"></i>
                      </div>
                      <div>
                        <h4 className="font-opensans font-semibold">Sarah Johnson</h4>
                        <div className="star-rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half-alt"></i>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic flex-grow">
                      "I've been a customer for over 2 years now and have never been disappointed. They consistently exceed my expectations and deliver outstanding results."
                    </p>
                    <p className="text-gray-500 text-sm mt-4">1 month ago</p>
                  </div>
                </div>
                
                <div className="min-w-full md:min-w-[33.333%] px-4">
                  <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                        <i className="fas fa-user text-gray-400"></i>
                      </div>
                      <div>
                        <h4 className="font-opensans font-semibold">Michael Thomas</h4>
                        <div className="star-rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic flex-grow">
                      "The attention to detail is remarkable. From the first phone call to the completion of service, everything was handled with professionalism and care."
                    </p>
                    <p className="text-gray-500 text-sm mt-4">2 months ago</p>
                  </div>
                </div>
              </div>
            </div>
            
            <button id="prev-review" className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-3 hover:bg-primary hover:text-white transition-colors z-10 focus:outline-none">
              <i className="fas fa-chevron-left"></i>
            </button>
            
            <button id="next-review" className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-3 hover:bg-primary hover:text-white transition-colors z-10 focus:outline-none">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          
          <div className="flex justify-center mt-8">
            <a href="https://maps.app.goo.gl/5r46qxNub4gimaC2A" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:text-secondary transition-colors font-opensans">
              <span>See all reviews on Google</span>
              <i className="fas fa-external-link-alt ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-2">Our Services</h2>
            <div className="w-20 h-1 bg-accent rounded-full mb-4"></div>
            <p className="text-center text-gray-600 max-w-2xl">
              We offer a comprehensive range of professional services tailored to meet your specific needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 reveal">
              <div className="h-48 bg-primary bg-opacity-10 flex items-center justify-center">
                <i className="fas fa-cut text-6xl text-primary"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-poppins font-semibold mb-3">Classic Haircut</h3>
                <p className="text-gray-600 mb-4">
                  Precision scissor cut with attention to detail, finished with styling to suit your preference.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">$25</span>
                  <span className="text-gray-500 text-sm">30 min</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 reveal">
              <div className="h-48 bg-secondary bg-opacity-10 flex items-center justify-center">
                <i className="fas fa-magic text-6xl text-secondary"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-poppins font-semibold mb-3">Beard Trim & Shaping</h3>
                <p className="text-gray-600 mb-4">
                  Expert beard trim with hot towel treatment and precision line-up for a sharp, defined look.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">$15</span>
                  <span className="text-gray-500 text-sm">20 min</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 reveal">
              <div className="h-48 bg-accent bg-opacity-10 flex items-center justify-center">
                <i className="fas fa-shower text-6xl text-accent"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-poppins font-semibold mb-3">Hot Towel Shave</h3>
                <p className="text-gray-600 mb-4">
                  Traditional straight razor shave with hot towel preparation and soothing aftershave finish.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">$30</span>
                  <span className="text-gray-500 text-sm">45 min</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 reveal">
              <div className="h-48 bg-primary bg-opacity-10 flex items-center justify-center">
                <i className="fas fa-paint-brush text-6xl text-primary"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-poppins font-semibold mb-3">Hair Coloring</h3>
                <p className="text-gray-600 mb-4">
                  Professional color application with consultation to achieve your desired look and coverage.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">$50+</span>
                  <span className="text-gray-500 text-sm">60+ min</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 reveal">
              <div className="h-48 bg-secondary bg-opacity-10 flex items-center justify-center">
                <i className="fas fa-child text-6xl text-secondary"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-poppins font-semibold mb-3">Kids Haircut</h3>
                <p className="text-gray-600 mb-4">
                  Gentle and patient service for our younger clients, creating a comfortable experience.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">$18</span>
                  <span className="text-gray-500 text-sm">20 min</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 reveal">
              <div className="h-48 bg-accent bg-opacity-10 flex items-center justify-center">
                <i className="fas fa-spa text-6xl text-accent"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-poppins font-semibold mb-3">Premium Package</h3>
                <p className="text-gray-600 mb-4">
                  Complete treatment including haircut, beard trim, hot towel service, and styling.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">$60</span>
                  <span className="text-gray-500 text-sm">75 min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary bg-opacity-5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-2">Contact Us</h2>
            <div className="w-20 h-1 bg-accent rounded-full mb-4"></div>
            <p className="text-center text-gray-600 max-w-2xl">
              Ready to experience our exceptional service? Reach out to us today or drop by our location.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-start reveal">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215151295964!2d-73.98777672346177!3d40.758895871383744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1695667643984!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sly's Barbershop Location"
                ></iframe>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 rounded-full p-3 mr-4">
                    <i className="fas fa-map-marker-alt text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-opensans font-semibold text-lg mb-1">Our Location</h4>
                    <p className="text-gray-600">123 Main Street, Suite 101<br />New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 rounded-full p-3 mr-4">
                    <i className="fas fa-phone-alt text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-opensans font-semibold text-lg mb-1">Phone Number</h4>
                    <p className="text-gray-600">(212) 555-1234</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 rounded-full p-3 mr-4">
                    <i className="fas fa-envelope text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-opensans font-semibold text-lg mb-1">Email Address</h4>
                    <p className="text-gray-600">info@slysservice.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 rounded-full p-3 mr-4">
                    <i className="fas fa-clock text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-opensans font-semibold text-lg mb-1">Business Hours</h4>
                    <div className="text-gray-600">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 10:00 AM - 6:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <a href="tel:2125551234" className="inline-block bg-secondary hover:bg-opacity-90 text-white font-opensans px-6 py-3 rounded-lg text-lg font-semibold transition-all transform hover:-translate-y-1 w-full text-center">
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-poppins font-bold mb-2">Sly's</h3>
              <p className="text-gray-400">Excellence in Every Detail</p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-primary transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-primary transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-primary transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-primary transition-colors">
                <i className="fab fa-yelp"></i>
              </a>
            </div>
          </div>
          
          <div className="border-t border-white border-opacity-10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Sly's Barbershop. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
