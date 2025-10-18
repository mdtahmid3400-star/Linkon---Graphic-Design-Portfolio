import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { Page } from './types';
import { XIcon } from './components/icons/Icons';

// Modal component for displaying full-size images
const ImageModal: React.FC<{ imageUrl: string; onClose: () => void }> = ({ imageUrl, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in-up"
      style={{ animationDuration: '0.3s' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <img 
        src={imageUrl} 
        alt="Full size project view" 
        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking on the image
      />
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 text-white hover:text-primary transition-colors duration-300"
        aria-label="Close image view"
      >
        <XIcon />
      </button>
    </div>
  );
};


const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isExiting, setIsExiting] = useState(false);
  const [nextPage, setNextPage] = useState<Page | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);

  const navigateTo = (page: Page) => {
    if (page !== currentPage) {
      setIsExiting(true);
      setNextPage(page);
    }
  };
  
  useEffect(() => {
    if (isExiting) {
      const timer = setTimeout(() => {
        if(nextPage) {
          setCurrentPage(nextPage);
        }
        setIsExiting(false);
        setNextPage(null);
        window.scrollTo(0, 0);
      }, 300); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [isExiting, nextPage, currentPage]);

  const openImageModal = (imageUrl: string) => {
    setSelectedImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    setSelectedImageUrl(null);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage navigateTo={navigateTo} onViewImage={openImageModal} />;
      case 'work':
        return <WorkPage onViewImage={openImageModal} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage navigateTo={navigateTo} onViewImage={openImageModal} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-background text-gray-900 dark:text-text-primary">
      <Header currentPage={currentPage} navigateTo={navigateTo} />
      <main className={`flex-grow transition-opacity duration-300 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
        {renderPage()}
      </main>
      <Footer navigateTo={navigateTo} />
      {isModalOpen && selectedImageUrl && (
        <ImageModal imageUrl={selectedImageUrl} onClose={closeImageModal} />
      )}
    </div>
  );
};

export default App;
