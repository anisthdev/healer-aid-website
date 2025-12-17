'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-24 bg-neutral-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-500 rounded-full mb-6">
              <Mail className="w-10 h-10 text-white" />
            </div>

            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              Stay Connected
              <span className="block text-primary-400">to Our Mission</span>
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Receive monthly updates about our programs, impact stories, and ways you can
              help create lasting change in communities across West Bengal.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-6 py-5 bg-white/10 border-2 border-white/20 text-white placeholder-neutral-400 rounded-full focus:outline-none focus:border-primary-500 transition-colors backdrop-blur-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-8 py-5 bg-primary-500 text-white font-bold rounded-full hover:bg-primary-600 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-warm"
                  >
                    {isLoading ? (
                      <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Subscribe
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-neutral-500 text-sm mt-4 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            ) : (
              <div className="max-w-2xl mx-auto text-center">
                <div className="inline-flex items-center gap-3 px-8 py-5 bg-secondary-500/20 border-2 border-secondary-500 text-white rounded-full">
                  <CheckCircle className="w-6 h-6 text-secondary-400" />
                  <span className="font-semibold">
                    Thank you for subscribing! Check your email to confirm.
                  </span>
                </div>
              </div>
            )}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-neutral-500 text-sm"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary-500" />
              <span>Monthly Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary-500" />
              <span>Impact Stories</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary-500" />
              <span>No Spam</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
