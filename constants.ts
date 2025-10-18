import { Page, Project } from './types';

export const PROFILE_IMAGE_URL = 'https://pps.services.adobe.com/api/profile/AA6D208A67F904100A495C28@AdobeID/image/28ff4b45-9c5c-49dc-a12d-4cab43bf4f8d/230';

export const NAV_LINKS: { page: Page; name: string }[] = [
  { page: 'home', name: 'Home' },
  { page: 'work', name: 'Work' },
  { page: 'about', name: 'About' },
  { page: 'contact', name: 'Contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Chromatic Flow',
    image: 'https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdyYXBoaWMlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
    tags: ['Abstract', '3D', 'Gradient'],
  },
  {
    id: 'proj-2',
    title: 'Geometric Harmony',
    image: 'https://media.istockphoto.com/id/2170889984/photo/digital-abstract-cpu-ai-artificial-intelligence-and-machine-learning-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=zGSV2_Jth30uGNDD7g-XV-nJTxRL2HH2O3qJH7T3AV4=',
    tags: ['Branding', 'Logo', 'Minimalist'],
  },
  {
    id: 'proj-3',
    title: 'Nebula Dreams',
    image: 'https://plus.unsplash.com/premium_photo-1683120972279-87efe2ba252f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=663',
    tags: ['Illustration', 'Sci-Fi', 'Poster'],
  },
  {
    id: 'proj-4',
    title: 'Retro Vibes',
    image: 'https://images.unsplash.com/photo-1658863025658-4a259cc68fc9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1025',
    tags: ['Art', 'Vintage', 'Texture'],
  },
  {
    id: 'proj-5',
    title: 'Pastel Interface',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    tags: ['UI/UX', 'Mobile App', 'Design System'],
  },
  {
    id: 'proj-6',
    title: 'Floral Identity',
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxncmFwaGljJTIwZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600',
    tags: ['Branding', 'Illustration', 'Packaging'],
  },
  {
    id: 'proj-7',
    title: 'Cybernetic Character',
    image: 'https://plus.unsplash.com/premium_photo-1682093307277-a14e0c36b8a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    tags: ['3D', 'Character', 'Sci-Fi'],
  },
  {
    id: 'proj-8',
    title: 'Minimalist Packaging',
    image: 'https://images.unsplash.com/photo-1635939412822-8f3ee593d147?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1054',
    tags: ['Packaging', 'Branding', 'Cosmetics'],
  }
];
