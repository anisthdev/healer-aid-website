'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Handshake } from 'lucide-react';

const partners = [
  {
    name: 'Azadi Ka Amrit Mahotsav',
    logo: '/images/organisation_logos/azadi_ka_amrit_mahotsav.png',
  },
  {
    name: 'Government Programme',
    logo: '/images/organisation_logos/government_programme.png',
  },
  {
    name: 'National Health Mission',
    logo: '/images/organisation_logos/national_health_mission.png',
  },
  {
    name: 'NGO Arpan',
    logo: '/images/organisation_logos/ngo_arpan.png',
  },
  {
    name: 'NITI Aayog',
    logo: '/images/organisation_logos/niti_aayog.png',
  },
];

const PartnersSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-500 rounded-full mb-6">
              <Handshake className="w-10 h-10 text-white" />
            </div>

            <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-4">
              Our Partners
              <span className="block text-primary-500">& Supporters</span>
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Working together with government organizations and NGO partners to create lasting impact
              in communities across India.
            </p>
          </motion.div>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="relative aspect-square bg-white rounded-2xl p-6 shadow-sm hover:shadow-warm transition-all duration-300 border border-neutral-100 hover:border-primary-200 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={150}
                    height={150}
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                  />
                </div>
                <p className="text-center mt-3 text-sm text-neutral-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {partner.name}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Trust Statement */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-neutral-500 text-sm max-w-2xl mx-auto">
              These partnerships enable us to scale our impact and deliver sustainable healthcare solutions
              to underserved communities across West Bengal and beyond.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
