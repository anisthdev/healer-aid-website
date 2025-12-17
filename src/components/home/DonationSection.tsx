'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, Sparkles, Check, Shield } from 'lucide-react';
import { donationTiers } from '@/data/donationTiers';

const DonationSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-accent-sand/30 relative overflow-hidden grain-overlay">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary-400/15 rounded-full blur-3xl" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-primary-600" />
            <span className="text-primary-600 font-accent text-sm tracking-[0.3em] uppercase">
              Make a Difference
            </span>
            <Sparkles className="w-6 h-6 text-primary-600" />
          </div>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-neutral-900 mb-6">
            Your Support
            <span className="block text-gradient-warm">Changes Lives</span>
          </h2>
          <p className="text-neutral-700 text-lg leading-relaxed">
            Choose an amount that resonates with you. Every rupee goes directly toward creating
            sustainable, lasting change in communities across West Bengal.
          </p>
        </motion.div>

        {/* Donation Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {donationTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative ${tier.popular ? 'md:scale-105 z-10' : ''}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-warm text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1 z-20">
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              <div className={`relative h-full bg-white rounded-3xl p-8 border-2 transition-all duration-300 hover:shadow-editorial group ${
                tier.popular
                  ? 'border-primary-500'
                  : 'border-neutral-200 hover:border-primary-300'
              }`}>
                {/* Amount */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-neutral-600 text-xl">₹</span>
                    <span className="font-display font-black text-5xl text-neutral-900">
                      {tier.amount.toLocaleString()}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-neutral-900">
                    {tier.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  {tier.description}
                </p>

                {/* Impact Badge */}
                <div className="mb-8 p-4 bg-primary-50 rounded-xl border border-primary-200">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-primary-700 font-semibold mb-1 uppercase tracking-wider">
                        Direct Impact
                      </p>
                      <p className="text-sm text-neutral-900 font-semibold">
                        {tier.impact}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/get-involved/donate?amount=${tier.amount}`}
                  className={`block w-full py-4 rounded-full font-bold text-center transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-warm text-white hover:shadow-warm'
                      : 'bg-neutral-900 text-white hover:bg-neutral-800'
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    <Heart className="w-5 h-5" fill="currentColor" />
                    Donate ₹{tier.amount.toLocaleString()}
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Amount */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 md:p-10 border-2 border-neutral-200 shadow-soft text-center">
            <h3 className="font-display font-bold text-2xl text-neutral-900 mb-3">
              Prefer to Choose Your Own Amount?
            </h3>
            <p className="text-neutral-600 mb-6">
              Every contribution, no matter the size, makes a meaningful difference.
            </p>
            <Link
              href="/get-involved/donate"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-500 text-primary-600 font-bold rounded-full hover:bg-primary-50 transition-all"
            >
              Custom Donation Amount
              <Heart className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        {/* Tax Benefit Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-neutral-200">
            <Shield className="w-5 h-5 text-secondary-600" />
            <div className="text-left">
              <p className="text-xs text-neutral-600 font-semibold">80-G Tax Benefit</p>
              <p className="text-xs text-neutral-500">All donations are tax-deductible</p>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-8 opacity-60"
        >
          {['Secure Payment', 'Tax Receipts', 'Transparent Use', '100% Impact'].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary-600" />
              <span className="text-sm text-neutral-700 font-medium">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DonationSection;
