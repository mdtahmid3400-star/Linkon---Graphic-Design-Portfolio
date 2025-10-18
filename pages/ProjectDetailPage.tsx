

import React from 'react';
import { PROJECTS } from '../constants';
import Button from '../components/Button';
import { Page } from '../types';
import ScrollAnimator from '../components/ScrollAnimator';

interface ProjectDetailPageProps {
  projectId: string;
  navigateTo: (page: Page) => void;
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ projectId, navigateTo }) => {
  const project = PROJECTS.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Project Not Found</h2>
        <p className="text-gray-600 dark:text-text-secondary mt-2">The project you're looking for doesn't exist.</p>
        <Button onClick={() => navigateTo('work')} className="mt-4">Back to Work</Button>
      </div>
    );
  }

  return (
    <article>
      {/* Hero */}
      <header className="relative h-[60vh] min-h-[400px]">
        {/* Fix: Property 'heroImage' does not exist on type 'Project'. Use project.image as a fallback. */}
        <img src={project.heroImage || project.image} alt={`${project.title} hero image`} className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gray-900/70 dark:bg-background/70"></div>
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter animate-fade-in-up">{project.title}</h1>
            {/* Fix: Property 'tagline' does not exist on type 'Project'. Conditionally render it. */}
            {project.tagline && <p className="max-w-3xl mt-4 text-lg md:text-xl text-gray-200 dark:text-text-secondary animate-fade-in-up" style={{ animationDelay: '200ms' }}>{project.tagline}</p>}
        </div>
      </header>
      
      <div className="container mx-auto px-6 py-16">
        {/* Project Summary */}
        <ScrollAnimator className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-emerald-600 dark:text-primary mb-4">Project Summary</h2>
            {/* Fix: Property 'summary' does not exist on type 'Project'. Conditionally render it. */}
            {project.summary && <p className="text-gray-600 dark:text-text-secondary leading-relaxed">{project.summary}</p>}
          </div>
          <div className="space-y-4">
            {/* Fix: Property 'role' does not exist on type 'Project'. Conditionally render it. */}
            {project.role && (
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-text-secondary">Role</h3>
                <p className="text-gray-800 dark:text-text-primary font-medium">{project.role}</p>
              </div>
            )}
            {/* Fix: Property 'projectType' does not exist on type 'Project'. Conditionally render it. */}
            {project.projectType && (
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-text-secondary">Project Type</h3>
                <p className="text-gray-800 dark:text-text-primary font-medium">{project.projectType}</p>
              </div>
            )}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-text-secondary">Tags</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.tags.map(tag => <span key={tag} className="text-xs bg-gray-100 dark:bg-surface px-2 py-1 rounded">{tag}</span>)}
              </div>
            </div>
          </div>
        </ScrollAnimator>

        {/* The Problem */}
        {/* Fix: Property 'problem' does not exist on type 'Project'. Conditionally render it. */}
        {project.problem && (
          <ScrollAnimator className="max-w-4xl mx-auto bg-gray-100 dark:bg-surface p-8 rounded-lg mb-16">
              <h2 className="text-2xl font-bold text-emerald-600 dark:text-primary mb-4">The Problem</h2>
              <p className="text-gray-600 dark:text-text-secondary leading-relaxed">{project.problem}</p>
          </ScrollAnimator>
        )}

        {/* Responsibilities */}
        {/* Fix: Property 'responsibilities' does not exist on type 'Project'. Conditionally render it. */}
        {project.responsibilities && (
          <ScrollAnimator className="max-w-4xl mx-auto mb-16">
              <h2 className="text-2xl font-bold text-emerald-600 dark:text-primary mb-6 text-center">My Role & Responsibilities</h2>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                  {project.responsibilities.map(resp => (
                      <li key={resp} className="bg-gray-100 dark:bg-surface p-4 rounded-lg text-gray-800 dark:text-text-primary">{resp}</li>
                  ))}
              </ul>
          </ScrollAnimator>
        )}

        {/* Research & Process */}
        {/* Fix: Properties 'process' and 'wireframesImage' do not exist on type 'Project'. Conditionally render them. */}
        {project.process && (
          <ScrollAnimator className="max-w-4xl mx-auto mb-16">
              <h2 className="text-2xl font-bold text-emerald-600 dark:text-primary mb-4">Research & Process</h2>
              <p className="text-gray-600 dark:text-text-secondary leading-relaxed mb-6">{project.process}</p>
              {project.wireframesImage && <img src={project.wireframesImage} alt="Wireframes and process sketches" className="w-full rounded-lg shadow-lg"/>}
          </ScrollAnimator>
        )}

        {/* Final Screens */}
        {/* Fix: Property 'finalScreens' does not exist on type 'Project'. Conditionally render it. */}
        {project.finalScreens && (
          <ScrollAnimator className="max-w-6xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-emerald-600 dark:text-primary mb-8 text-center">Final Screens</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {project.finalScreens.map((screen, index) => (
                      <img key={index} src={screen} alt={`Final screen ${index+1}`} className="rounded-lg shadow-lg w-full object-contain"/>
                  ))}
              </div>
          </ScrollAnimator>
        )}

        {/* Outcomes */}
        {/* Fix: Property 'outcomes' does not exist on type 'Project'. Conditionally render it. */}
        {project.outcomes && (
          <ScrollAnimator className="max-w-4xl mx-auto bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-primary dark:to-secondary p-8 rounded-lg text-white dark:text-background">
              <h2 className="text-2xl font-bold mb-4">Outcomes & Metrics</h2>
              <p className="leading-relaxed font-medium">{project.outcomes}</p>
          </ScrollAnimator>
        )}

      </div>
    </article>
  );
};

export default ProjectDetailPage;