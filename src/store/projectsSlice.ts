import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  features: string[];
}

export const projectsData: Project[] = [
  {
    id: 'luxmoto',
    name: 'LuxMoto',
    category: 'Automotive',
    description: 'Premium motorcycle showroom with stunning visuals',
    fullDescription: 'LuxMoto is a luxury motorcycle showroom website featuring high-end sports bikes with an immersive browsing experience. The platform showcases premium motorcycles with detailed specifications, stunning imagery, and a sophisticated user interface designed for enthusiasts.',
    image: '/images/luxmoto.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    githubUrl: 'https://github.com/mugaw/LuxMoto',
    features: ['Responsive design', 'Interactive galleries', 'Smooth animations', 'Product filtering']
  },
  {
    id: 'luxauto',
    name: 'LuxAuto',
    category: 'Automotive',
    description: 'Luxury car dealership with elegant showcase',
    fullDescription: 'LuxAuto is a premium car dealership platform showcasing luxury and exotic vehicles. The website features an elegant design with high-quality vehicle imagery, detailed specifications, and an intuitive browsing experience for potential buyers.',
    image: '/images/luxauto.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/mugaw/LuxAuto',
    features: ['Vehicle comparison', 'Interactive showroom', 'Financing calculator', 'Test drive booking']
  },
  {
    id: 'aurum-fintech',
    name: 'Aurum Fintech',
    category: 'Fintech',
    description: 'Modern financial dashboard with analytics',
    fullDescription: 'Aurum Fintech is a comprehensive financial dashboard providing real-time analytics, portfolio tracking, and investment insights. The platform features a dark-themed modern interface with interactive charts and data visualization tools.',
    image: '/images/aurum-fintech.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
    githubUrl: 'https://github.com/mugaw/aurum-fintech',
    features: ['Real-time charts', 'Portfolio tracking', 'Transaction history', 'Investment analytics']
  },
  {
    id: 'weardrop',
    name: 'Weardrop',
    category: 'E-Commerce',
    description: 'Fashion e-commerce with modern aesthetics',
    fullDescription: 'Weardrop is a fashion e-commerce platform featuring curated clothing collections with a minimalist design. The website offers seamless shopping experience with product filtering, size guides, and secure checkout functionality.',
    image: '/images/weardrop.jpg',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/mugaw/weardrop',
    features: ['Product filtering', 'Wishlist', 'Secure checkout', 'Order tracking']
  },
  {
    id: 'cineverse',
    name: 'Cineverse',
    category: 'Entertainment',
    description: 'Entertainment streaming platform interface',
    fullDescription: 'Cineverse is an entertainment streaming platform featuring movies, TV shows, and original content. The interface includes personalized recommendations, watchlists, and a immersive viewing experience with dark theme design.',
    image: '/images/cineverse.jpg',
    technologies: ['React', 'TypeScript', 'Firebase', 'TMDB API'],
    githubUrl: 'https://github.com/mugaw/cineverse',
    features: ['Movie recommendations', 'Watchlist', 'User profiles', 'Search functionality']
  },
  {
    id: 'freshharvest',
    name: 'Fresh Harvest',
    category: 'E-Commerce',
    description: 'Fresh grocery delivery app interface',
    fullDescription: 'Fresh Harvest is a grocery delivery application focused on fresh produce and organic products. The platform features a clean, fresh design with easy navigation, product categories, and quick ordering functionality.',
    image: '/images/freshharvest.jpg',
    technologies: ['React', 'JavaScript', 'Node.js', 'Express'],
    githubUrl: 'https://github.com/mugaw/freshharvest',
    features: ['Product categories', 'Delivery scheduling', 'Order tracking', 'Payment integration']
  },
  {
    id: 'fragrances',
    name: 'Fragrances',
    category: 'E-Commerce',
    description: 'Luxury perfume boutique online store',
    fullDescription: 'Fragrances is a luxury perfume boutique featuring premium scents from around the world. The website offers an elegant shopping experience with detailed fragrance notes, customer reviews, and personalized recommendations.',
    image: '/images/fragrances.jpg',
    technologies: ['React', 'TypeScript', 'Next.js', 'Stripe'],
    githubUrl: 'https://github.com/mugaw/Fragrances',
    features: ['Fragrance finder', 'Customer reviews', 'Gift wrapping', 'Subscription service']
  },
  {
    id: 'velvet-rose',
    name: 'Velvet Rose Floral',
    category: 'E-Commerce',
    description: 'Elegant flower shop with beautiful arrangements',
    fullDescription: 'Velvet Rose Floral is an online flower shop offering beautiful arrangements for all occasions. The website features a romantic design with curated collections, same-day delivery options, and custom arrangement requests.',
    image: '/images/velvet-rose.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Sanity CMS'],
    githubUrl: 'https://github.com/mugaw/Velvet-Rose-Floral',
    features: ['Occasion filtering', 'Same-day delivery', 'Custom arrangements', 'Subscription boxes']
  },
  {
    id: 'astra-voyage',
    name: 'Astra Voyage',
    category: 'Travel',
    description: 'Space travel booking platform',
    fullDescription: 'Astra Voyage is a futuristic space travel booking platform offering trips to orbital stations, lunar bases, and beyond. The website features stunning space visuals, trip packages, and immersive booking experience.',
    image: '/images/astra-voyage.jpg',
    technologies: ['React', 'Three.js', 'GSAP', 'WebGL'],
    githubUrl: 'https://github.com/mugaw/astra-voyage',
    features: ['3D space visualization', 'Trip packages', 'Booking system', 'Virtual tours']
  },
  {
    id: 'bakery',
    name: 'Artisan Bakery',
    category: 'Food',
    description: 'Artisan bakery with delicious pastries',
    fullDescription: 'Artisan Bakery is a charming online bakery showcasing handcrafted pastries, breads, and cakes. The website features a warm, inviting design with product galleries, custom order forms, and delivery scheduling.',
    image: '/images/bakery.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    githubUrl: 'https://github.com/mugaw/bakery',
    features: ['Product gallery', 'Custom orders', 'Delivery scheduling', 'Gift cards']
  },
  {
    id: 'bookstore',
    name: 'Literary Pathways',
    category: 'E-Commerce',
    description: 'Online bookstore with vast collection',
    fullDescription: 'Literary Pathways is an online bookstore featuring a vast collection of books across all genres. The platform offers personalized recommendations, reading lists, and a community forum for book lovers.',
    image: '/images/bookstore.jpg',
    technologies: ['JavaScript', 'Node.js', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/mugaw/BookStore--Site',
    features: ['Book recommendations', 'Reading lists', 'Community forum', 'Author profiles']
  }
];

interface ProjectsState {
  currentProject: string | null;
  projects: Project[];
}

const initialState: ProjectsState = {
  currentProject: null,
  projects: projectsData,
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setCurrentProject: (state, action: PayloadAction<string | null>) => {
      state.currentProject = action.payload;
    },
  },
});

export const { setCurrentProject } = projectsSlice.actions;
export default projectsSlice.reducer;
