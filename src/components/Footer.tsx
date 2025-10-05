import { Link } from "react-router-dom";
import { Mail, Phone, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">P</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg">Project Panash</h3>
                <p className="text-xs italic">Voices of Change</p>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Empowering Dalit and marginalized students in rural Nepal through bi-weekly English essay competitions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-primary-light transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/impact" className="hover:text-primary-light transition-smooth">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-primary-light transition-smooth">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-primary-light transition-smooth">
                  Support Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:kailashpariyar57@gmail.com"
                  className="hover:text-primary-light transition-smooth"
                >
                  kailashpariyar57@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="https://wa.me/19492047365" className="hover:text-primary-light transition-smooth">
                  +1 949-204-7365
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-foreground/20 pt-6 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Project Panash (Illuminant). All rights reserved.</p>
          <p className="mt-2 text-xs">
            Built with ❤️ to empower marginalized voices in Nepal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;