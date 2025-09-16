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
    <section className="relative bg-blackboard py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-blackboard font-bold text-chalk-bold mb-6 animate-fade-in">
         Fresh & Energizing
          <span className="block text-accent-green mt-2">Pick-Me-Up</span>
        </h1>
        <p className="text-xl text-chalk mb-8 max-w-2xl mx-auto animate-slide-up font-chalk">
          Delicious Fried Rice, Hotdog Sandwiches, Crispy Fries & More!
        </p>
        <div className="flex justify-center">
          <button 
            onClick={handleExploreMenu}
            className="btn-chalk px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-chalk text-lg"
          >
            Explore Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;