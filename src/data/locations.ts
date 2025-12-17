export interface Location {
  id: string;
  name: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  description: string;
  projects: string[];
}

export const locations: Location[] = [
  {
    id: 'darjeeling',
    name: 'Darjeeling',
    coordinates: { lat: 27.0360, lng: 88.2627 },
    description: 'Hill communities receiving nutrition programs and seasonal support',
    projects: ['Nourishing Hope', 'Clothes for All', 'Festival Celebrations']
  },
  {
    id: 'kolkata',
    name: 'Kolkata',
    coordinates: { lat: 22.5726, lng: 88.3639 },
    description: 'Urban programs including TB support, skill development, and education',
    projects: ['Nikshay Mitra', 'Baking Skills', 'Education Support', 'Diwali Celebrations']
  },
  {
    id: 'howrah',
    name: 'Howrah',
    coordinates: { lat: 22.5958, lng: 88.2636 },
    description: 'Community empowerment and comprehensive family support programs',
    projects: ['Food for All', 'Education Support', 'Health Initiatives']
  },
  {
    id: 'north-24-parganas',
    name: 'North 24 Parganas',
    coordinates: { lat: 22.6157, lng: 88.4332 },
    description: 'Rural development, child nutrition, and festival support',
    projects: ['Nourishing Hope', 'Raksha Bandhan Support', 'Rural Development']
  },
  {
    id: 'south-24-parganas',
    name: 'South 24 Parganas',
    coordinates: { lat: 22.1612, lng: 88.4353 },
    description: 'Coastal communities with agriculture and disaster recovery programs',
    projects: ['Agriculture Support', 'Disaster Recovery', 'Livelihood Programs']
  }
];
