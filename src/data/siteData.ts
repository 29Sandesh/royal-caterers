export const assetUrl = (path: string): string => {

  if (!path || path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {

    return path;

  }

  const base = import.meta.env.BASE_URL.replace(/\/$/, '');

  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  return `${base}${cleanPath}`;

};



export interface NavLinkItem {

  label: string;

  footerLabel: string;

  path: string;

  dataPath: string;

}



export const NAV_LINKS: NavLinkItem[] = [

  { label: 'Home', footerLabel: 'Home', path: '/', dataPath: 'home' },

  { label: 'About', footerLabel: 'About', path: '/about-us', dataPath: 'about-us' },

  { label: 'Services', footerLabel: 'Services', path: '/catering-services', dataPath: 'catering-services' },

  { label: 'Menu', footerLabel: 'Menu', path: '/menu', dataPath: 'menu' },

  { label: 'Gallery', footerLabel: 'Gallery', path: '/gallery', dataPath: 'gallery' },

  { label: 'Contact', footerLabel: 'Contact', path: '/contact-booking', dataPath: 'contact-booking' },

];



export const BRAND_ASSETS = {
  mainRoundLogo: '/brand/RCI_round_transparent.png',
  roundLogoTransparent: '/brand/RCI_round_transparent.png',
  roundLogoTransparentWebp: '/brand/rci_round_transparent.webp',

  mainLogo: '/brand/RCI MAIN LOGO.svg',

  mainLogoWhite: '/brand/RCI MAIN LOGO white.svg',

  mainLogoToned: '/brand/RCI MAIN LOGO toned.svg',

  mainLogoBlack: '/brand/RCI MAIN LOGO Black.svg',

  mainLogoTight: '/brand/rci_main_logo_tight.svg',

  mainLogoWhiteTight: '/brand/rci_main_logo_white_tight.svg',

  mainLogoTonedTight: '/brand/rci_main_logo_toned_tight.svg',

  logomark: '/brand/RCI LOGOMARK.svg',

  logomarkWhite: '/brand/RCI LOGOMARK White.svg',

  logomarkToned: '/brand/RCI LOGOMARK toned.svg',

  logomarkTight: '/brand/rci_logomark_tight.svg',

  logomarkWhiteTight: '/brand/rci_logomark_white_tight.svg',

  logomarkTonedTight: '/brand/rci_logomark_toned_tight.svg',

  typemark: '/brand/RCI TYPEMARK.svg',

  typemarkTight: '/brand/rci_typemark_tight.svg',

  typemarkWhiteTight: '/brand/rci_typemark_white_tight.svg',

  logoHorizontal: '/brand/rci_logo_horizontal.svg',

  logoHorizontalWhite: '/brand/rci_logo_horizontal_white.svg',

  logoHorizontalToned: '/brand/rci_logo_horizontal_toned.svg',

  sealConcept1Gold: '/brand/seal_concept_1_gold.svg',

  sealConcept1Purple: '/brand/seal_concept_1_purple.svg',

  sealConcept2Gold: '/brand/seal_concept_2_gold.svg',

  sealConcept2Purple: '/brand/seal_concept_2_purple.svg',

  sealConcept3Gold: '/brand/seal_concept_3_gold.svg',

  sealConcept3Purple: '/brand/seal_concept_3_purple.svg',

  sealHiresPng: '/brand/concept_3_seal_hires.png',

  emblemClochePurple: '/brand/rci_emblem_cloche_purple.png',

  emblemClocheGold: '/brand/rci_emblem_cloche_gold.png',

  emblemCrownPurple: '/brand/rci_emblem_crown_purple.png',

  emblemCrownGold: '/brand/rci_emblem_crown_gold.png',

  emblemHandiPurple: '/brand/rci_emblem_handi_purple.png',

  emblemHandiGold: '/brand/rci_emblem_handi_gold.png',

  rangoliPattern: '/brand/RCI Rangoli @1.5x.webp',

  rangoliSvg: '/brand/RCI Artboard 2.svg',
  patternTileGold: '/brand/rci_pattern_tile_gold.svg',
  patternTilePurple: '/brand/rci_pattern_tile_purple.svg',
  patternTileWhite: '/brand/rci_pattern_tile_white.svg',
  patternTileToned: '/brand/rci_pattern_tile_toned.svg',
  rangoliGold: '/brand/rci_rangoli_gold.webp',
  rangoliPurple: '/brand/rci_rangoli_purple.webp',
  rangoliWhite: '/brand/rci_rangoli_white.webp',
  rangoliToned: '/brand/rci_rangoli_toned.webp',
  menuCardPage1: '/brand/rci_menu_card_page_1.webp',
  menuCardPage2: '/brand/rci_menu_card_page_2.webp',
  menuCardPage3: '/brand/rci_menu_card_page_3.webp',
  brandGuidelineColors: '/brand/rci_brand_guideline_page_1.webp',
  brandGuidelineTypeface: '/brand/rci_brand_guideline_page_2.webp',
  brandGuidelineMandala: '/brand/rci_brand_guideline_page_3.webp',
  brandGuidelinePattern: '/brand/rci_brand_guideline_page_4.webp',
  brandGuidelinePage1: '/brand/rci_brand_guideline_page_1.webp',
  brandGuidelinePage2: '/brand/rci_brand_guideline_page_2.webp',
  brandGuidelinePage3: '/brand/rci_brand_guideline_page_3.webp',
  brandGuidelinePage4: '/brand/rci_brand_guideline_page_4.webp',
  menuPdf: '/brand/rci_official_menu.pdf',
  brandGuidelinesPdf: '/brand/rci_brand_guidelines.pdf',

} as const;



export const BUSINESS_INFO = {

  name: 'Royal Caterers India',

  shortName: 'Royal Caterers',

  acronym: 'RCI',

  foundedYear: '1960',

  tagline: 'Where Tradition Meets Taste · Serving Celebrations Since 1960',

  emblemTagline: 'we serve taste of life',

  shortLocality: 'Pardesipura, Indore',

  city: 'Indore',

  state: 'Madhya Pradesh',

  fullAddress: 'Pardesipura, Indore, Madhya Pradesh 452003',

  phoneDisplay: '+91 98272 86535',

  phoneHref: 'tel:+919827286535',

  whatsappHref: 'https://wa.me/919827286535',

  domain: 'www.royalcaterersindia.com',

  tastingHours: 'By Prior Appointment · 10:00 AM – 8:00 PM',

  mapsHref: 'https://share.google/009LuUlAvzVJOk1bK',

  socials: {

    instagram: 'https://www.instagram.com/royal_caterers_india/',

    facebook: 'https://www.facebook.com/RoyalCaterersIndia/mentions/',

    whatsapp: 'https://wa.me/919827286535',

    wedMeGood: 'https://www.wedmegood.com/profile/Royal-Caterers-Indore-1257311',

    weddingWire: 'https://www.weddingwire.in/caterers/royal-caterers-indore--e308405',

    justDial: 'https://www.justdial.com/Indore/Royal-Caterers-Pardesipura/0731PX731-X731-220211220530-F7M9_BZDET',

    youtube: 'https://www.youtube.com/channel/UC86nEO81myJCwX9W--UsG5g',

    linkedIn: 'https://in.linkedin.com/company/royal-caterers-indore',

  },

} as const;



export interface ServiceOffering {

  id: string;

  anchor: string;

  number: string;

  title: string;

  categoryTag: string;

  shortSentence: string;

  eventTypeParam: string;

  image: string;

  alt: string;

}



export const SERVICE_OFFERINGS: ServiceOffering[] = [

  {

    id: 'wedding',

    anchor: 'service-wedding',

    number: '01',

    title: 'Wedding Catering',

    categoryTag: 'Bridal Receptions & Multi-Day Ceremonies',

    shortSentence:

      'Bespoke multi-course banquets, traditional welcome counters, and gracious hospitality tailored for wedding celebrations.',

    eventTypeParam: 'Wedding',

    image: '/media/photos/ornate_food_stall_night_lighting.jpg',

    alt: 'Grand royal wedding catering pavilion with golden chandeliers and carved food counters.',

  },

  {

    id: 'corporate',

    anchor: 'service-corporate',

    number: '02',

    title: 'Corporate Catering',

    categoryTag: 'Conferences, Galas & Executive Dining',

    shortSentence:

      'Punctual, refined dining formats designed for leadership summits, corporate milestones, and formal luncheons.',

    eventTypeParam: 'Corporate Event',

    image: '/media/photos/corporate_gala_table_setting.jpg',

    alt: 'Formal executive banquet table setting with fine tableware and royal blue runners.',

  },

  {

    id: 'private',

    anchor: 'service-private',

    number: '03',

    title: 'Birthday & Private Parties',

    categoryTag: 'Intimate Soirées & Milestone Celebrations',

    shortSentence:

      'Warm, thoughtfully styled menus and attentive service for family milestones, anniversaries, and private residence gatherings.',

    eventTypeParam: 'Birthday',

    image: '/media/photos/wedding_dining_reception_lawn.jpg',

    alt: 'Sprawling outdoor evening celebration lawn with round banquet dining tables and floral canopies.',

  },

  {

    id: 'social',

    anchor: 'service-social',

    number: '04',

    title: 'Social & Special Events',

    categoryTag: 'Festivals, Community Feasts & Ceremonies',

    shortSentence:

      'Authentic regional and pure vegetarian culinary preparations crafted for cultural gatherings and festive occasions.',

    eventTypeParam: 'Social/Special Event',

    image: '/media/ai-enhanced/royal_silver_pangat_thali_deluxe.jpg',

    alt: 'Traditional Royal Indori Silver Pangat Feast with authentic Dal Bafla, churma, and liquid desi ghee.',

  },

  {

    id: 'buffet',

    anchor: 'service-buffet',

    number: '05',

    title: 'Buffet & Live Counters',

    categoryTag: 'Interactive Culinary Stations',

    shortSentence:

      'Artisanal chaat pavilions, live clay tandoors, and dessert stations freshly prepared before your guests.',

    eventTypeParam: 'Buffet/Live Counter',

    image: '/media/photos/royal_wedding_live_buffet_stall.jpg',

    alt: 'Ornate handcrafted white and gold royal catering carriage stall stationed on an outdoor reception lawn.',

  },

  {

    id: 'custom',

    anchor: 'service-custom',

    number: '06',

    title: 'Customised Catering Packages',

    categoryTag: 'Tailored Menus & Dietary Precision',

    shortSentence:

      'Fully personalised menus—including strict Jain, Sattvic, and regional Malwi repertoires—curated around your event.',

    eventTypeParam: 'Other',

    image: '/media/ai-enhanced/royal_entrance_canopy_luxury.jpg',

    alt: 'Majestic royal palace catering entrance with heirloom brass urlis, marigold garlands, and glowing oil lamps.',

  },

];



export interface MenuCategoryData {

  key: string;

  number: string;

  title: string;

  shortLabel: string;

  subtitle: string;

  image: string;

  alt: string;

  items: {

    name: string;

    tag?: string;

  }[];

}



export const MENU_CATEGORIES: MenuCategoryData[] = [

  {

    key: 'cat-drinks',

    number: '01',

    title: 'Welcome Drinks & Beverages',

    shortLabel: 'Welcome Drinks',

    subtitle: 'Chilled traditional infusions, botanical coolers, and warm artisanal brews.',

    image: '/media/photos/grand_entrance_catering_decor.jpg',

    alt: 'Grand welcome drink and mocktail lounge with crystal glassware and fresh garnishes.',

    items: [

      { name: 'Kesar Badam Thandai', tag: 'Signature' },

      { name: 'Roasted Cumin Aam Panna' },

      { name: 'Fresh Kokum & Mint Cooler' },

      { name: 'Rose & Cardamom Lassi' },

      { name: 'Indori Spiced Jaljeera' },

      { name: 'Blue Lagoon & Virgin Mojito Bar' },

      { name: 'Kullad Masala Chai', tag: 'Winter' },

      { name: 'Hand-Beaten Filter Coffee' },

    ],

  },

  {

    key: 'cat-starters',

    number: '02',

    title: 'Starters & Appetisers',

    shortLabel: 'Starters',

    subtitle: 'Char-grilled clay oven tikkas, delicate kebabs, and crisp cocktail hors d’oeuvres.',

    image: '/media/photos/chaat_and_appetizer_service_bar.jpg',

    alt: 'Sarafa-inspired live chaat and hot appetizer service bar.',

    items: [

      { name: 'Malai Paneer Tikka', tag: 'Tandoor' },

      { name: 'Awadhi Dahi Ke Kebab', tag: 'Signature' },

      { name: 'Hara Bhara Spinach Kebab' },

      { name: 'Crispy Corn & Water Chestnut' },

      { name: 'Bharwan Tandoori Mushroom' },

      { name: 'Veg Seekh Gilafi' },

      { name: 'Honey Chilli Lotus Stem' },

      { name: 'Mini Cocktail Samosa & Kachori' },

    ],

  },

  {

    key: 'cat-mains',

    number: '03',

    title: 'Indian Main Course',

    shortLabel: 'Main Course',

    subtitle: 'Slow-simmered gravies, seasonal gourmet vegetables, and heritage lentil preparations.',

    image: '/media/photos/regal_curry_station_warmers.jpg',

    alt: 'Regal Shahi Paneer, rich Dal Bukhara, and slow-simmered vegetable curries in brass handis.',

    items: [

      { name: 'Paneer Lababdar', tag: 'Chef’s Special' },

      { name: 'Shahi Malai Kofta' },

      { name: 'Dal Bukhara (Slow-Simmered)' },

      { name: 'Rajasthani Panchmel Dal' },

      { name: 'Indori Sev Tamatar', tag: 'Malwi' },

      { name: 'Methi Matar Malai' },

      { name: 'Subz Diwani Handi' },

      { name: 'Pindi Chana Masala' },

    ],

  },

  {

    key: 'cat-rice',

    number: '04',

    title: 'Rice & Biryani',

    shortLabel: 'Rice & Biryani',

    subtitle: 'Aged long-grain basmati preparations infused with saffron, whole spices, and herbs.',

    image: '/media/ai-enhanced/shahi_dum_biryani_handi_steam.jpg',

    alt: 'Steaming Shahi Vegetable Dum Biryani unsealed from an authentic copper-brass handi.',

    items: [

      { name: 'Subz Dum Pukht Biryani', tag: 'Sealed Handi' },

      { name: 'Kashmiri Kesar Pulao' },

      { name: 'Green Peas & Cumin Pulao' },

      { name: 'Rajasthani Gatte Ka Pulao' },

      { name: 'Steamed Aged Basmati Rice' },

      { name: 'Burhani & Pineapple Raita' },

    ],

  },

  {

    key: 'cat-breads',

    number: '05',

    title: 'Indian Breads',

    shortLabel: 'Indian Breads',

    subtitle: 'Freshly baked clay-oven naans, flaky parathas, and traditional regional breads.',

    image: '/media/photos/live_tandoor_hot_breads_counter.jpg',

    alt: 'Freshly baked tandoori naans, kulchas, and parathas coming from live clay ovens.',

    items: [

      { name: 'Butter & Garlic Tandoori Naan' },

      { name: 'Pudina Lachha Paratha' },

      { name: 'Stuffed Amritsari Kulcha', tag: 'Popular' },

      { name: 'Khasta Missi Roti' },

      { name: 'Roomali Roti' },

      { name: 'Warm Phulka with Desi Ghee' },

    ],

  },

  {

    key: 'cat-live',

    number: '06',

    title: 'Live Food Counters',

    shortLabel: 'Live Counters',

    subtitle: 'Interactive culinary stations bringing theatre and freshly plated warmth to your venue.',

    image: '/media/photos/live_counter_service_wagon.jpg',

    alt: 'Ornate illuminated live counter wagon serving authentic Indori delicacies.',

    items: [

      { name: 'Indore Sarafa Chaat Pavilion', tag: 'Signature' },

      { name: 'Six-Flavour Matka Pani Puri' },

      { name: 'Tawa Aloo Tikki & Dahi Bhalla' },

      { name: 'Mysore Ghee Roast Dosa Counter' },

      { name: 'Artisanal Wood-Fired Pasta Station' },

      { name: 'Asian Wok & Dim Sum Bar' },

    ],

  },

  {

    key: 'cat-desserts',

    number: '07',

    title: 'Desserts & Sweets',

    shortLabel: 'Desserts & Sweets',

    subtitle: 'Pure ghee mithai, warm traditional halwas, and contemporary handcrafted confections.',

    image: '/media/photos/dessert_and_mithai_banquet.jpg',

    alt: 'Decadent dessert and Indian sweet banquet counter with golden vark and rabri.',

    items: [

      { name: 'Warm Kesar Jalebi with Lachha Rabri', tag: 'Live Counter' },

      { name: 'Moong Dal Halwa in Pure Desi Ghee', tag: 'Signature' },

      { name: 'Gulab Jamun with Rose Caviar' },

      { name: 'Shahi Malai Kulfi Falooda' },

      { name: 'Angoori Rasmalai with Saffron Milk' },

      { name: 'Assorted Baklava & Mini Pastries' },

      { name: 'Seasonal Fruit Crepes' },

      { name: 'Indori Shikanji & Ice Cream Station' },

    ],

  },

  {

    key: 'cat-special',

    number: '08',

    title: 'Special Menu Options',

    shortLabel: 'Special Menus',

    subtitle: 'Dedicated religious, dietary, and regional Malwi feasts prepared with strict kitchen discipline.',

    image: '/media/ai-enhanced/royal_silver_pangat_thali_deluxe.jpg',

    alt: 'Royal Silver Pangat Thali feast with authentic Dal Bafla, churma, and desi ghee.',

    items: [

      { name: 'Strict Jain & Sattvic Feast (No Root Vegetables)', tag: 'Pure Jain' },

      { name: 'Authentic Malwi Dal Bafla & Laddu Banquet', tag: 'Heritage' },

      { name: 'Falahari Vrat & Upwas Menu' },

      { name: 'High-Tea & Muhurat Refreshment Boxes' },

      { name: 'Seated Silver-Style Pangat Service' },

      { name: 'Custom Kids & Youth Lounge Menu' },

    ],

  },

];



export interface VideoGalleryItem {

  id: string;

  title: string;

  subtitle: string;

  category: 'weddings' | 'corporate' | 'live-counters' | 'food' | 'service';

  videoSrc: string;

  poster: string;

  duration: string;

  orientation: 'landscape' | 'portrait';

  description: string;

  badge: string;

}



export const EVENT_VIDEOS: VideoGalleryItem[] = [

  {

    id: 'vid-01',

    title: 'Royal Wedding Grand Buffet Walkthrough',

    subtitle: 'Grand Wedding Lawn Reception',

    category: 'weddings',

    videoSrc: '/media/videos/royal_wedding_buffet_walkthrough.mp4',

    poster: '/media/thumbnails/royal_wedding_buffet_walkthrough_poster.jpg',

    duration: '0:39',

    orientation: 'portrait',

    description: 'Immersive panoramic walkthrough of lavish multi-cuisine wedding banquet counters, floral canopies, and warm ambient lighting.',

    badge: 'Wedding Walkthrough',

  },

  {

    id: 'vid-02',

    title: 'Royal Carved Catering Stalls & Chafing Counters',

    subtitle: 'Heritage Wagon Displays',

    category: 'live-counters',

    videoSrc: '/media/videos/royal_carved_stalls_counters.mp4',

    poster: '/media/thumbnails/royal_carved_stalls_counters_poster.jpg',

    duration: '0:26',

    orientation: 'portrait',

    description: 'Opulent white-and-gold carved catering wagons with warm backlights installed across open celebration lawns.',

    badge: 'Carved Stalls',

  },

  {

    id: 'vid-03',

    title: 'Live Chaat & Street Food Theatre',

    subtitle: 'Sarafa-Style Interactive Stations',

    category: 'live-counters',

    videoSrc: '/media/videos/live_chaat_theatre_ambience.mp4',

    poster: '/media/thumbnails/live_chaat_theatre_ambience_poster.jpg',

    duration: '0:32',

    orientation: 'landscape',

    description: 'Energetic live cooking counter theatre showing pan-tossed hot tikkas, pani puri fountains, and interactive guest hospitality.',

    badge: 'Live Theatre',

  },

  {

    id: 'vid-04',

    title: 'Grand Lawn Evening Banquet Spread',

    subtitle: 'Outdoor Reception Dining',

    category: 'weddings',

    videoSrc: '/media/videos/grand_lawn_banquet_spread.mp4',

    poster: '/media/thumbnails/grand_lawn_banquet_spread_poster.jpg',

    duration: '0:48',

    orientation: 'landscape',

    description: 'Wide-angle cinematic capture of the outdoor evening wedding dining pavilion with illuminated walkways and silver service.',

    badge: 'Grand Spread',

  },

  {

    id: 'vid-05',

    title: 'Culinary Masterpieces & Banquet Hall Setup',

    subtitle: 'Executive Leadership Gala',

    category: 'corporate',

    videoSrc: '/media/videos/culinary_masterpieces_banquet_hall.mp4',

    poster: '/media/thumbnails/culinary_masterpieces_banquet_hall_poster.jpg',

    duration: '2:25',

    orientation: 'landscape',

    description: 'Comprehensive 2-minute showcase of large-scale banquet execution, gourmet chafing dish alignment, and formal service lines.',

    badge: 'Executive Gala',

  },

  {

    id: 'vid-06',

    title: 'Traditional Mithai & Dessert Pavilion',

    subtitle: 'Royal Sweets & Live Jalebi Counter',

    category: 'food',

    videoSrc: '/media/videos/traditional_dessert_mithai_pavilion.mp4',

    poster: '/media/thumbnails/traditional_dessert_mithai_pavilion_poster.jpg',

    duration: '0:34',

    orientation: 'portrait',

    description: 'Sizzling hot saffron jalebis dipped in sugar syrup, paired with chilled lachha rabri and gold-garnished artisanal sweets.',

    badge: 'Dessert Theatre',

  },

  {

    id: 'vid-07',

    title: 'Indori Live Food Counters in Action',

    subtitle: 'Authentic Malwa Delicacies',

    category: 'live-counters',

    videoSrc: '/media/videos/indori_live_counters_action.mp4',

    poster: '/media/thumbnails/indori_live_counters_action_poster.jpg',

    duration: '0:49',

    orientation: 'portrait',

    description: 'Fast-paced live counters churning out sizzling Indori snacks, cheese corn balls, and authentic tawa specialties.',

    badge: 'Live Action',

  },

  {

    id: 'vid-08',

    title: 'Royal Caterers Team Hospitality & Care',

    subtitle: 'Uniformed Banquet Staff in Motion',

    category: 'service',

    videoSrc: '/media/videos/royal_caterers_team_hospitality.mp4',

    poster: '/media/thumbnails/royal_caterers_team_hospitality_poster.jpg',

    duration: '0:40',

    orientation: 'landscape',

    description: 'Our disciplined, well-groomed catering captains and stewards ensuring spotless dining stations and warm Indian hospitality.',

    badge: 'Service Excellence',

  },

  {

    id: 'vid-09',

    title: 'Golden Hour Dining Table Ambience',

    subtitle: 'Sunset Celebration Tableware',

    category: 'weddings',

    videoSrc: '/media/videos/golden_hour_dining_ambience.mp4',

    poster: '/media/thumbnails/golden_hour_dining_ambience_poster.jpg',

    duration: '0:25',

    orientation: 'portrait',

    description: 'Gentle golden hour rays glinting off brass cutlery, crystal glassware, and custom table runners on wedding celebration lawns.',

    badge: 'Table Styling',

  },

  {

    id: 'vid-10',

    title: 'Night Gala Grand Buffet Illumination',

    subtitle: 'Architectural Lighting & Gourmet Buffets',

    category: 'corporate',

    videoSrc: '/media/videos/night_gala_buffet_illumination.mp4',

    poster: '/media/thumbnails/night_gala_buffet_illumination_poster.jpg',

    duration: '0:38',

    orientation: 'landscape',

    description: 'Dazzling warm fairy lights and architectural uplighting transforming nighttime banquet counters into a fine-dining gallery.',

    badge: 'Night Gala',

  },

];



export interface GalleryVignette {

  id: number;

  title: string;

  categoryLabel: string;

  categories: string[];

  aspectClass: string;

  colSpanClass: string;

  image: string;

  alt: string;

  isAiEnhanced?: boolean;

}



export const GALLERY_ITEMS: GalleryVignette[] = [

  {

    id: 0,

    title: 'Royal Catering Carriage & Live Stall',

    categoryLabel: 'Live Counters · Weddings',

    categories: ['live-counters', 'weddings', 'special-occasions'],

    colSpanClass: 'md:col-span-8',

    aspectClass: 'aspect-[16/10]',

    image: '/media/photos/royal_wedding_live_buffet_stall.jpg',

    alt: 'Ornate handcrafted white-and-gold royal catering carriage stall stationed on an outdoor reception lawn.',

  },

  {

    id: 1,

    title: 'Grand Wedding Night Catering Pavilion',

    categoryLabel: 'Weddings · Buffets',

    categories: ['weddings', 'buffets'],

    colSpanClass: 'md:col-span-4',

    aspectClass: 'aspect-[4/5]',

    image: '/media/photos/ornate_food_stall_night_lighting.jpg',

    alt: 'Lavish nighttime catering setup with golden backlights and carved wooden serving wagons.',

  },

  {

    id: 2,

    title: 'Shahi Vegetable Dum Biryani Handi',

    categoryLabel: 'Food · Masterpiece',

    categories: ['food', 'weddings', 'special-occasions'],

    colSpanClass: 'md:col-span-4',

    aspectClass: 'aspect-[4/3]',

    image: '/media/ai-enhanced/shahi_dum_biryani_handi_steam.jpg',

    alt: 'Chef unsealing an authentic royal copper handi of fragrant saffron Dum Biryani with steam rising.',

    isAiEnhanced: true,

  },

  {

    id: 3,

    title: 'Royal Indori Silver Pangat Feast',

    categoryLabel: 'Food · Heritage',

    categories: ['food', 'special-occasions', 'weddings'],

    colSpanClass: 'md:col-span-4',

    aspectClass: 'aspect-[4/3]',

    image: '/media/ai-enhanced/royal_silver_pangat_thali_deluxe.jpg',

    alt: 'Fine dining pure silver thali feast with authentic Dal Bafla, liquid desi ghee, and churma laddu.',

    isAiEnhanced: true,

  },

  {

    id: 4,

    title: 'Executive Chafing Dish & Hot Entrée Line',

    categoryLabel: 'Corporate Events · Buffets',

    categories: ['corporate', 'buffets'],

    colSpanClass: 'md:col-span-4',

    aspectClass: 'aspect-[4/3]',

    image: '/media/photos/luxury_banquet_chafer_line.jpg',

    alt: 'Gleaming stainless steel chafing dish counter presenting freshly cooked hot vegetarian delicacies.',

  },

  {

    id: 5,

    title: 'Palace Wedding Welcome Corridor',

    categoryLabel: 'Weddings · Special Occasions',

    categories: ['weddings', 'special-occasions'],

    colSpanClass: 'md:col-span-6',

    aspectClass: 'aspect-[16/10]',

    image: '/media/ai-enhanced/royal_entrance_canopy_luxury.jpg',

    alt: 'Majestic royal palace catering entrance with heirloom brass urlis, marigold garlands, and glowing oil lamps.',

    isAiEnhanced: true,

  },

  {

    id: 6,

    title: 'Celebration Dinner Buffet Panorama',

    categoryLabel: 'Buffets · Weddings',

    categories: ['buffets', 'weddings'],

    colSpanClass: 'md:col-span-6',

    aspectClass: 'aspect-[16/10]',

    image: '/media/photos/gourmet_buffet_arrangement_night.jpg',

    alt: 'Multi-tier buffet stations adorned with warm ambient lighting and decorative ice carvings.',

  },

  {

    id: 7,

    title: 'Signature Indori Live Food Counter',

    categoryLabel: 'Live Counters · Food',

    categories: ['live-counters', 'food'],

    colSpanClass: 'md:col-span-4',

    aspectClass: 'aspect-[4/3]',

    image: '/media/photos/live_counter_service_wagon.jpg',

    alt: 'Artisanal wagon counter illuminated for evening dining featuring live chef stations.',

  },

  {

    id: 8,

    title: 'Mithai & Sweet Decadence Display',

    categoryLabel: 'Food · Desserts',

    categories: ['food', 'special-occasions'],

    colSpanClass: 'md:col-span-4',

    aspectClass: 'aspect-[4/3]',

    image: '/media/photos/dessert_and_mithai_banquet.jpg',

    alt: 'Artfully arranged platters of traditional Indian sweets, kaju katli, and warm rabri cups.',

  },

  {

    id: 9,

    title: 'Executive Corporate Banquet Ambience',

    categoryLabel: 'Corporate Events · Dining',

    categories: ['corporate', 'buffets'],

    colSpanClass: 'md:col-span-4',

    aspectClass: 'aspect-[4/3]',

    image: '/media/photos/corporate_gala_table_setting.jpg',

    alt: 'Crisp linen formal corporate table arrangements with royal blue runners and fine glassware.',

  },

  {

    id: 10,

    title: 'Clay Oven Tandoor Live Bread Station',

    categoryLabel: 'Live Counters · Food',

    categories: ['live-counters', 'food'],

    colSpanClass: 'md:col-span-6',

    aspectClass: 'aspect-[16/10]',

    image: '/media/photos/live_tandoor_hot_breads_counter.jpg',

    alt: 'Freshly baked butter garlic naans and kulchas coming hot from live clay tandoor stations.',

  },

  {

    id: 11,

    title: 'Sarafa-Inspired Live Chaat Pavilion',

    categoryLabel: 'Live Counters · Special Occasions',

    categories: ['live-counters', 'food', 'special-occasions'],

    colSpanClass: 'md:col-span-6',

    aspectClass: 'aspect-[16/10]',

    image: '/media/photos/chaat_and_appetizer_service_bar.jpg',

    alt: 'Interactive chaat station with pani puri fountains, tawa tikki, and sweet curd dahi vadas.',

  },

  {

    id: 12,

    title: 'Attentive Banquet Hospitality Service',

    categoryLabel: 'Private Parties · Hospitality',

    categories: ['private-parties', 'weddings', 'service'],

    colSpanClass: 'md:col-span-4',

    aspectClass: 'aspect-[4/3]',

    image: '/media/photos/royal_service_hospitality_staff.jpg',

    alt: 'Royal Caterers dedicated staff maintaining spotless counters and attentive guest service.',

  },

  {

    id: 13,

    title: 'Artisanal Salad & Exotic Fruit Carvings',

    categoryLabel: 'Food · Buffets',

    categories: ['food', 'buffets'],

    colSpanClass: 'md:col-span-4',

    aspectClass: 'aspect-[4/3]',

    image: '/media/photos/fresh_salad_and_fruit_carving.jpg',

    alt: 'Handcrafted watermelon carvings, tropical fruit tier towers, and refreshing garden salads.',

  },

  {

    id: 14,

    title: 'Grand Welcome Drink & Mocktail Lounge',

    categoryLabel: 'Special Occasions · Beverages',

    categories: ['special-occasions', 'weddings', 'corporate'],

    colSpanClass: 'md:col-span-4',

    aspectClass: 'aspect-[4/3]',

    image: '/media/photos/grand_entrance_catering_decor.jpg',

    alt: 'Sophisticated mocktail and welcome beverage bar with dry ice mist and crystal goblets.',

  },

  {

    id: 15,

    title: 'Authentic Malwi Dal Bafla Spread',

    categoryLabel: 'Food · Heritage',

    categories: ['food', 'weddings'],

    colSpanClass: 'md:col-span-4',

    aspectClass: 'aspect-[4/3]',

    image: '/media/photos/traditional_malwi_thali_counter.jpg',

    alt: 'Authentic Indore Malwa Dal Bafla, pure desi ghee bowls, spicy garlic chutney, and churma.',

  },

  {

    id: 16,

    title: 'Fairy Light Canopy Over Dining Lawn',

    categoryLabel: 'Weddings · Ambience',

    categories: ['weddings', 'special-occasions'],

    colSpanClass: 'md:col-span-4',

    aspectClass: 'aspect-[4/3]',

    image: '/media/photos/evening_lawn_illuminated_canopy.jpg',

    alt: 'Enchanting fairy light ceiling over outdoor wedding dining tables with floral centerpieces.',

  },

  {

    id: 17,

    title: 'Regal Shahi Paneer & Rich Gravy Station',

    categoryLabel: 'Food · Main Course',

    categories: ['food', 'buffets'],

    colSpanClass: 'md:col-span-4',

    aspectClass: 'aspect-[4/3]',

    image: '/media/photos/regal_curry_station_warmers.jpg',

    alt: 'Slow-simmered aromatic gravies, Dal Makhani, and Shahi Paneer in brass handis with ladles.',
  },
  {
    id: 18,
    title: 'Official Menu Card · Front Cover Arch',
    categoryLabel: 'Official Stationery · Brand Architecture',
    categories: ['stationery', 'special-occasions'],
    colSpanClass: 'md:col-span-4',
    aspectClass: 'aspect-[3/4]',
    image: BRAND_ASSETS.menuCardPage1,
    alt: 'Official printed banquet menu front cover with royal Mughal arch and gold seal.',
  },
  {
    id: 19,
    title: 'Official 8-Course Inside Banquet Spread',
    categoryLabel: 'Official Stationery · 1960 Heritage Cloche',
    categories: ['stationery', 'food'],
    colSpanClass: 'md:col-span-4',
    aspectClass: 'aspect-[3/4]',
    image: BRAND_ASSETS.menuCardPage2,
    alt: 'Official printed 8-course banquet menu spread featuring authentic cloche seal.',
  },
  {
    id: 20,
    title: 'Official Menu Card · Back Cover & Heritage',
    categoryLabel: 'Official Stationery · Est. 1960',
    categories: ['stationery', 'weddings'],
    colSpanClass: 'md:col-span-4',
    aspectClass: 'aspect-[3/4]',
    image: BRAND_ASSETS.menuCardPage3,
    alt: 'Official printed banquet menu back cover with tagline Where Tradition Meets Taste.',
  },
  {
    id: 21,
    title: 'Brand Identity System · Color Palette & Harmony',
    categoryLabel: 'Brand Architecture · Imperial Palette',
    categories: ['stationery'],
    colSpanClass: 'md:col-span-6',
    aspectClass: 'aspect-[4/3]',
    image: BRAND_ASSETS.brandGuidelineColors,
    alt: 'Official brand guidelines color palette sheet with hex values and proportions.',
  },
  {
    id: 22,
    title: 'Sacred Rangoli Mandala & Brocade Pattern System',
    categoryLabel: 'Brand Architecture · Indian Geometry',
    categories: ['stationery'],
    colSpanClass: 'md:col-span-6',
    aspectClass: 'aspect-[4/3]',
    image: BRAND_ASSETS.brandGuidelineMandala,
    alt: 'Sacred Indian 16-point Rangoli Mandala geometry and seamless repeating brocade pattern.',
  },
];

