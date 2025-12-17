'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Quote, ArrowRight, Heart } from 'lucide-react';
import { stories } from '@/data/stories';

const StoriesSection = () => {
  const featuredStories = stories.filter(story => story.featured);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-sand/20 via-transparent to-secondary-100/20" />

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
              Stories of Hope
            </span>
          </div>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-neutral-900 mb-6">
            Lives Transformed
            <span className="block text-gradient-warm">Through Compassion</span>
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed">
            Behind every statistic is a human story of resilience, hope, and transformation.
            Meet the individuals whose lives have been forever changed.
          </p>
        </motion.div>

        {/* Featured Story */}
        {featuredStories.map((story, index) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className="relative group">
                <div className="aspect-[4/5] bg-gradient-to-br from-primary-200 to-secondary-200 rounded-3xl overflow-hidden relative">
                  {story.image ? (
                    <>
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                        priority={index === 0}
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-secondary-900/20 z-10" />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-400/80 to-secondary-400/80 flex items-center justify-center">
                      <Heart className="w-32 h-32 text-white/30" />
                    </div>
                  )}

                  {/* Floating Quote Icon */}
                  <div className="absolute top-8 right-8 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform z-20">
                    <Quote className="w-8 h-8 text-primary-500" />
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500/10 rounded-3xl -z-10" />
              </div>

              {/* Content */}
              <div>
                <div className="inline-block px-4 py-2 bg-primary-100 rounded-full text-sm font-semibold text-primary-700 mb-6">
                  {story.project}
                </div>

                <h3 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-6 leading-tight">
                  {story.title}
                </h3>

                <div className="mb-6 p-6 bg-neutral-50 rounded-2xl border-l-4 border-primary-500">
                  <p className="font-accent italic text-lg text-neutral-700 leading-relaxed">
                    "{story.excerpt}"
                  </p>
                </div>

                <div className="mb-8 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                    <div>
                      <p className="text-sm text-neutral-600 font-semibold">Beneficiary</p>
                      <p className="text-neutral-900">{story.beneficiary.name}, {story.beneficiary.age} years</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                    <div>
                      <p className="text-sm text-neutral-600 font-semibold">Location</p>
                      <p className="text-neutral-900">{story.beneficiary.location}</p>
                    </div>
                  </div>
                </div>

                {/* Impact Points */}
                <div className="mb-8 space-y-3">
                  <p className="text-sm font-semibold text-neutral-700 uppercase tracking-wider mb-3">
                    Transformation Impact:
                  </p>
                  {story.impact.slice(0, 3).map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" />
                      <p className="text-neutral-700">{point}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/stories/${story.id}`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white font-bold rounded-full hover:bg-neutral-800 transition-all duration-300 group"
                >
                  Read Full Story
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}

        {/* View All Stories CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            href="/stories"
            className="inline-flex items-center gap-3 px-10 py-5 border-2 border-neutral-900 text-neutral-900 font-bold text-lg rounded-full hover:bg-neutral-900 hover:text-white transition-all duration-300 group"
          >
            View All Stories
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default StoriesSection;
