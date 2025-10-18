import React from 'react';
import { Page } from '../types';
import { NAV_LINKS } from '../constants';
import { LinkedInIcon, FiverrIcon, BehanceIcon, EmailIcon } from './icons/Icons';
import ScrollAnimator from './ScrollAnimator';

interface FooterProps {
  navigateTo: (page: Page) => void;
}

const SocialLink: React.FC<{ href: string; label: string; children: React.ReactNode }> = ({ href, label, children }) => {
    const isExternal = href.startsWith('http');
    return (
        <div className="relative group">
            <a 
                href={href} 
                aria-label={label} 
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="text-gray-500 dark:text-text-secondary hover:text-emerald-600 dark:hover:text-primary transition-colors duration-300"
            >
                {children}
            </a>
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-emerald-600 text-white dark:bg-primary dark:text-background text-xs font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {label}
            </div>
        </div>
    );
};


const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
    const socialLinks = [
        { href: 'mailto:mdlinkon719@gmail.com', label: 'Email', icon: <EmailIcon /> },
        { href: 'https://www.linkedin.com/company/perfree-it/', label: 'LinkedIn', icon: <LinkedInIcon /> },
        { href: 'https://www.behance.net/perfreeit', label: 'Behance', icon: <BehanceIcon /> },
        { href: 'https://www.fiverr.com/md_linkon1', label: 'Fiverr', icon: <FiverrIcon /> },
    ];
    
  return (
    <footer className="bg-gray-100 dark:bg-surface">
      <ScrollAnimator>
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            
            {/* Column 1: Brand */}
            <div>
              <h3 className="text-2xl font-bold tracking-tighter text-gray-900 dark:text-text-primary inline-block md:inline">
                Linkon<span className="text-emerald-600 dark:text-primary">.</span>
              </h3>
              <p className="mt-2 text-gray-600 dark:text-text-secondary">Graphic Designer & Illustrator</p>
            </div>

            {/* Column 2: Navigation */}
            <div className="md:text-center">
              <h4 className="font-semibold text-gray-800 dark:text-text-primary tracking-wider uppercase">Navigate</h4>
              <ul className="mt-4 space-y-2">
                {NAV_LINKS.map(link => (
                  <li key={link.page}>
                    <button onClick={() => navigateTo(link.page)} className="text-gray-600 dark:text-text-secondary hover:text-emerald-600 dark:hover:text-primary transition-colors">{link.name}</button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Social Links */}
            <div className="md:text-right">
              <h4 className="font-semibold text-gray-800 dark:text-text-primary tracking-wider uppercase">Connect</h4>
              <div className="flex space-x-5 mt-4 justify-center md:justify-end">
                {socialLinks.map(link => (
                  <SocialLink key={link.label} href={link.href} label={link.label}>
                    {link.icon}
                  </SocialLink>
                ))}
              </div>
            </div>

          </div>
          <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center text-gray-500 dark:text-text-secondary text-sm gap-2">
            <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} Linkon. All Rights Reserved.</p>
            <p className="text-center sm:text-right">Developed by <span className="font-semibold text-gray-800 dark:text-text-primary">Md Taqi Tahmid</span></p>
          </div>
        </div>
      </ScrollAnimator>
    </footer>
  );
};

export default Footer;