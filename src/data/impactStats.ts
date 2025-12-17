export interface ImpactStat {
  id: string;
  value: number;
  label: string;
  suffix?: string;
  description?: string;
}

export const impactStats: ImpactStat[] = [
  {
    id: 'children-supported',
    value: 225,
    label: 'Children Supported',
    suffix: '+',
    description: 'Year-round support with nutrition, education, and care'
  },
  {
    id: 'districts-covered',
    value: 5,
    label: 'Districts Covered',
    description: 'Across West Bengal: Darjeeling, Kolkata, Howrah, North & South 24 Parganas'
  },
  {
    id: 'beneficiaries-trained',
    value: 85,
    label: 'Skills Training',
    description: 'Beneficiaries trained in baking and livelihood skills'
  },
  {
    id: 'festival-children',
    value: 630,
    label: 'Festival Celebrations',
    suffix: '+',
    description: 'Children brought joy during Durga Puja'
  },
  {
    id: 'women-supported',
    value: 100,
    label: 'Women Empowered',
    suffix: '+',
    description: 'Through livelihood and dignity programs'
  },
];
