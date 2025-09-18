import React from 'react';

interface HeroProps {
  onExploreMenu?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreMenu }) => {
  const handleExploreMenu = () => {
    if (onExploreMenu) {
      onExploreMenu();
    } else {
      // Fallback: scroll to menu section
      const menuSection = document.getElementById('menu-section');
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
        <section className="relative bg-gradient-orange py-20 px-4 filipino-pattern">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-inter font-bold text-white mb-6 animate-fade-in">
         Authentic Filipino
          <span className="block text-yellow-300 mt-2">JAMBayan</span>
        </h1>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto animate-slide-up font-inter">
              Experience the rich flavors of authentic Filipino cuisine! From hearty set meals to traditional favorites like Sinigang, Adobo, and Bulalo, 
              every dish is prepared with love and traditional Filipino recipes.
            </p>
        <div className="flex justify-center">
          <button 
            onClick={handleExploreMenu}
            className="btn-primary px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-inter text-lg"
          >
            Explore Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;