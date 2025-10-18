import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import ScrollAnimator from '../components/ScrollAnimator';

interface WorkPageProps {
  onViewImage: (imageUrl: string) => void;
}

const WorkPage: React.FC<WorkPageProps> = ({ onViewImage }) => {
  return (
    <div className="container mx-auto px-6 py-16">
      <ScrollAnimator className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-primary dark:to-secondary">My Work</h1>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600 dark:text-text-secondary">A selection of projects that showcase my passion for creating meaningful digital products.</p>
      </ScrollAnimator>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {PROJECTS.map((project, index) => (
          <ScrollAnimator key={project.id} delay={index * 100}>
            <ProjectCard project={project} onViewImage={onViewImage} />
          </ScrollAnimator>
        ))}
      </div>
    </div>
  );
};

export default WorkPage;