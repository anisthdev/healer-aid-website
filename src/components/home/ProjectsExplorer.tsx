'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeartPulse, BookOpen, Sprout, Briefcase, Leaf, Scale, Users2, Building2, CloudRain, ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';

const projectIcons: Record<string, React.ReactNode> = {
  'H': <HeartPulse className="w-10 h-10" />,
  'E': <BookOpen className="w-10 h-10" />,
  'A': <Sprout className="w-10 h-10" />,
  'L': <Briefcase className="w-10 h-10" />,
  'E2': <Leaf className="w-10 h-10" />,
  'R': <Scale className="w-10 h-10" />,
  'A2': <Users2 className="w-10 h-10" />,
  'I': <Building2 className="w-10 h-10" />,
  'D': <CloudRain className="w-10 h-10" />,
};

const getIcon = (index: number, theme: string) => {
  if (theme === 'E' && index === 4) return projectIcons['E2'];
  if (theme === 'A' && index === 6) return projectIcons['A2'];
  return projectIcons[theme];
};

const ProjectsExplorer = () => {
  const themeColors = [
    'from-rose-500/90 to-pink-600/90',
    'from-blue-500/90 to-indigo-600/90',
    'from-green-500/90 to-emerald-600/90',
    'from-amber-500/90 to-orange-600/90',
    'from-teal-500/90 to-cyan-600/90',
    'from-purple-500/90 to-violet-600/90',
    'from-fuchsia-500/90 to-pink-600/90',
    'from-sky-500/90 to-blue-600/90',
    'from-slate-600/90 to-gray-700/90',
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23F4753D' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-warm" />
            <span className="text-primary-600 font-accent text-sm tracking-[0.3em] uppercase">
              Our Programs
            </span>
            <div className="w-12 h-[2px] bg-gradient-warm" />
          </div>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-neutral-900 mb-6">
            HEALER AID
            <span className="block text-primary-600">Nine Pathways to Change</span>
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed">
            Each letter represents a commitment to transformative, community-driven initiatives
            that create lasting impact across West Bengal.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block h-full"
              >
                <div className="relative h-full bg-neutral-50 rounded-3xl overflow-hidden border border-neutral-200 hover:border-primary-300 transition-all duration-500 hover:shadow-editorial">
                  {/* Background Image */}
                  {project.image && (
                    <div className="absolute inset-0">
                      <img
                        src={project.image}
                        alt={project.subtitle}
                        className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/70 to-white/60" />
                    </div>
                  )}

                  {/* Top Colored Bar */}
                  <div className={`relative h-2 bg-gradient-to-r ${themeColors[index]}`} />

                  <div className="relative p-8">
                    {/* Theme Letter */}
                    <div className="absolute top-8 right-8 opacity-10 pointer-events-none">
                      <span className="font-display font-black text-9xl text-neutral-900 leading-none">
                        {project.theme}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${themeColors[index]} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                        {getIcon(index, project.theme)}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <span className="inline-block px-3 py-1 bg-white rounded-full text-xs font-semibold text-neutral-700 mb-4 border border-neutral-300">
                        {project.theme} - {project.title}
                      </span>

                      <h3 className="font-display font-bold text-2xl text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {project.subtitle}
                      </h3>

                      <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Impact Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.impact.slice(0, 2).map((impact, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white rounded-full text-xs text-neutral-600 border border-neutral-200"
                          >
                            {impact}
                          </span>
                        ))}
                      </div>

                      {/* Link */}
                      <div className="flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-warm text-white font-bold text-lg rounded-full hover:shadow-warm transition-all duration-300 group"
          >
            Explore All Programs
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsExplorer;
