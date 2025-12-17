export interface Story {
  id: string;
  title: string;
  beneficiary: {
    name: string;
    age: number;
    location: string;
  };
  project: string;
  excerpt: string;
  content: string;
  impact: string[];
  date: string;
  featured: boolean;
  image?: string;
}

export const stories: Story[] = [
  {
    id: 'anjali-mandal',
    title: "From Bound to Boundless: Anjali's Journey",
    beneficiary: {
      name: 'Anjali Mandal',
      age: 15,
      location: 'Rural Bengal'
    },
    project: 'Nourishing Hope',
    excerpt: 'Once confined and isolated, Anjali now moves proudly through her village — her laughter and confidence inspiring everyone around her.',
    content: `Anjali Mandal, a 15-year-old girl from Rural Bengal, faced severe mobility challenges that kept her confined and isolated from her community. Through Healer Aid's Nourishing Hope program, Anjali's life transformed completely.

The program provided her with her first wheelchair, enabling independent movement within her home and community. Along with mobility support, Anjali receives monthly nutrition kits containing essential food items that support her growth and well-being.

Regular visits from Healer Aid volunteers have helped Anjali feel included, cared for, and emotionally supported. What was once a life of confinement has blossomed into one of dignity, independence, and limitless hope.

Today, Anjali moves proudly through her village, her laughter and confidence inspiring everyone she meets. Her transformation shows how one act of kindness can completely change a child's future.`,
    impact: [
      'Freedom of movement with first wheelchair',
      'Monthly nutrition kit for growth and well-being',
      'Emotional and social inclusion through regular visits',
      'Restored dignity and independence'
    ],
    date: '2024-08-15',
    featured: true,
    image: '/images/impact_story.webp'
  }
];
