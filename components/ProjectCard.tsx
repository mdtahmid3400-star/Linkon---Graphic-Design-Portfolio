import React from 'react';
import { Project } from '../types';
import { EyeIcon } from './icons/Icons';

interface ProjectCardProps {
  project: Project;
  onViewImage: (imageUrl: string) => void;
  isAnimated?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewImage, isAnimated = false }) => {
  return (
    <div 
      className={`group bg-white dark:bg-surface rounded-lg overflow-hidden shadow-lg transition-all duration-300 h-full flex flex-col ${!isAnimated ? 'lg:hover:shadow-2xl lg:hover:-translate-y-2' : ''}`}
    >
      <div className="relative overflow-hidden cursor-pointer" onClick={() => onViewImage(project.image)}>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-80 object-cover lg:group-hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center lg:bg-transparent lg:group-hover:bg-black/50 transition-all duration-300">
          <div className="transform scale-100 lg:scale-0 lg:group-hover:scale-100 transition-transform duration-300 text-white">
            <EyeIcon className="h-12 w-12" />
          </div>
        </div>
      </div>
      <div className="p-5 mt-auto">
        <h3 className="text-lg font-bold text-gray-900 dark:text-text-primary truncate">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-gray-700 dark:text-primary px-2 py-1 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;