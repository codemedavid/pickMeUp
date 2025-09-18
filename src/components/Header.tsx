import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemsCount, onCartClick, onMenuClick }) => {
  return (
        <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b-2 border-orange-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={onMenuClick}
              className="flex items-center space-x-2 text-white hover:text-orange-500 transition-colors duration-200"
          >
            <img src="/logo.jpg" className="rounded-full w-10 h-10"/>
            <h1 className="text-2xl font-inter font-bold text-orange-600">JAMBayan</h1>
          </button>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#set-meals" className="text-white hover:text-orange-500 transition-colors duration-200 font-inter">🍽️ Set Meals</a>
            <a href="#pork" className="text-white hover:text-orange-500 transition-colors duration-200 font-inter">🐖 Pork</a>
            <a href="#chicken" className="text-white hover:text-orange-500 transition-colors duration-200 font-inter">🐓 Chicken</a>
            <a href="#beef" className="text-white hover:text-orange-500 transition-colors duration-200 font-inter">🐄 Beef</a>
            <a href="#fish" className="text-white hover:text-orange-500 transition-colors duration-200 font-inter">🐟 Fish</a>
          </nav>
          
          <div className="flex items-center space-x-2">
            <button 
              onClick={onCartClick}
              className="relative p-2 text-white hover:text-orange-500 hover:bg-orange-600/20 rounded-full transition-all duration-200"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce-gentle font-bold">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;