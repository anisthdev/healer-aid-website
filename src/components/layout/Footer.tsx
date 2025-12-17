import Link from 'next/link';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { contact, certifications } from '@/data/siteContent';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'About Us': [
      { label: 'Our Mission', href: '/about#mission' },
      { label: 'Our Team', href: '/about#team' },
      { label: 'Impact Stories', href: '/stories' },
      { label: 'Annual Reports', href: '/about#reports' },
    ],
    'Get Involved': [
      { label: 'Donate', href: '/get-involved/donate' },
      { label: 'Volunteer', href: '/get-involved/volunteer' },
      { label: 'Partner With Us', href: '/get-involved/partner' },
      { label: 'Fundraise', href: '/get-involved/fundraise' },
    ],
    'Our Work': [
      { label: 'Health Programs', href: '/projects#health' },
      { label: 'Education', href: '/projects#education' },
      { label: 'Livelihood', href: '/projects#livelihood' },
      { label: 'View All Projects', href: '/projects' },
    ],
  };

  return (
    <footer className="bg-neutral-900 text-neutral-300 grain-overlay">
      {/* Top decorative border */}
      <div className="h-1 bg-gradient-warm" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12">
                <img
                  src="/images/logo.webp"
                  alt="Healer Aid Logo"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                />
              </div>
              <div>
                <h2 className="font-display font-bold text-2xl text-white">
                  Healer Aid
                </h2>
                <p className="text-xs font-accent tracking-widest uppercase text-neutral-400">
                  Foundation
                </p>
              </div>
            </Link>

            <p className="text-neutral-400 leading-relaxed mb-6 max-w-md">
              Empowering vulnerable communities across India through sustainable support in health,
              education, livelihoods, and the environment.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-neutral-400 hover:text-primary-400 transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{contact.email}</span>
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-3 text-neutral-400 hover:text-primary-400 transition-colors group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{contact.phone}</span>
              </a>
              <div className="flex items-start gap-3 text-neutral-400">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="leading-relaxed">
                  336 Buxarah Village Road, Bakultala<br />
                  Howrah-711109, West Bengal, India
                </span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-display font-semibold text-white mb-4">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-primary-400 transition-colors inline-block hover:translate-x-1 duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications & Social */}
        <div className="pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Certifications */}
            <div>
              <p className="text-sm text-neutral-500 mb-3">Certified & Registered:</p>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert) => (
                  <span
                    key={cert.name}
                    className="px-3 py-1.5 bg-neutral-800 text-neutral-400 text-xs rounded-full border border-neutral-700"
                    title={cert.description}
                  >
                    {cert.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-neutral-500 mb-3 text-center md:text-right">
                Connect With Us:
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-primary-500 flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-primary-500 flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-primary-500 flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-neutral-800 text-center">
          <p className="text-sm text-neutral-500">
            © {currentYear} Healer Aid Foundation. All rights reserved. | Built with{' '}
            <Heart className="w-3 h-3 inline text-primary-500" fill="currentColor" /> for
            positive change.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
