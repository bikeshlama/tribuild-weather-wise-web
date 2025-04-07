
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Calendar, Clock } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tribuild-dark text-white pt-12 pb-4">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo and About */}
          <div>
            <Logo className="mb-4" />
            <p className="mb-4 text-gray-300">
              Rain or Shine, We've Got You Covered. Tribuild provides expert heating, cooling, and waterproofing services for residential and commercial properties.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-tribuild-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-tribuild-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-tribuild-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 border-b border-tribuild-gold pb-2">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#heating" className="text-gray-300 hover:text-tribuild-gold transition-colors">Heating Services</Link>
              </li>
              <li>
                <Link to="/services#cooling" className="text-gray-300 hover:text-tribuild-gold transition-colors">Cooling Services</Link>
              </li>
              <li>
                <Link to="/services#waterproofing" className="text-gray-300 hover:text-tribuild-gold transition-colors">Basement Waterproofing</Link>
              </li>
              <li>
                <Link to="/services#foundation" className="text-gray-300 hover:text-tribuild-gold transition-colors">Foundation Solutions</Link>
              </li>
              <li>
                <Link to="/services#emergency" className="text-gray-300 hover:text-tribuild-gold transition-colors">Emergency Services</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 border-b border-tribuild-gold pb-2">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-tribuild-gold mr-2 mt-1 flex-shrink-0" />
                <span>
                  <a href="tel:1234567890" className="text-gray-300 hover:text-tribuild-gold transition-colors">(123) 456-7890</a>
                </span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-tribuild-gold mr-2 mt-1 flex-shrink-0" />
                <span>
                  <a href="mailto:info@tribuild.com" className="text-gray-300 hover:text-tribuild-gold transition-colors">info@tribuild.com</a>
                </span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-tribuild-gold mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Construction Avenue<br />
                  Building City, BC 12345
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Business Hours */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 border-b border-tribuild-gold pb-2">Business Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Calendar className="h-5 w-5 text-tribuild-gold mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Monday - Friday</p>
                  <p className="text-gray-300">8:00 AM - 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Calendar className="h-5 w-5 text-tribuild-gold mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Saturday</p>
                  <p className="text-gray-300">9:00 AM - 4:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-tribuild-gold mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-tribuild-gold font-semibold">24/7 Emergency Service</p>
                  <p className="text-gray-300">Available All Year</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section with Copyright */}
        <div className="pt-6 border-t border-gray-700 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400 text-sm mb-2 md:mb-0">
            &copy; {currentYear} Tribuild. All rights reserved.
          </p>
          <div className="text-sm text-gray-400 space-x-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
