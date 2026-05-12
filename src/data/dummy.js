export const dummyProperties = [
  {
    id: 'prop-1',
    title: 'Luxury Villa in Jayalakshmipuram',
    type: 'Villa',
    status: 'For Sale',
    price: '₹3.5 Cr',
    locality: 'Jayalakshmipuram',
    city: 'Mysore',
    bhk: 4,
    area: '4000 sqft',
    baths: 4,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687931-ce8e0026362a?auto=format&fit=crop&w=800&q=80'
    ],
    featured: true,
    amenities: ['Swimming Pool', 'Garden', 'Security', 'Parking']
  },
  {
    id: 'prop-2',
    title: 'Premium Apartment in Gokulam',
    type: 'Apartment',
    status: 'For Rent',
    price: '₹35,000/mo',
    locality: 'Gokulam',
    city: 'Mysore',
    bhk: 3,
    area: '1800 sqft',
    baths: 3,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
    ],
    featured: true,
    amenities: ['Gym', 'Clubhouse', 'Power Backup', 'Security']
  },
  {
    id: 'prop-3',
    title: 'Commercial Space in Kuvempunagar',
    type: 'Commercial',
    status: 'For Sale',
    price: '₹1.2 Cr',
    locality: 'Kuvempunagar',
    city: 'Mysore',
    bhk: 0,
    area: '1200 sqft',
    baths: 1,
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
    ],
    featured: false,
    amenities: ['Parking', 'Security', 'Main Road Facing']
  },
  {
    id: 'prop-4',
    title: 'Modern Duplex in Vijayanagar',
    type: 'Villa',
    status: 'For Sale',
    price: '₹2.1 Cr',
    locality: 'Vijayanagar',
    city: 'Mysore',
    bhk: 4,
    area: '2500 sqft',
    baths: 4,
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    ],
    featured: true,
    amenities: ['Private Garden', 'Terrace', 'Modular Kitchen']
  },
  {
    id: 'prop-5',
    title: 'Cozy 2BHK in V V Mohalla',
    type: 'Apartment',
    status: 'For Rent',
    price: '₹20,000/mo',
    locality: 'V V Mohalla',
    city: 'Mysore',
    bhk: 2,
    area: '1100 sqft',
    baths: 2,
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80'
    ],
    featured: false,
    amenities: ['Lift', 'Security', 'Parking']
  },
  {
    id: 'prop-6',
    title: 'Premium Plot in Bogadi',
    type: 'Site',
    status: 'For Sale',
    price: '₹85 Lacs',
    locality: 'Bogadi',
    city: 'Mysore',
    bhk: 0,
    area: '2400 sqft',
    baths: 0,
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80'
    ],
    featured: false,
    amenities: ['Gated Community', 'Park', 'Water Connection']
  }
];

export const trendingLocations = [
  { name: 'Jayalakshmipuram', propertiesCount: 45, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80' },
  { name: 'Gokulam', propertiesCount: 32, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80' },
  { name: 'Vijayanagar', propertiesCount: 56, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80' },
  { name: 'V V Mohalla', propertiesCount: 28, image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80' },
];

export const topBuilders = [
  { name: 'Brigade', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=200&q=80' },
  { name: 'Prestige', image: 'https://images.unsplash.com/photo-1541881451965-0a581452df13?auto=format&fit=crop&w=200&q=80' },
  { name: 'Sankalp', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=200&q=80' },
  { name: 'Pathak', image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=200&q=80' },
  { name: 'Zuari', image: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=200&q=80' },
  { name: 'Essen', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=200&q=80' },
];

export const bhkFilters = [
  { label: '1 BHK', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80' },
  { label: '2 BHK', image: 'https://images.unsplash.com/photo-1502672260266-1c1de2d9d344?auto=format&fit=crop&w=400&q=80' },
  { label: '3 BHK', image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80' },
  { label: '4 BHK', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80' },
  { label: '4+ BHK', image: 'https://images.unsplash.com/photo-1600607687931-ce8e0026362a?auto=format&fit=crop&w=400&q=80' },
];

export const propertyTypes = [
  { label: 'Residential Apartments', type: 'Apartment' },
  { label: 'Row Houses', type: 'Row House' },
  { label: 'Villa', type: 'Villa' },
  { label: 'Villa Plots', type: 'Site' },
];

export const budgetFilters = [
  { label: 'Affordable projects', desc: 'Less than ₹ 80 Lakh', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80' },
  { label: 'Mid-Segment projects', desc: '₹ 80 Lakh to ₹ 4 Crore', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80' },
  { label: 'Luxury projects', desc: 'More than ₹ 4 Crore', img: 'https://images.unsplash.com/photo-1613490908574-3236e78846c4?auto=format&fit=crop&w=400&q=80' },
];

export const servicesData = [
  {
    title: 'Home Loans',
    desc: 'Get the lowest interest rates with instant approval from leading banks',
    icon: 'wallet',
    color: 'blue',
    stats: '500+ Loans',
    features: ['Lowest Interest Rates', 'Instant Pre-Approval', 'Minimal Documentation'],
    cta: 'Apply Now',
  },
  {
    title: 'Interior Design',
    desc: 'Transform your space with award-winning designers and premium materials',
    icon: 'paint-brush',
    color: 'purple',
    stats: '200+ Projects',
    features: ['3D Visualization', 'Budget-Friendly Plans', 'Turnkey Delivery'],
    cta: 'Get Free Quote',
  },
  {
    title: 'Legal Services',
    desc: 'Hassle-free property registration with thorough legal verification',
    icon: 'scale',
    color: 'green',
    stats: '1000+ Cases',
    features: ['RERA Verification', 'Title Clearance', 'Document Assistance'],
    cta: 'Consult Now',
  },
  {
    title: 'Packers & Movers',
    desc: 'Safe, insured, and affordable relocation services across Mysuru',
    icon: 'truck',
    color: 'amber',
    stats: '300+ Moves',
    features: ['Fully Insured Shifting', 'Same-Day Service', 'Free Packing'],
    cta: 'Book Now',
  },
];
