export interface DonationTier {
  id: string;
  amount: number;
  title: string;
  description: string;
  impact: string;
  popular?: boolean;
}

export const donationTiers: DonationTier[] = [
  {
    id: 'tier-1',
    amount: 800,
    title: 'Nutritional Support',
    description: 'Provide nutritional support to a malnourished child',
    impact: '1 child for 1 month',
  },
  {
    id: 'tier-2',
    amount: 1800,
    title: 'Educational Materials',
    description: 'Buy educational materials for rural students',
    impact: '3 children for 1 term',
  },
  {
    id: 'tier-3',
    amount: 3600,
    title: 'Health Kits',
    description: 'Essential medicines and health kits for underprivileged families',
    impact: '5 families supported',
  },
  {
    id: 'tier-4',
    amount: 5000,
    title: 'Family Wellbeing',
    description: 'One family\'s wellbeing for a month (food, healthcare, skills)',
    impact: '1 family for 1 month',
    popular: true,
  },
  {
    id: 'tier-5',
    amount: 10000,
    title: 'Homeless Support',
    description: 'Comprehensive support for homeless individuals',
    impact: '10+ individuals helped',
  },
  {
    id: 'tier-6',
    amount: 35000,
    title: 'Annual Child Support',
    description: 'Support a child\'s journey from survival to self-reliance for a year',
    impact: '1 child for 1 year',
  }
];
