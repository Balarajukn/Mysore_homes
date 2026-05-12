import { Building2, Mail, MapPin, Phone, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const QUICK_LINKS = ['Buy Property', 'Rent Property', 'Commercial Spaces', 'Post Free Ad', 'Home Loans'];
const PROPERTY_TYPES = ['Apartments', 'Villas & Row Houses', 'Plots & Sites', 'Builder Floors', 'PG / Hostels'];
const SOCIAL = [
  { Icon: Facebook, href: '#' },
  { Icon: Instagram, href: '#' },
  { Icon: Twitter, href: '#' },
  { Icon: Youtube, href: '#' },
];

const Footer = () => (
  <footer className="bg-darkGray text-white">
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-2 rounded-xl">
              <Building2 size={18} />
            </div>
            <span className="text-lg font-black text-white">
              Dhare <span className="text-primary">Infra</span>
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            Premium hyperlocal real estate platform for Mysuru. Buy, sell, and rent verified properties with zero brokerage.
          </p>
          <div className="flex gap-2.5">
            {SOCIAL.map(({ Icon, href }, i) => (
              <a key={i} href={href} className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-white mb-5 text-xs uppercase tracking-widest">Quick Links</h4>
          <ul className="space-y-3">
            {QUICK_LINKS.map((label, i) => (
              <li key={i}>
                <Link to="/listings" className="text-sm text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full shrink-0" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Property Types */}
        <div>
          <h4 className="font-bold text-white mb-5 text-xs uppercase tracking-widest">Property Types</h4>
          <ul className="space-y-3">
            {PROPERTY_TYPES.map((label, i) => (
              <li key={i}>
                <a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full shrink-0" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-white mb-5 text-xs uppercase tracking-widest">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-sm text-gray-400">
              <MapPin size={15} className="text-primary mt-0.5 shrink-0" />
              <span>Mysore, Karnataka, India – 570 001</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-400">
              <Phone size={15} className="text-primary shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-400">
              <Mail size={15} className="text-primary shrink-0" />
              <span>info@dhareinfra.com</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-gray-700">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
        <span>&copy; {new Date().getFullYear()} Dhare Infra. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-primary transition-colors">RERA Compliance</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
