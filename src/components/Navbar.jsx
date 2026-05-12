import { useState } from 'react';
import { Menu, Building2, X, ShoppingBag, Key, LayoutDashboard, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Buy', to: '/listings', icon: ShoppingBag },
  { label: 'Rent', to: '/listings', icon: Key },
  { label: 'Login', to: '/login', icon: LogIn },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const close = () => setMobileOpen(false);

  return (
    <>
      <nav className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">

          {/* Logo */}
          <Link to="/" onClick={close} className="flex items-center gap-2 group">
            <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-2 rounded-xl shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
              <Building2 size={20} />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tight text-darkGray">
              Dhare <span className="text-primary">Infra</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-600">
            {NAV_LINKS.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className="relative group hover:text-primary transition-colors"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Post Property CTA */}
            <Link
              to="/dashboard"
              onClick={close}
              className="bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-300 text-xs md:text-sm flex items-center gap-1.5 group"
            >
              <span className="hidden sm:inline">Post Property</span>
              <span className="sm:hidden">Post</span>
              <span className="bg-white/20 px-1.5 py-0.5 rounded-md text-[10px] md:text-xs uppercase tracking-wider group-hover:bg-white group-hover:text-primary transition-colors">
                Free
              </span>
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="md:hidden p-2 rounded-lg text-darkGray hover:text-primary hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={close}
          />

          {/* Drawer Panel */}
          <div className="absolute top-[57px] left-0 right-0 bg-white shadow-2xl border-t border-gray-100 overflow-hidden">
            <div className="px-5 py-6 flex flex-col gap-1">
              {NAV_LINKS.map(({ label, to, icon: Icon }) => (
                <Link
                  key={label}
                  to={to}
                  onClick={close}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-bold text-darkGray hover:bg-primary/5 hover:text-primary transition-colors"
                >
                  <Icon size={18} className="text-primary" />
                  {label}
                </Link>
              ))}

              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link
                  to="/dashboard"
                  onClick={close}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3.5 rounded-xl font-bold text-base shadow-lg shadow-primary/30"
                >
                  <LayoutDashboard size={18} />
                  Post Property — Free
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
