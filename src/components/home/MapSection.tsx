'use client';

import { motion } from 'framer-motion';
import { MapPin, Heart } from 'lucide-react';
import { locations } from '@/data/locations';
import { useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';

const MapSection = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [openInfoWindowId, setOpenInfoWindowId] = useState<string | null>(null);

  // Center of West Bengal for initial map view
  const mapCenter = { lat: 23.5, lng: 87.5 };
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

  return (
    <section className="py-24 bg-gradient-to-br from-neutral-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23557655' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
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
            <div className="w-12 h-[2px] bg-gradient-sage" />
            <span className="text-secondary-600 font-accent text-sm tracking-[0.3em] uppercase">
              Our Reach
            </span>
            <div className="w-12 h-[2px] bg-gradient-sage" />
          </div>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-neutral-900 mb-6">
            Where We Work
            <span className="block text-gradient-sage">Across West Bengal</span>
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed">
            From the hills of Darjeeling to the coastal regions of South 24 Parganas,
            our work spans five districts, touching countless lives.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-neutral-100 rounded-3xl overflow-hidden border border-neutral-200 shadow-soft relative">
              {apiKey ? (
                <APIProvider apiKey={apiKey}>
                  <Map
                    defaultCenter={mapCenter}
                    defaultZoom={8}
                    mapId="healer-aid-map"
                    gestureHandling="greedy"
                    disableDefaultUI={false}
                    style={{ width: '100%', height: '100%' }}
                  >
                    {locations.map((location) => (
                      <AdvancedMarker
                        key={location.id}
                        position={{ lat: location.coordinates.lat, lng: location.coordinates.lng }}
                        onClick={() => setOpenInfoWindowId(location.id)}
                      >
                        <Pin
                          background={'#F4753D'}
                          borderColor={'#E55722'}
                          glyphColor={'#FFF'}
                        />

                        {openInfoWindowId === location.id && (
                          <InfoWindow
                            position={{ lat: location.coordinates.lat, lng: location.coordinates.lng }}
                            onCloseClick={() => setOpenInfoWindowId(null)}
                          >
                            <div className="p-2 max-w-xs">
                              <h4 className="font-display font-bold text-lg text-neutral-900 mb-2">
                                {location.name}
                              </h4>
                              <p className="text-sm text-neutral-600 mb-3">
                                {location.description}
                              </p>
                              <div className="flex flex-wrap gap-1">
                                {location.projects.slice(0, 2).map((project, i) => (
                                  <span
                                    key={i}
                                    className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                                  >
                                    {project}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </InfoWindow>
                        )}
                      </AdvancedMarker>
                    ))}
                  </Map>
                </APIProvider>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary-100 to-primary-50">
                  <div className="text-center p-8">
                    <MapPin className="w-20 h-20 text-secondary-500 mx-auto mb-4" />
                    <p className="text-neutral-600 font-medium">
                      Google Maps API key not found
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary-500/10 rounded-3xl -z-10" />
          </motion.div>

          {/* Locations List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-display font-bold text-2xl text-neutral-900 mb-6">
              Districts We Serve
            </h3>

            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`group p-6 bg-white rounded-2xl border-2 transition-all duration-300 cursor-pointer hover:shadow-soft ${
                  selectedLocation === location.id
                    ? 'border-secondary-500 shadow-soft'
                    : 'border-neutral-200 hover:border-secondary-300'
                }`}
                onClick={() => setSelectedLocation(location.id === selectedLocation ? null : location.id)}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    selectedLocation === location.id
                      ? 'bg-secondary-500 text-white'
                      : 'bg-secondary-100 text-secondary-600 group-hover:bg-secondary-200'
                  }`}>
                    <MapPin className="w-6 h-6" />
                  </div>

                  <div className="flex-1">
                    <h4 className="font-display font-bold text-xl text-neutral-900 mb-2">
                      {location.name}
                    </h4>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-3">
                      {location.description}
                    </p>

                    {/* Programs in this location */}
                    <div className="flex flex-wrap gap-2">
                      {location.projects.slice(0, 3).map((project, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-secondary-50 text-secondary-700 text-xs rounded-full border border-secondary-200"
                        >
                          {project}
                        </span>
                      ))}
                      {location.projects.length > 3 && (
                        <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full">
                          +{location.projects.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 p-8 bg-gradient-sage rounded-3xl shadow-soft"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="font-display font-bold text-4xl text-white mb-2">
                5
              </div>
              <div className="text-sm text-white/80 uppercase tracking-wider">
                Districts
              </div>
            </div>
            <div className="text-center">
              <div className="font-display font-bold text-4xl text-white mb-2">
                50+
              </div>
              <div className="text-sm text-white/80 uppercase tracking-wider">
                Villages
              </div>
            </div>
            <div className="text-center">
              <div className="font-display font-bold text-4xl text-white mb-2">
                1000+
              </div>
              <div className="text-sm text-white/80 uppercase tracking-wider">
                Families
              </div>
            </div>
            <div className="text-center">
              <div className="font-display font-bold text-4xl text-white mb-2">
                9
              </div>
              <div className="text-sm text-white/80 uppercase tracking-wider">
                Programs
              </div>
            </div>
            <div className="text-center">
              <div className="font-display font-bold text-4xl text-white mb-2">
                365
              </div>
              <div className="text-sm text-white/80 uppercase tracking-wider">
                Days/Year
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
