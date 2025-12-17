export interface Project {
  id: string;
  theme: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  impact: string[];
  slug: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'health',
    theme: 'H',
    title: 'Health',
    subtitle: 'Nikshay Mitra',
    description: 'Supporting TB patients under the National TB Elimination Programme with nutrition, counseling, and dignified care.',
    fullDescription: 'A remarkable step toward building a TB-free India. As a Ni-kshay Mitra, Healer Aid is committed to providing regular nutritional support and care to adopted patients, supporting their recovery journey with dignity and compassion.',
    impact: [
      'Better health outcomes',
      'Reduced malnutrition',
      'Improved well-being',
      'Dignified recovery journey'
    ],
    slug: 'health-nikshay-mitra',
    image: '/images/outside_healthcenter.png'
  },
  {
    id: 'education',
    theme: 'E',
    title: 'Education',
    subtitle: 'Pathways to Possibility',
    description: 'Inclusive learning for all through learning centers, scholarships, and digital literacy programs.',
    fullDescription: 'Runs learning centers, scholarships, and digital literacy programs for marginalized children, ensuring every child has access to quality education.',
    impact: [
      'Higher enrollment rates',
      'Lower dropout rates',
      'Better learning outcomes',
      'Digital literacy for all'
    ],
    slug: 'education-pathways',
    image: '/images/poor_children_in_uniform.png'
  },
  {
    id: 'agriculture',
    theme: 'A',
    title: 'Agriculture',
    subtitle: 'Green Roots Initiative',
    description: 'Sustainable farming and livelihoods through organic farming, soil health, and market access.',
    fullDescription: 'Supports organic farming, soil health, and market access for small farmers, promoting eco-friendly practices and sustainable land use.',
    impact: [
      'Increased farmer income',
      'Eco-friendly practices',
      'Sustainable land use',
      'Market access for small farmers'
    ],
    slug: 'agriculture-green-roots',
    image: '/images/distributing_eggs.png'
  },
  {
    id: 'livelihood',
    theme: 'L',
    title: 'Livelihood',
    subtitle: 'Empower to Earn',
    description: 'Skills training and economic independence through tailoring, baking, crafts, and digital skills.',
    fullDescription: 'Offers vocational training in tailoring, baking, crafts, and digital skills for women and youth, enhancing employability and financial self-reliance.',
    impact: [
      'Enhanced employability',
      'Financial self-reliance',
      'Women empowerment',
      'Sustainable income generation'
    ],
    slug: 'livelihood-empower',
    image: '/images/women_session.png'
  },
  {
    id: 'environment',
    theme: 'E',
    title: 'Environment',
    subtitle: 'Eco-Life Campaign',
    description: 'Climate resilience and restoration through tree plantations, waste management, and eco-awareness.',
    fullDescription: 'Conducts tree plantations, waste management, and eco-awareness programs to build greener communities and stronger local climate resilience.',
    impact: [
      'Greener communities',
      'Climate resilience',
      'Waste reduction',
      'Environmental awareness'
    ],
    slug: 'environment-eco-life',
    image: '/images/volunteers_showing_hands.png'
  },
  {
    id: 'rights',
    theme: 'R',
    title: 'Rights & Rural Development',
    subtitle: 'Dignity for All',
    description: 'Rights awareness and rural empowerment through legal literacy camps and women\'s self-help groups.',
    fullDescription: 'Runs legal literacy camps, forms women\'s self-help groups, and supports rural infrastructure projects to enhance civic participation and rural self-reliance.',
    impact: [
      'Greater civic participation',
      'Rural self-reliance',
      'Women empowerment',
      'Legal awareness'
    ],
    slug: 'rights-dignity',
    image: '/images/session_with_elderly.png'
  },
  {
    id: 'awareness',
    theme: 'A',
    title: 'Awareness & Empowerment',
    subtitle: 'Voice Within',
    description: 'Social awareness and gender empowerment through campaigns on equality, mental health, and inclusion.',
    fullDescription: 'Conducts campaigns on gender equality, mental health, and inclusion through storytelling and community engagement, empowering individuals and strengthening communities.',
    impact: [
      'Empowered individuals',
      'Stronger communities',
      'Gender equality',
      'Mental health awareness'
    ],
    slug: 'awareness-voice-within',
    image: '/images/small_children.png'
  },
  {
    id: 'integrated',
    theme: 'I',
    title: 'Integrated Development',
    subtitle: 'Village 360°',
    description: 'Holistic village transformation combining health, education, livelihood, and environment interventions.',
    fullDescription: 'Combines health, education, livelihood, and environment interventions in a model village to create sustainable and self-sufficient community ecosystems.',
    impact: [
      'Sustainable communities',
      'Self-sufficient ecosystems',
      'Holistic development',
      'Model village transformation'
    ],
    slug: 'integrated-village-360',
    image: '/images/ration_distribution.png'
  },
  {
    id: 'disaster',
    theme: 'D',
    title: 'Disaster Recovery',
    subtitle: 'Rebuild with Hope',
    description: 'Post-disaster relief and resilience through emergency supplies, trauma counseling, and livelihood restoration.',
    fullDescription: 'Offers emergency supplies, trauma counseling, and livelihood restoration after floods, earthquakes, or cyclones, accelerating recovery and strengthening community preparedness.',
    impact: [
      'Accelerated recovery',
      'Community preparedness',
      'Livelihood restoration',
      'Trauma support'
    ],
    slug: 'disaster-rebuild-hope',
    image: '/images/ration_distribution2.png'
  }
];
