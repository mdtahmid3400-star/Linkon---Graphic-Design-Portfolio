import React from 'react';
import Button from '../components/Button';
import { DownloadIcon } from '../components/icons/Icons';
import { PROFILE_IMAGE_URL } from '../constants';
import ScrollAnimator from '../components/ScrollAnimator';

const AboutPage: React.FC = () => {
  const skills = [
    'UI/UX Design', 'Illustration', 'Logo Design', 'Branding', 'Iconography',
    'Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Prototyping', 'User Research'
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-3 gap-12 items-center">
        {/* Image Column */}
        <ScrollAnimator className="md:col-span-1 flex justify-center items-center">
          <img 
            src={PROFILE_IMAGE_URL} 
            alt="Linkon - Graphic Designer"
            className="rounded-full shadow-lg w-64 h-64 md:w-80 md:h-80 object-cover object-top"
          />
        </ScrollAnimator>

        {/* Content Column */}
        <ScrollAnimator className="md:col-span-2" delay={200}>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">
            About Me
          </h1>
          <p className="text-lg text-emerald-600 dark:text-primary font-semibold mb-4">
            Passionate Designer Crafting Digital Experiences
          </p>
          <div className="space-y-4 text-gray-600 dark:text-text-secondary leading-relaxed">
            <p>
              Hello! I'm Linkon, a multi-disciplinary graphic designer and illustrator with a passion for creating engaging and user-centric digital experiences. With over 5 years in the industry, I've had the pleasure of working with a diverse range of clients, from startups to established companies, helping them bring their visions to life.
            </p>
            <p>
              My design philosophy is rooted in simplicity, clarity, and a deep understanding of user needs. I believe that great design is not just about aesthetics, but about solving problems and creating intuitive, enjoyable interactions. Whether I'm designing a brand identity, illustrating a complex concept, or crafting a user interface, my goal is always to create work that is both beautiful and effective.
            </p>
            <p>
              When I'm not designing, you can find me sketching, exploring new art galleries, or getting lost in a good book. I'm constantly seeking inspiration and learning new things to keep my creative skills sharp.
            </p>
          </div>
          <div className="mt-8">
            <Button
              onClick={() => window.open('/resume.pdf', '_blank')}
              icon={<DownloadIcon />}
            >
              Download My Resume
            </Button>
          </div>
        </ScrollAnimator>
      </div>

      {/* Skills Section */}
      <ScrollAnimator className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-3">
          {skills.map(skill => (
            <span key={skill} className="bg-gray-200 dark:bg-surface px-4 py-2 rounded-full text-gray-800 dark:text-text-primary font-medium">
              {skill}
            </span>
          ))}
        </div>
      </ScrollAnimator>
    </div>
  );
};

export default AboutPage;