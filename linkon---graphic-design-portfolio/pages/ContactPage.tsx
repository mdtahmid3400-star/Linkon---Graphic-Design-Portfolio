import React from 'react';
import { FiverrIcon, EmailIcon, BehanceIcon, LinkedInIcon } from '../components/icons/Icons';
import ScrollAnimator from '../components/ScrollAnimator';

const ContactPage: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-16">
            <ScrollAnimator className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">Let's Create Together</h1>
                <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600 dark:text-text-secondary">Have a project in mind or just want to say hello? I'd love to hear from you.</p>
            </ScrollAnimator>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Email Card */}
                    <ScrollAnimator delay={0}>
                      <a href="mailto:mdlinkon719@gmail.com" className="group bg-gray-100 dark:bg-surface p-8 rounded-lg text-center transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:-translate-y-1 block h-full">
                          <EmailIcon className="h-12 w-12 mx-auto text-emerald-600 dark:text-primary mb-4" />
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-text-primary mb-2">Contact via Email</h2>
                          <p className="text-gray-600 dark:text-text-secondary mb-4">Send me a detailed message, and I'll get back to you soon.</p>
                          <span className="font-semibold text-emerald-600 dark:text-primary">mdlinkon719@gmail.com</span>
                      </a>
                    </ScrollAnimator>

                    {/* LinkedIn Card */}
                    <ScrollAnimator delay={100}>
                      <a href="https://www.linkedin.com/company/perfree-it/" target="_blank" rel="noopener noreferrer" className="group bg-gray-100 dark:bg-surface p-8 rounded-lg text-center transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:-translate-y-1 block h-full">
                          <LinkedInIcon className="h-12 w-12 mx-auto text-emerald-600 dark:text-primary mb-4" />
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-text-primary mb-2">Connect on LinkedIn</h2>
                          <p className="text-gray-600 dark:text-text-secondary mb-4">Follow my professional journey and connect for business inquiries.</p>
                          <span className="font-semibold text-emerald-600 dark:text-primary">Connect with me &rarr;</span>
                      </a>
                    </ScrollAnimator>
                    
                    {/* Behance Card */}
                    <ScrollAnimator delay={200}>
                      <a href="https://www.behance.net/perfreeit" target="_blank" rel="noopener noreferrer" className="group bg-gray-100 dark:bg-surface p-8 rounded-lg text-center transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:-translate-y-1 block h-full">
                          <BehanceIcon className="h-12 w-12 mx-auto text-emerald-600 dark:text-primary mb-4" />
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-text-primary mb-2">View my Behance</h2>
                          <p className="text-gray-600 dark:text-text-secondary mb-4">Explore a curated collection of my detailed case studies and projects.</p>
                          <span className="font-semibold text-emerald-600 dark:text-primary">Explore My Portfolio &rarr;</span>
                      </a>
                    </ScrollAnimator>

                    {/* Fiverr Card */}
                    <ScrollAnimator delay={300}>
                      <a href="https://www.fiverr.com/md_linkon1" target="_blank" rel="noopener noreferrer" className="group bg-gray-100 dark:bg-surface p-8 rounded-lg text-center transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:-translate-y-1 block h-full">
                          <FiverrIcon className="h-12 w-12 mx-auto text-emerald-600 dark:text-primary mb-4" />
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-text-primary mb-2">Hire me on Fiverr</h2>
                          <p className="text-gray-600 dark:text-text-secondary mb-4">Ready to get started? Order directly on Fiverr for a streamlined process.</p>
                          <span className="font-semibold text-emerald-600 dark:text-primary">View My Profile &rarr;</span>
                      </a>
                    </ScrollAnimator>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;