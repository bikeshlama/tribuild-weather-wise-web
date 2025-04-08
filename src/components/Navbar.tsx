
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="container-custom py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo className="h-10 mr-2" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6 font-medium">
              <li><Link to="/" className="text-tribuild-dark dark:text-white hover:text-tribuild-maroon dark:hover:text-tribuild-gold transition-colors duration-300">Home</Link></li>
              <li><Link to="/services" className="text-tribuild-dark dark:text-white hover:text-tribuild-maroon dark:hover:text-tribuild-gold transition-colors duration-300">Services</Link></li>
              <li><Link to="/products" className="text-tribuild-dark dark:text-white hover:text-tribuild-maroon dark:hover:text-tribuild-gold transition-colors duration-300">Products</Link></li>
              <li><Link to="/about" className="text-tribuild-dark dark:text-white hover:text-tribuild-maroon dark:hover:text-tribuild-gold transition-colors duration-300">About</Link></li>
              <li><Link to="/contact" className="text-tribuild-dark dark:text-white hover:text-tribuild-maroon dark:hover:text-tribuild-gold transition-colors duration-300">Contact</Link></li>
            </ul>
            <ThemeToggle />
            <Button asChild className="bg-tribuild-maroon hover:bg-tribuild-maroonLight text-white flex items-center gap-2 animate-pulse">
              <Link to="tel:8113023156">
                <Phone size={16} />
                <span>Emergency Service</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button asChild variant="ghost" size="icon" className="mr-2 text-tribuild-maroon">
              <Link to="tel:8113023156" aria-label="Call now">
                <Phone className="h-6 w-6" />
              </Link>
            </Button>
            <button
              onClick={toggleMenu}
              className="text-tribuild-dark dark:text-white hover:text-tribuild-maroon transition-colors duration-300"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-50 transition-colors duration-300"
          >
            <div className="container-custom py-4">
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link
                    to="/"
                    className="block py-2 text-tribuild-dark dark:text-white hover:text-tribuild-maroon transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="block py-2 text-tribuild-dark dark:text-white hover:text-tribuild-maroon transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="block py-2 text-tribuild-dark dark:text-white hover:text-tribuild-maroon transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block py-2 text-tribuild-dark dark:text-white hover:text-tribuild-maroon transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="block py-2 text-tribuild-dark dark:text-white hover:text-tribuild-maroon transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Button asChild className="bg-tribuild-maroon hover:bg-tribuild-maroonLight text-white w-full justify-center">
                    <Link to="tel:8113023156" onClick={toggleMenu}>
                      <Phone size={16} className="mr-2" />
                      <span>Emergency Service</span>
                    </Link>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
