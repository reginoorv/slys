import { useEffect } from "react";
import "./script.js";

function App() {
  useEffect(() => {
    document.title = "Sly's Barbershop - Excellence in Every Detail";
  }, []);

  return (
    <>
      {/* Navbar - Updated with modern design */}
      <header className="fixed top-0 left-0 w-full bg-light shadow-md z-50 transition-all duration-300">
        <nav className="container mx-auto px-6 mobile-px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center">
              <i className="fas fa-cut text-accent mr-2"></i>
              <span className="text-xl sm:text-2xl font-poppins font-bold text-primary">Sly's</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-4 lg:space-x-8">
            <li><a href="#home" className="font-opensans text-sm lg:text-base text-dark hover:text-secondary transition-colors border-accent hover:border-bottom pb-1">Home</a></li>
            <li><a href="#about" className="font-opensans text-sm lg:text-base text-dark hover:text-secondary transition-colors border-accent hover:border-bottom pb-1">About</a></li>
            <li><a href="#reviews" className="font-opensans text-sm lg:text-base text-dark hover:text-secondary transition-colors border-accent hover:border-bottom pb-1">Reviews</a></li>
            <li><a href="#services" className="font-opensans text-sm lg:text-base text-dark hover:text-secondary transition-colors border-accent hover:border-bottom pb-1">Services</a></li>
            <li><a href="#contact" className="font-opensans text-sm lg:text-base text-dark hover:text-secondary transition-colors border-accent hover:border-bottom pb-1">Contact</a></li>
          </ul>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button id="menu-toggle" className="focus:outline-none">
              <i className="fas fa-bars text-xl sm:text-2xl text-primary"></i>
            </button>
          </div>
        </nav>
        
        {/* Mobile Navigation - Hidden by default, shown when toggled */}
        <div id="mobile-menu" className="mobile-menu md:hidden bg-light shadow-lg absolute w-full hidden">
          <ul className="flex flex-col py-4 space-y-2">
            <li><a href="#home" className="block px-6 py-2 text-center hover:bg-primary hover:text-light transition-colors">Home</a></li>
            <li><a href="#about" className="block px-6 py-2 text-center hover:bg-primary hover:text-light transition-colors">About</a></li>
            <li><a href="#reviews" className="block px-6 py-2 text-center hover:bg-primary hover:text-light transition-colors">Reviews</a></li>
            <li><a href="#services" className="block px-6 py-2 text-center hover:bg-primary hover:text-light transition-colors">Services</a></li>
            <li><a href="#contact" className="block px-6 py-2 text-center hover:bg-primary hover:text-light transition-colors">Contact</a></li>
          </ul>
        </div>
      </header>

      {/* Hero Section - Updated with barbershop themed imagery */}
      <section id="home" className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080&q=80" 
            alt="Professional barbershop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark opacity-70"></div>
        </div>
        
        <div className="container mx-auto px-6 mobile-px-4 z-10 reveal">
          <div className="max-w-2xl text-light">
            <div className="flex items-center mb-4 animate-fade-in">
              <div className="h-10 w-10 sm:h-14 sm:w-14 bg-accent rounded-full flex items-center justify-center mr-3 sm:mr-4">
                <i className="fas fa-cut text-dark text-lg sm:text-2xl"></i>
              </div>
              <h3 className="text-sm sm:text-xl text-accent font-opensans">PREMIUM BARBERSHOP</h3>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold leading-tight mb-4 animate-slide-up">
              Excellence in <span className="text-accent border-bottom">Every</span> Detail
            </h1>
            <p className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray font-roboto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Professional barbering services tailored to your unique style.
            </p>
            <div className="animate-slide-up flex flex-wrap gap-4" style={{ animationDelay: '0.4s' }}>
              <a href="#contact" className="btn btn-secondary text-sm sm:text-base">
                Book Appointment
              </a>
              <a href="#services" className="btn btn-outline text-sm sm:text-base text-light border-light hover:bg-light hover:text-dark">
                View Services
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-light animate-bounce">
          <a href="#about" className="flex flex-col items-center">
            <span className="mb-1 sm:mb-2 text-xs sm:text-sm">Scroll Down</span>
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>
      </section>

      {/* About Section - Updated with modern design */}
      <section id="about" className="py-20 bg-light">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-12 reveal">
            <div className="flex items-center mb-4">
              <div className="h-1 w-10 bg-accent"></div>
              <p className="mx-4 text-secondary font-semibold">OUR STORY</p>
              <div className="h-1 w-10 bg-accent"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-2">About Sly's Barbershop</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center reveal">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-poppins font-semibold mb-4 border-left-accent">Our Legacy of Excellence</h3>
              <p className="text-dark-gray mb-4 leading-relaxed">
                Founded with a vision of excellence, Sly's has been delivering premium barbering services since 2010. What began as a small local barbershop has grown into a trusted name recognized for our commitment to quality, attention to detail, and exceptional customer service.
              </p>
              <p className="text-dark-gray mb-6 leading-relaxed">
                We believe that the customer experience extends beyond the haircut itself—it's about creating relationships built on trust, reliability, and satisfaction. Our experienced team of barbers works tirelessly to ensure that every client receives personalized attention and the highest standard of service.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="card p-4 animate-scale-up">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-3">
                      <i className="fas fa-award text-light"></i>
                    </div>
                    <h4 className="font-poppins font-semibold">10+ Years</h4>
                  </div>
                  <p className="text-dark-gray mt-2 text-sm">Of excellence in barbering</p>
                </div>
                
                <div className="card p-4 animate-scale-up" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-3">
                      <i className="fas fa-users text-light"></i>
                    </div>
                    <h4 className="font-poppins font-semibold">5,000+</h4>
                  </div>
                  <p className="text-dark-gray mt-2 text-sm">Satisfied clients</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 relative">
              <img 
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=800&q=80" 
                alt="Professional barber at work"
                className="rounded-lg shadow-lg w-full h-auto img-shadow z-10 relative"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent rounded-lg z-0 hidden md:block"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-primary rounded-lg z-0 hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section - Updated with modern design */}
      <section id="reviews" className="py-20 bg-gray">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-12 reveal">
            <div className="flex items-center mb-4">
              <div className="h-1 w-10 bg-accent"></div>
              <p className="mx-4 text-secondary font-semibold">TESTIMONIALS</p>
              <div className="h-1 w-10 bg-accent"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-2">Client Reviews</h2>
            <p className="text-center text-dark-gray max-w-2xl mt-4">
              Don't just take our word for it. See what our clients have to say about their experiences with us.
            </p>
          </div>
          
          <div className="relative review-carousel reveal">
            <div className="overflow-hidden">
              <div id="reviews-container" className="flex transition-transform duration-300">
                <div className="min-w-full md:min-w-[33.333%] px-4">
                  <div className="card h-full flex flex-col p-0">
                    <div className="p-6 card-content">
                      <div className="star-rating mb-4">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <p className="text-dark-gray italic flex-grow">
                        "Absolutely the best service I've experienced. Professional, thorough, and friendly. The attention to detail makes Sly's stand out from other barbershops."
                      </p>
                    </div>
                    <div className="p-6 bg-primary mt-auto">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-accent">
                          <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" alt="James Wilson" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h4 className="font-opensans font-semibold text-light">James Wilson</h4>
                          <p className="text-gray text-sm">Regular client</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="min-w-full md:min-w-[33.333%] px-4">
                  <div className="card h-full flex flex-col p-0">
                    <div className="p-6 card-content">
                      <div className="star-rating mb-4">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                      </div>
                      <p className="text-dark-gray italic flex-grow">
                        "I've been a customer for over 2 years now and have never been disappointed. They consistently exceed my expectations and deliver outstanding results every single time."
                      </p>
                    </div>
                    <div className="p-6 bg-primary mt-auto">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-accent">
                          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" alt="Sarah Johnson" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h4 className="font-opensans font-semibold text-light">Sarah Johnson</h4>
                          <p className="text-gray text-sm">Loyal customer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="min-w-full md:min-w-[33.333%] px-4">
                  <div className="card h-full flex flex-col p-0">
                    <div className="p-6 card-content">
                      <div className="star-rating mb-4">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <p className="text-dark-gray italic flex-grow">
                        "The attention to detail is remarkable. From the first phone call to the completion of service, everything was handled with professionalism and care. Highly recommended!"
                      </p>
                    </div>
                    <div className="p-6 bg-primary mt-auto">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-accent">
                          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" alt="Michael Thomas" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h4 className="font-opensans font-semibold text-light">Michael Thomas</h4>
                          <p className="text-gray text-sm">New customer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <button id="prev-review" className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-light rounded-full shadow-lg p-3 hover:bg-primary hover:text-light transition-colors z-10 focus:outline-none">
              <i className="fas fa-chevron-left"></i>
            </button>
            
            <button id="next-review" className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-light rounded-full shadow-lg p-3 hover:bg-primary hover:text-light transition-colors z-10 focus:outline-none">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          
          {/* Dot indicators */}
          <div id="review-dots" className="review-dots-container mt-4"></div>
          
          {/* Carousel controls with autoplay toggle */}
          <div className="carousel-controls mt-4">
            <button id="autoplay-toggle" className="autoplay-toggle" aria-label="Pause autoplay">
              <i className="fas fa-pause"></i>
            </button>
          </div>
          
          <div className="flex justify-center mt-8">
            <a href="https://maps.app.goo.gl/5r46qxNub4gimaC2A" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <span>See all reviews on Google</span>
              <i className="fas fa-external-link-alt ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section - Updated with modern design */}
      <section id="services" className="py-20 mobile-py-12 bg-light">
        <div className="container mx-auto px-6 mobile-px-4">
          <div className="flex flex-col items-center mb-12 mobile-mb-6 reveal">
            <div className="flex items-center mb-4">
              <div className="h-1 w-6 sm:w-10 bg-accent"></div>
              <p className="mx-2 sm:mx-4 text-secondary font-semibold text-sm sm:text-base">WHAT WE OFFER</p>
              <div className="h-1 w-6 sm:w-10 bg-accent"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-primary mb-2 text-center">Our Premium Services</h2>
            <p className="text-center text-dark-gray max-w-xl sm:max-w-2xl mt-4 text-sm sm:text-base">
              We offer a comprehensive range of professional services tailored to meet your specific needs.
            </p>
          </div>
          
          <div className="services-grid">
            <div className="card reveal">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src="https://i.pinimg.com/736x/5c/b6/9f/5cb69f9fb2ca9c81ac6a42aaba6a3f3b.jpg" 
                  alt="Classic Haircut"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-accent text-dark font-bold py-1 px-3 m-2 rounded">Popular</div>
              </div>
              <div className="card-content">
                <h3 className="text-xl font-poppins font-semibold mb-3 border-accent">Classic Haircut</h3>
                <p className="text-dark-gray mb-4">
                  Precision scissor cut with attention to detail, finished with styling to suit your preference.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">$25</span>
                  <div className="flex items-center text-dark-gray">
                    <i className="far fa-clock mr-2"></i>
                    <span>30 min</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card reveal">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src="https://cdn.shopify.com/s/files/1/0052/6018/1607/files/shaping-03-1024x576.png" 
                  alt="Beard Trim & Shaping"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="card-content">
                <h3 className="text-xl font-poppins font-semibold mb-3 border-accent">Beard Trim & Shaping</h3>
                <p className="text-dark-gray mb-4">
                  Expert beard trim with hot towel treatment and precision line-up for a sharp, defined look.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">$15</span>
                  <div className="flex items-center text-dark-gray">
                    <i className="far fa-clock mr-2"></i>
                    <span>20 min</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card reveal">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src="https://www.styleseat.com/blog/wp-content/uploads/2021/11/smiling-man-getting-a-hot-towel-shave-1.jpg" 
                  alt="Hot Towel Shave"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="card-content">
                <h3 className="text-xl font-poppins font-semibold mb-3 border-accent">Hot Towel Shave</h3>
                <p className="text-dark-gray mb-4">
                  Traditional straight razor shave with hot towel preparation and soothing aftershave finish.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">$30</span>
                  <div className="flex items-center text-dark-gray">
                    <i className="far fa-clock mr-2"></i>
                    <span>45 min</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card reveal">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1626954079979-ec4f7b05e032?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=350&q=80" 
                  alt="Hair Coloring"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="card-content">
                <h3 className="text-xl font-poppins font-semibold mb-3 border-accent">Hair Coloring</h3>
                <p className="text-dark-gray mb-4">
                  Professional color application with consultation to achieve your desired look and style.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">$50+</span>
                  <div className="flex items-center text-dark-gray">
                    <i className="far fa-clock mr-2"></i>
                    <span>60+ min</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card reveal">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src="https://129248156.cdn6.editmysite.com/uploads/1/2/9/2/129248156/P4OYXKYAE2ERENZ2GGRVI4J7.jpeg" 
                  alt="Kid's Haircut"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="card-content">
                <h3 className="text-xl font-poppins font-semibold mb-3 border-accent">Kid's Haircut</h3>
                <p className="text-dark-gray mb-4">
                  Gentle and patient haircut service for children, making their experience fun and comfortable.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">$20</span>
                  <div className="flex items-center text-dark-gray">
                    <i className="far fa-clock mr-2"></i>
                    <span>25 min</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card reveal">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=350&q=80" 
                  alt="Deluxe Package"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-secondary text-light font-bold py-1 px-3 m-2 rounded">Best Value</div>
              </div>
              <div className="card-content">
                <h3 className="text-xl font-poppins font-semibold mb-3 border-accent">Deluxe Package</h3>
                <p className="text-dark-gray mb-4">
                  Complete experience including haircut, beard trim, hot towel shave, and scalp massage.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">$60</span>
                  <div className="flex items-center text-dark-gray">
                    <i className="far fa-clock mr-2"></i>
                    <span>90 min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Updated with modern design */}
      <section id="contact" className="py-20 mobile-py-12 tablet-py-16 bg-gray">
        <div className="container mx-auto px-6 mobile-px-4">
          <div className="flex flex-col items-center mb-12 mobile-mb-6 reveal">
            <div className="flex items-center mb-4">
              <div className="h-1 w-6 sm:w-10 bg-accent"></div>
              <p className="mx-2 sm:mx-4 text-secondary font-semibold text-sm sm:text-base">GET IN TOUCH</p>
              <div className="h-1 w-6 sm:w-10 bg-accent"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-primary mb-2 text-center">Contact Us</h2>
            <p className="text-center text-dark-gray max-w-xl sm:max-w-2xl mt-4 text-sm sm:text-base">
              We're conveniently located and ready to serve you. Feel free to stop by or get in touch.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-start reveal">
            <div>
              <div className="card mb-8">
                <div className="card-content">
                  <h3 className="text-xl font-poppins font-semibold mb-6 border-left-accent">Visit Our Location</h3>
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                        <i className="fas fa-map-marker-alt text-secondary"></i>
                      </div>
                      <div>
                        <h4 className="font-opensans font-semibold mb-1">Address</h4>
                        <p>123 Main Street, Anytown, ST 12345</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                        <i className="fas fa-phone-alt text-secondary"></i>
                      </div>
                      <div>
                        <h4 className="font-opensans font-semibold mb-1">Phone</h4>
                        <p>(555) 123-4567</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                        <i className="fas fa-envelope text-secondary"></i>
                      </div>
                      <div>
                        <h4 className="font-opensans font-semibold mb-1">Email</h4>
                        <p>info@slysbarbershop.com</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="card">
                <div className="card-content">
                  <h3 className="text-xl font-poppins font-semibold mb-6 border-left-accent">Business Hours</h3>
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center">
                      <span className="font-opensans font-semibold">Monday - Friday</span>
                      <span className="px-3 py-1 bg-primary text-light rounded">9:00 AM - 7:00 PM</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-opensans font-semibold">Saturday</span>
                      <span className="px-3 py-1 bg-primary text-light rounded">8:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-opensans font-semibold">Sunday</span>
                      <span className="px-3 py-1 bg-primary text-light rounded">10:00 AM - 4:00 PM</span>
                    </li>
                  </ul>
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                        <i className="fas fa-info-circle text-secondary"></i>
                      </div>
                      <p className="text-dark-gray">
                        Walk-ins are welcome, but appointments are recommended for faster service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-full">
              <div className="card overflow-hidden h-full min-h-[500px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215173352747!2d-73.9885693!3d40.7410446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3820e39c1%3A0x9a09c11dae84a258!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629877533671!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: '500px' }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Sly's Barbershop Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 mobile-py-12 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-6 mobile-px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:max-w-xl text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-light mb-2">Ready for a Premium Haircut?</h3>
              <p className="text-gray text-sm sm:text-base">Book your appointment today and experience the difference.</p>
            </div>
            <a href="#contact" className="btn btn-accent text-sm sm:text-base">
              Book Now
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
        
        <div className="absolute right-0 bottom-0 opacity-10 hidden sm:block">
          <i className="fas fa-cut text-light" style={{ fontSize: '180px' }}></i>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 block sm:hidden">
          <i className="fas fa-cut text-light" style={{ fontSize: '120px' }}></i>
        </div>
      </section>

      {/* Footer - Updated with modern design */}
      <footer className="bg-dark text-light py-10 mobile-py-8">
        <div className="container mx-auto px-6 mobile-px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6">
            <div className="text-center sm:text-left">
              <div className="flex items-center mb-4 justify-center sm:justify-start">
                <i className="fas fa-cut text-accent mr-2"></i>
                <h2 className="text-xl sm:text-2xl font-poppins font-bold">Sly's <span className="text-secondary">Barbershop</span></h2>
              </div>
              <p className="mb-4 text-gray text-sm sm:text-base">Excellence in Every Detail</p>
              <div className="flex space-x-4 mt-6 justify-center sm:justify-start">
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center hover:bg-secondary transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center hover:bg-secondary transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center hover:bg-secondary transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center hover:bg-secondary transition-colors">
                  <i className="fab fa-yelp"></i>
                </a>
              </div>
            </div>
            
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-poppins font-semibold mb-4 border-accent inline-block sm:block">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-accent transition-colors flex items-center justify-center sm:justify-start">
                  <i className="fas fa-chevron-right text-xs mr-2"></i> Home
                </a></li>
                <li><a href="#about" className="hover:text-accent transition-colors flex items-center justify-center sm:justify-start">
                  <i className="fas fa-chevron-right text-xs mr-2"></i> About
                </a></li>
                <li><a href="#services" className="hover:text-accent transition-colors flex items-center justify-center sm:justify-start">
                  <i className="fas fa-chevron-right text-xs mr-2"></i> Services
                </a></li>
                <li><a href="#reviews" className="hover:text-accent transition-colors flex items-center justify-center sm:justify-start">
                  <i className="fas fa-chevron-right text-xs mr-2"></i> Reviews
                </a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors flex items-center justify-center sm:justify-start">
                  <i className="fas fa-chevron-right text-xs mr-2"></i> Contact
                </a></li>
              </ul>
            </div>
            
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-poppins font-semibold mb-4 border-accent inline-block sm:block">Contact Info</h3>
              <ul className="space-y-3 text-sm sm:text-base">
                <li className="flex items-start justify-center sm:justify-start">
                  <i className="fas fa-map-marker-alt text-accent mt-1 mr-3"></i>
                  <span>123 Main Street, Anytown, ST 12345</span>
                </li>
                <li className="flex items-start justify-center sm:justify-start">
                  <i className="fas fa-phone-alt text-accent mt-1 mr-3"></i>
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-start justify-center sm:justify-start">
                  <i className="fas fa-envelope text-accent mt-1 mr-3"></i>
                  <span>info@slysbarbershop.com</span>
                </li>
                <li className="flex items-start justify-center sm:justify-start">
                  <i className="fas fa-clock text-accent mt-1 mr-3"></i>
                  <span>Mon-Fri: 9am-7pm, Sat: 8am-6pm, Sun: 10am-4pm</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 sm:mt-10 pt-6 sm:pt-8 text-center text-gray text-sm sm:text-base">
            <p>&copy; {new Date().getFullYear()} Sly's Barbershop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
