import { ProjectItem, ServiceItem, TestimonialItem, FaqItem } from '../types';

export const BRACS_COMPANY_INFO = {
  businessName: 'Bendigo Refrigeration & Air Conditioning Services (BRACS)',
  shortName: 'BRACS',
  establishedYear: 1982,
  yearsInBusiness: 44, // 1982 to 2026
  phone: '(03) 5448 3999',
  internationalPhone: '+61 3 5448 3999',
  email: 'enquiries@bracs.com.au',
  showroomAddress: {
    street: '14b Rohs Road',
    suburb: 'East Bendigo',
    state: 'VIC',
    postcode: '3550',
    fullAddress: '14b Rohs Road, East Bendigo VIC 3550',
    historicalNote:
      'Provisional confirmed operational headquarters & customer showroom at 14b Rohs Road. Note: Historical web references mention 68 Beischer Street; Rohs Road is the active showroom and trade depot.',
  },
  openingHours: {
    weekdays: 'Monday to Friday: 9:00 am – 5:00 pm',
    weekends: 'Saturday and Sunday: Closed',
    emergencyCommercialNote:
      'Scheduled preventive maintenance and agreed priority commercial breakdown support available for commercial contract clients.',
  },
  accreditations: [
    'Mitsubishi Electric Diamond Dealer',
    'ARC Licensed Refrigerant Handlers (AU# Certified)',
    'VBA Registered Building Practitioners (Plumbing & Mechanical Services)',
    'Established Central Victoria Trades Since 1982',
  ],
  serviceAreas: [
    'Bendigo',
    'East Bendigo',
    'Golden Square',
    'Kangaroo Flat',
    'Strathdale',
    'Kennington',
    'Epsom',
    'Eaglehawk',
    'Castlemaine',
    'Echuca & Central Victoria Region',
  ],
};

export const RESIDENTIAL_SERVICES: ServiceItem[] = [
  {
    id: 'split-systems',
    title: 'High-Efficiency Split Systems',
    category: 'residential',
    headline: 'Whisper-quiet single and multi-room temperature precision.',
    description:
      'Engineered for Victoria’s freezing winter nights and sweltering summer afternoons. Premium wall-mounted and floor-standing reverse cycle inverter air conditioners with advanced air filtration, 3D i-See sensors and Wi-Fi scheduling.',
    features: [
      'Inverter technology for up to 60% lower operating draw compared to older units',
      'Dual heating and cooling modes in a single sleek indoor chassis',
      'Independent room-by-room zoning to heat or cool only active living areas',
      'Anti-allergen and nano-platinum air purification filters',
    ],
    idealFor: 'Bedrooms, home offices, open-plan living rooms, and granny flats.',
    recommendedBrands: ['Mitsubishi Electric', 'Daikin', 'Bonaire'],
  },
  {
    id: 'ducted-reverse-cycle',
    title: 'Ducted Reverse Cycle Climate Control',
    category: 'residential',
    headline: 'Whole-home concealed temperature comfort through discreet ceiling linear slots.',
    description:
      'The gold standard in year-round Australian home comfort. Our qualified technicians design bespoke ducting runs and intelligent multi-zone damper layouts so you can set custom temperatures across bedrooms and family zones simultaneously.',
    features: [
      'Discreet flush ceiling or floor diffusers that blend with high-end architecture',
      'Integrated smart touchscreen and tablet zoning (AirTouch / ZoneTouch compatibility)',
      'Substantial Victorian Energy Upgrades (VEU) discounts when replacing older gas heating',
      'Quiet outdoor condenser placement away from entertaining and bedroom windows',
    ],
    idealFor: 'New home builds, major architectural renovations, and complete gas system replacements.',
    recommendedBrands: ['Mitsubishi Electric', 'Daikin', 'Temperzone'],
  },
  {
    id: 'gas-conversions',
    title: 'Gas Heating to Electric Upgrades',
    category: 'residential',
    headline: 'Future-proof your home comfort with high-COP electric reverse cycle technology.',
    description:
      'With increasing Victorian gas network tariffs and government electrification initiatives, BRACS specialises in converting inefficient gas ducted heating to modern reverse cycle heat pumps. Enjoy both heating and cooling from one energy-efficient system.',
    features: [
      'Indicative VEU government discounts available for eligible installations',
      'Safe decommissioning and capping of obsolete gas heating units',
      'Utilise rooftop solar electricity to offset household heating during daylight hours',
      'Eliminate indoor carbon monoxide combustion risks completely',
    ],
    idealFor: 'Homeowners with aging gas ducted heaters (8+ years old) seeking whole-home cooling.',
    recommendedBrands: ['Mitsubishi Electric', 'Daikin'],
  },
  {
    id: 'evaporative-cooling',
    title: 'Evaporative Cooling & Add-On Systems',
    category: 'residential',
    headline: 'Fresh, natural air cooling built for dry Central Victorian summer conditions.',
    description:
      'Low running-cost whole-home cooling that continually circulates 100% fresh, filtered outside air with open doors and windows. We install, maintain and replace rooftop evaporative coolers and ductwork.',
    features: [
      'Extremely economical power consumption — gentle on seasonal electricity bills',
      'Keeps indoor air naturally humidified rather than dry',
      'Winter weather seal dampers to stop winter heat loss when heating is in use',
      'Complete seasonal startup, water dump, and winterisation servicing available',
    ],
    idealFor: 'Large family homes in dry regional climates and allergy-conscious households.',
    recommendedBrands: ['Breezair', 'Braemar', 'Bonaire'],
  },
];

export const COMMERCIAL_SERVICES: ServiceItem[] = [
  {
    id: 'commercial-refrigeration',
    title: 'Commercial Refrigeration & Coolrooms',
    category: 'commercial',
    headline: 'Heavy-duty refrigeration engineering for hospitality, supermarkets, and primary producers.',
    description:
      'From custom walk-in coolrooms and freezer complexes to beverage glycol chillers and supermarket display cases, BRACS designs and installs rock-solid commercial refrigeration systems built to hold precise temperatures in 45°C ambient heat.',
    features: [
      'Custom modular coolroom and freezer room panel design and construction',
      'Remote condenser installations to lower kitchen/retail ambient heat loads',
      'Digital microcomputer temperature monitors and cloud telemetry alarms',
      'Energy-efficient scroll and semi-hermetic compressors',
    ],
    idealFor: 'Restaurants, pubs, butchers, Central Victorian wineries, supermarkets, and food logistics.',
    recommendedBrands: ['Bitzer', 'Copeland', 'Kirby', 'Carel Controls'],
  },
  {
    id: 'mechanical-hvac',
    title: 'Commercial Mechanical HVAC & Ventilation',
    category: 'commercial',
    headline: 'Engineered climate control for offices, educational campuses, and medical clinics.',
    description:
      'We partner with builders, architects, facility managers, and mechanical consultants to deliver robust package units, VRF/VRV variable refrigerant flow systems, and compliant commercial kitchen ventilation/exhaust systems.',
    features: [
      'Multi-zone VRF systems with simultaneous heating and cooling heat recovery',
      'AS 1668 compliant kitchen hood exhaust and fresh air makeup systems',
      'Building management system (BMS) integration and energy tracking',
      'Engineered acoustic baffling for noise-sensitive boardrooms and consulting suites',
    ],
    idealFor: 'Office developments, schools, TAFE campuses, healthcare centres, and public facilities.',
    recommendedBrands: ['Mitsubishi Electric City Multi', 'Daikin VRV', 'Temperzone'],
  },
  {
    id: 'preventative-maintenance',
    title: 'Scheduled Maintenance Agreements',
    category: 'maintenance',
    headline: 'Minimise costly commercial downtime and protect your capital equipment investment.',
    description:
      'Avoid unexpected system failures on peak revenue days. BRACS provides structured commercial servicing contracts tailored to your operational hours, ensuring food safety compliance and equipment longevity.',
    features: [
      'Quarterly and bi-annual compliance audit logs for food health inspectors',
      'Refrigerant leak detection, electrical contactor checks, and coil sanitisation',
      'Priority emergency callout response for contracted commercial clients',
      'Detailed asset condition reports and planned capital replacement forecasting',
    ],
    idealFor: 'Commercial facilities, aged care centres, retail food operators, and commercial landlords.',
    recommendedBrands: ['All major commercial brands'],
  },
];

export const GENUINE_PROJECTS: ProjectItem[] = [
  {
    id: 'continuity-centre',
    title: 'Continuity Centre Bendigo',
    client: 'Continuity Centre Commercial Development',
    category: 'Commercial HVAC',
    location: 'Bendigo, VIC',
    year: 'Commercial Mechanical Project',
    summary:
      'Complete mechanical heating, ventilation, and air conditioning design and installation for Bendigo’s state-of-the-art corporate and technology continuity facility.',
    specifications: [
      'Multi-zone high-efficiency variable capacity climate control infrastructure',
      'Dedicated computer room air conditioning (CRAC) with N+1 backup redundancy',
      'Integrated economiser cycle fresh air systems to maximise seasonal energy efficiency',
      'Acoustic-engineered ductwork to meet strict corporate noise criteria',
    ],
    keyOutcome:
      'Delivered on-time commissioning with continuous 24/7 temperature and humidity stability for critical operations.',
  },
  {
    id: 'echuca-tafe',
    title: 'Echuca TAFE Campus Mechanical Upgrade',
    client: 'Goulburn Ovens Institute of TAFE',
    category: 'Educational',
    location: 'Echuca, VIC',
    year: 'Institutional Campus Project',
    summary:
      'Comprehensive HVAC installation across lecture halls, practical trade workshops, and administrative offices at the Echuca regional campus.',
    specifications: [
      'Heavy-duty commercial packaged reverse cycle systems and VRF zoning',
      'Specialised high-volume workshop ventilation and dust/fume management',
      'Centralised digital scheduling system integrated with campus timetable controllers',
      'Energy monitoring sub-meters for Victorian Government emissions reporting',
    ],
    keyOutcome:
      'Substantially reduced campus energy consumption while creating balanced, quiet acoustic environments for students and lecturers.',
  },
  {
    id: 'central-vic-winery',
    title: 'Central Victoria Cool Storage & Barrel Cellar',
    client: 'Regional Estate Vineyard & Cellar Door',
    category: 'Commercial Refrigeration',
    location: 'Central Victoria',
    year: 'Viticulture Facility',
    summary:
      'Precision temperature and humidity-controlled commercial cool storage plant designed for wine barrel maturation and packaged storage.',
    specifications: [
      'Dual-temperature zones maintaining 14°C to 16°C barrel cellars and 4°C bottling holding',
      'Automated relative humidity regulation preventing barrel ullage and dry evaporation',
      'Remote digital telemetry and SMS fault alerting system for cellar masters',
      'Low-velocity air discharge evaporators preventing air turbulence over wine barrels',
    ],
    keyOutcome:
      'Consistent vintage preservation through extreme 40°C+ summer heatwaves with continuous electronic temperature verification.',
  },
  {
    id: 'strathdale-architectural-home',
    title: 'Architectural Residence Ducted Climate System',
    client: 'Private Residence',
    category: 'Residential Ducted',
    location: 'Strathdale, Bendigo',
    year: 'Residential Excellence',
    summary:
      'Concealed ducted reverse cycle inverter installation designed into an expansive mid-century modern inspired new build with high raked ceilings.',
    specifications: [
      'Mitsubishi Electric high-static inverter ducted indoor unit hidden in custom bulkheads',
      'Sleek linear architectural grilles aligned with ceiling timber cladding',
      'AirTouch 5 smart touchscreen zoning with temperature sensors in 6 separate living zones',
      'Acoustic lagging on supply spigots for virtually silent operation in bedrooms',
    ],
    keyOutcome:
      'Total home comfort in all four seasons without compromising clean, minimalist architectural sightlines.',
  },
];

export const GENUINE_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'david-karen',
    author: 'David & Karen',
    location: 'Strathdale, Bendigo',
    service: 'Ducted Reverse Cycle Installation',
    quote:
      'The BRACS team did an exceptional job installing our reverse cycle ducted system. Prompt, neat pipework and they took the time to explain the zone controller thoroughly before leaving. Our home has never been more comfortable.',
    isVerifiedCustomer: true,
  },
  {
    id: 'ann',
    author: 'Ann',
    location: 'East Bendigo',
    service: 'Residential Split System Replacement',
    quote:
      'Had BRACS service our older system and advise us on an energy-efficient upgrade. Friendly local technicians who genuinely know their trade. No pressure sales, just practical, honest advice.',
    isVerifiedCustomer: true,
  },
  {
    id: 'hazel',
    author: 'Hazel',
    location: 'Bendigo Region',
    service: 'Heating Service & Urgent Repairs',
    quote:
      'Prompt, professional and reliable service when our heating failed mid-winter. They diagnosed the issue quickly and had replacement parts on hand. Highly recommended to anyone in Bendigo.',
    isVerifiedCustomer: true,
  },
];

export const VEU_REGULATORY_CONFIG = {
  lastUpdated: 'October 2026',
  regulatoryBody: 'Victorian Energy Upgrades (VEU) - Essential Services Commission Victoria',
  programmeNote:
    'Under the Victorian Energy Upgrades program, eligible Victorian households and businesses can receive discounts on energy-efficient reverse cycle air conditioners when upgrading from inefficient gas heating or electric resistance heaters.',
  disclaimer:
    'Discounts are indicative estimates based on typical Victorian Energy Efficiency Certificates (VEECs) market value and equipment specifications. Actual discount amounts vary by property layout, existing gas decommissioning, accredited provider assessment, and final technical site inspection. A confirmed quotation is required.',
  baseDiscountTable: {
    gasDuctedToReverseCycleDucted: {
      min: 1600,
      max: 3200,
      typicalAverage: 2400,
      description: 'Replacing whole-home gas ducted heating with a multi-zone reverse cycle ducted heat pump',
    },
    gasSpaceHeaterToSplit: {
      min: 700,
      max: 1400,
      typicalAverage: 1050,
      description: 'Replacing gas space heater / wall furnace with high-efficiency split system',
    },
    electricResistanceToSplit: {
      min: 600,
      max: 1200,
      typicalAverage: 900,
      description: 'Replacing electric bar / panel heater with inverter split system',
    },
    multiSplitUpgrade: {
      min: 1200,
      max: 2200,
      typicalAverage: 1700,
      description: 'Multi-room reverse cycle split installation replacing gas space heaters',
    },
  },
};

export const FREQUENTLY_ASKED_QUESTIONS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'residential',
    question: 'Which heating and cooling system is best for a Bendigo home?',
    answer:
      'Because Bendigo experiences cold winter mornings down below 0°C and scorching summer heatwaves exceeding 40°C, reverse cycle inverter systems (both ducted and split systems) are typically the most practical and economical year-round choice. They provide high-efficiency heating in winter and refrigerated cooling in summer from a single unit. During a site visit or showroom consultation, we evaluate your ceiling insulation, room orientations, ceiling heights, and lifestyle habits to recommend the ideal capacity.',
  },
  {
    id: 'faq-2',
    category: 'rebates',
    question: 'How do the Victorian Energy Upgrades (VEU) heating discounts work?',
    answer:
      'The Victorian Energy Upgrades program allows accredited providers to generate certificates (VEECs) when an inefficient heating system (such as an old ducted gas heater or gas wall furnace) is replaced with an eligible, high-efficiency reverse cycle air conditioner. The value of these certificates is applied as an upfront discount on your installation quotation. BRACS guides you through the eligibility criteria, required documentation, and equipment selection.',
  },
  {
    id: 'faq-3',
    category: 'maintenance',
    question: 'How often should residential heating and cooling systems be serviced?',
    answer:
      'We recommend having your heating and cooling equipment professionally serviced every 12 to 24 months. For reverse cycle systems, this includes checking refrigerant pressures, inspecting electrical connections, deep cleaning indoor coils and blower wheels, testing condensate drains, and ensuring thermostats are calibrated. Evaporative coolers should be checked and winterised annually to prevent cold drafts in winter and water scale buildup.',
  },
  {
    id: 'faq-4',
    category: 'residential',
    question: 'What does Mitsubishi Electric Diamond Dealer status mean for customers?',
    answer:
      'As an accredited Mitsubishi Electric Diamond Dealer, BRACS has demonstrated technical excellence, extensive product training, and a proven track record across Central Victoria. It gives our customers direct access to the latest premium Mitsubishi Electric product lineup, tailored factory-backed technical support, and the peace of mind of having qualified technicians install your system to manufacturer specifications.',
  },
  {
    id: 'faq-5',
    category: 'commercial',
    question: 'Do you provide commercial refrigeration and HVAC maintenance contracts?',
    answer:
      'Yes. BRACS manages planned preventative maintenance agreements for supermarkets, restaurants, hotels, wineries, educational institutions, and healthcare clinics across Bendigo and Central Victoria. Routine servicing protects perishable stock, ensures health authority compliance, prevents costly emergency downtime, and extends the operational lifespan of commercial equipment.',
  },
  {
    id: 'faq-6',
    category: 'residential',
    question: 'Where is your showroom located, and can I see units before buying?',
    answer:
      'Our customer showroom is located at 14b Rohs Road, East Bendigo VIC 3550. We are open Monday to Friday from 9:00 am to 5:00 pm. Visiting the showroom allows you to see working indoor split units, examine wall controllers, review zone management touchscreens, and discuss house plans with our experienced trade staff.',
  },
  {
    id: 'faq-7',
    category: 'residential',
    question: 'How do I request a quote, and how quickly will I receive it?',
    answer:
      'You can request a quote online using our fast 4-step enquiry form, give our East Bendigo team a call on (03) 5448 3999, or bring your house plans into our showroom. For residential installations, we typically arrange a prompt on-site measure and quote, or provide a preliminary estimate based on your floorplans within 1 to 2 business days.',
  },
];
