import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-4 p-2 bg-teal-700/20 text-white rounded-full shadow-lg hover:bg-teal-600/20 transition-opacity ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transition: 'opacity 0.3s' }}
    >
      ☝️
    </button>
  );
};

export default ScrollToTopButton;
