import React from 'react';
import { PROFILE_IMAGE_URL, PROJECTS } from '../constants';
import { Page } from '../types';
import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import { ArrowRightIcon } from '../components/icons/Icons';
import { PenToolIcon, PaintBrushIcon, TagIcon, SparklesIcon } from '../components/icons/Icons';
import ScrollAnimator from '../components/ScrollAnimator';


interface HomePageProps {
  navigateTo: (page: Page) => void;
  onViewImage: (imageUrl: string) => void;
}

const services = [
    {
      icon: <PenToolIcon />,
      title: 'Graphic Design',
      description: 'Creating visually stunning compositions for print and digital media, from marketing materials to social media content.',
    },
    {
      icon: <PaintBrushIcon />,
      title: 'Illustration',
      description: 'Bringing ideas to life with custom illustrations that tell a story and capture attention.',
    },
    {
      icon: <TagIcon />,
      title: 'Branding & Identity',
      description: 'Developing cohesive brand systems including logos, typography, and color palettes that resonate with your audience.',
    },
    {
      icon: <SparklesIcon />,
      title: 'UI/UX Design',
      description: 'Designing intuitive and engaging user interfaces that provide a seamless user experience across all devices.',
    },
];

const HomePage: React.FC<HomePageProps> = ({ navigateTo, onViewImage }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollAnimator className="text-center md:text-left order-2 md:order-1">
            <span className="text-emerald-600 dark:text-primary font-semibold tracking-wider">GRAPHIC DESIGNER & ILLUSTRATOR</span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mt-2 mb-4 text-gray-900 dark:text-text-primary">
              Crafting Visuals that Captivate & Convert
            </h1>
            <p className="text-lg text-gray-600 dark:text-text-secondary max-w-xl mx-auto md:mx-0">
              Hi, I'm Linkon. A passionate designer specializing in creating beautiful, functional, and user-centered designs that drive results.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button onClick={() => navigateTo('work')} icon={<ArrowRightIcon className="w-5 h-5" />}>
                View My Work
              </Button>
              <Button variant="secondary" onClick={() => navigateTo('contact')} >
                Get In Touch
              </Button>
            </div>
          </ScrollAnimator>
          <ScrollAnimator delay={200} className="flex justify-center items-center order-1 md:order-2">
            <img 
              src={PROFILE_IMAGE_URL} 
              alt="A professional headshot of Linkon, a graphic designer." 
              className="rounded-full shadow-2xl w-80 h-80 md:w-96 md:h-96 object-cover object-top animate-subtle-bob"
            />
          </ScrollAnimator>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <ScrollAnimator className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-text-secondary">A glimpse into my creative world.</p>
        </ScrollAnimator>
        <div className="mt-12 relative w-full overflow-hidden group">
          <div className="flex animate-scrolling group-hover:pause">
            {[...PROJECTS, ...PROJECTS].map((project, index) => (
              <div key={`${project.id}-${index}`} className="flex-shrink-0 w-80 mx-4">
                <ProjectCard project={project} onViewImage={onViewImage} isAnimated={true} />
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 dark:from-background to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 dark:from-background to-transparent pointer-events-none"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100 dark:bg-surface">
        <div className="container mx-auto px-6">
          <ScrollAnimator className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">What I Do</h2>
            <p className="mt-2 text-lg text-gray-600 dark:text-text-secondary">I offer a range of services to help you achieve your goals.</p>
          </ScrollAnimator>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {services.map((service, index) => (
              <ScrollAnimator key={service.title} delay={index * 100}>
                <div className="bg-white dark:bg-background p-8 rounded-lg text-center h-full">
                  <div className="text-emerald-600 dark:text-primary inline-block p-4 bg-gray-200 dark:bg-gray-700 rounded-full mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-text-primary mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-text-secondary">{service.description}</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;