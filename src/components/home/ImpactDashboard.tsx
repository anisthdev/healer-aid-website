'use client';

import { motion } from 'framer-motion';
import { Users, MapPin, GraduationCap, Gift, Heart } from 'lucide-react';
import CounterAnimation from '../ui/CounterAnimation';
import { impactStats } from '@/data/impactStats';

const iconMap: Record<string, React.ReactNode> = {
  'children-supported': <Users className="w-8 h-8" />,
  'districts-covered': <MapPin className="w-8 h-8" />,
  'beneficiaries-trained': <GraduationCap className="w-8 h-8" />,
  'festival-children': <Gift className="w-8 h-8" />,
  'women-supported': <Heart className="w-8 h-8" />,
};

const ImpactDashboard = () => {
  return (
    <section className="py-24 bg-neutral-50 grain-overlay relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-warm" />
            <span className="text-primary-600 font-accent text-sm tracking-[0.3em] uppercase">
              Our Impact
            </span>
          </div>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-neutral-900 mb-6">
            Transforming Lives
            <span className="block text-gradient-warm">Across West Bengal</span>
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed">
            Every number tells a story of hope, resilience, and positive change. Together, we're
            building a future where every individual has the opportunity to thrive.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-soft hover:shadow-editorial transition-all duration-500 border border-neutral-200/50 h-full">
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-warm flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500">
                    {iconMap[stat.id]}
                  </div>
                  {/* Decorative dot */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary-500 rounded-full animate-pulse" />
                </div>

                {/* Number */}
                <div className="mb-4">
                  <span className="font-display font-black text-5xl md:text-6xl text-neutral-900 block leading-none">
                    <CounterAnimation
                      end={stat.value}
                      suffix={stat.suffix}
                    />
                  </span>
                </div>

                {/* Label */}
                <h3 className="font-display font-semibold text-xl text-neutral-900 mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                {stat.description && (
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                )}

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-warm transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-neutral-700 text-lg mb-6 font-accent italic">
            "Every contribution, big or small, creates ripples of positive change"
          </p>
          <a
            href="/stories"
            className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white font-semibold rounded-full hover:bg-neutral-800 transition-colors"
          >
            Read Impact Stories
            <Heart className="w-5 h-5" fill="currentColor" />
          </a>
        </motion.div>
      </div>

      {/* Decorative Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
    </section>
  );
};

export default ImpactDashboard;
