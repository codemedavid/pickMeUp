import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemsCount, onCartClick, onMenuClick }) => {
  return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b-2 border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={onMenuClick}
              className="flex items-center space-x-2 text-black hover:text-blue-600 transition-colors duration-200"
          >
            <img src="/logo.jpg" className="rounded-full w-10 h-10"/>
            <h1 className="text-2xl font-inter font-bold text-blue-600">Pick-Me-Up</h1>
          </button>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#fried-rice" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-inter">🍳 Fried Rice</a>
            <a href="#hotdog-sandwich" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-inter">🌭 Hotdog</a>
            <a href="#fries" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-inter">🍟 Fries</a>
            <a href="#burger" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-inter">🍔 Burger</a>
            <a href="#waffle" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-inter">🧇 Waffle</a>
          </nav>
          
          <div className="flex items-center space-x-2">
            <button 
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-full transition-all duration-200"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce-gentle font-bold">
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