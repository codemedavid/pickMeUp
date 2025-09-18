import React, { useState } from 'react';
import { Plus, Minus, X, ShoppingCart } from 'lucide-react';
import { MenuItem, Variation, AddOn } from '../types';

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem, quantity?: number, variation?: Variation, addOns?: AddOn[]) => void;
  quantity: number;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ 
  item, 
  onAddToCart, 
  quantity, 
  onUpdateQuantity 
}) => {
  const [showCustomization, setShowCustomization] = useState(false);
  const [selectedVariation, setSelectedVariation] = useState<Variation | undefined>(
    item.variations?.[0]
  );
  const [selectedAddOns, setSelectedAddOns] = useState<(AddOn & { quantity: number })[]>([]);

  const calculatePrice = () => {
    let price = item.basePrice;
    if (selectedVariation) {
      price = item.basePrice + selectedVariation.price;
    }
    selectedAddOns.forEach(addOn => {
      price += addOn.price * addOn.quantity;
    });
    return price;
  };

  const handleAddToCart = () => {
    if (item.variations?.length || item.addOns?.length) {
      setShowCustomization(true);
    } else {
      onAddToCart(item, 1);
    }
  };

  const handleCustomizedAddToCart = () => {
    // Convert selectedAddOns back to regular AddOn array for cart
    const addOnsForCart: AddOn[] = selectedAddOns.flatMap(addOn => 
      Array(addOn.quantity).fill({ ...addOn, quantity: undefined })
    );
    onAddToCart(item, 1, selectedVariation, addOnsForCart);
    setShowCustomization(false);
    setSelectedAddOns([]);
  };

  const handleIncrement = () => {
    onUpdateQuantity(item.id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      onUpdateQuantity(item.id, quantity - 1);
    }
  };

  const updateAddOnQuantity = (addOn: AddOn, quantity: number) => {
    setSelectedAddOns(prev => {
      const existingIndex = prev.findIndex(a => a.id === addOn.id);
      
      if (quantity === 0) {
        // Remove add-on if quantity is 0
        return prev.filter(a => a.id !== addOn.id);
      }
      
      if (existingIndex >= 0) {
        // Update existing add-on quantity
        const updated = [...prev];
        updated[existingIndex] = { ...updated[existingIndex], quantity };
        return updated;
      } else {
        // Add new add-on with quantity
        return [...prev, { ...addOn, quantity }];
      }
    });
  };

  const groupedAddOns = item.addOns?.reduce((groups, addOn) => {
    const category = addOn.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(addOn);
    return groups;
  }, {} as Record<string, AddOn[]>);

  return (
    <>
      <div className={`card-filipino rounded-xl hover:shadow-lg transition-all duration-300 overflow-hidden group animate-scale-in ${!item.available ? 'opacity-60' : ''}`}>
        {item.popular && (
          <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full absolute top-4 right-4 z-10 font-inter">
            Popular
          </div>
        )}
        
        {!item.available && (
          <div className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full absolute top-4 left-4 z-10 font-inter">
            Unavailable
          </div>
        )}
        
        <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-gray-800 to-gray-900 relative">
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover transition-opacity duration-300"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
              onLoad={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
              style={{ opacity: 0 }}
            />
          ) : null}
          <div className={`absolute inset-0 flex items-center justify-center ${item.image ? 'hidden' : ''}`}>
            <div className="text-6xl opacity-30">☕</div>
          </div>
        </div>
        
        <div className="p-6">
            <h4 className="text-xl font-inter font-bold text-white mb-2">{item.name}</h4>
            <p className={`text-sm mb-4 leading-relaxed font-inter ${!item.available ? 'text-gray-400' : 'text-gray-300'}`}>
            {!item.available ? 'Currently Unavailable' : item.description}
          </p>
          
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-lg font-bold text-white">
                ₱{item.basePrice}
                {item.variations && item.variations.length > 0 && (
                  <span className="text-sm text-gray-400 ml-1 font-inter">starting</span>
                )}
              </span>
              {item.variations && item.variations.length > 0 && (
                <div className="text-xs text-gray-400 mt-1 font-inter">
                  {item.variations.length} size{item.variations.length > 1 ? 's' : ''} available
                </div>
              )}
            </div>
            
            {!item.available ? (
              <button
                disabled
                  className="bg-gray-400 text-gray-600 px-6 py-2 rounded-full cursor-not-allowed font-inter"
              >
                Unavailable
              </button>
            ) : quantity === 0 ? (
              <button
                onClick={handleAddToCart}
                className="btn-primary px-6 py-2 rounded-full transition-all duration-200 transform hover:scale-105 font-inter"
              >
                {item.variations?.length || item.addOns?.length ? 'Customize' : 'Add to Cart'}
              </button>
            ) : (
              <div className="flex items-center space-x-3 bg-gray-800 rounded-full p-1">
                <button
                  onClick={handleDecrement}
                  className="p-2 hover:bg-gray-700 rounded-full transition-colors duration-200 text-white"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="font-bold text-white min-w-[24px] text-center font-inter">{quantity}</span>
                <button
                  onClick={handleIncrement}
                  className="p-2 hover:bg-gray-700 rounded-full transition-colors duration-200 text-white"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>

          {item.addOns && item.addOns.length > 0 && (
              <div className="text-xs text-gray-400 font-inter">
              {item.addOns.length} add-on{item.addOns.length > 1 ? 's' : ''} available
            </div>
          )}
        </div>
      </div>

      {/* Customization Modal */}
      {showCustomization && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-green-200 p-6 flex items-center justify-between">
              <h3 className="text-xl font-noto font-medium text-black">Customize {item.name}</h3>
              <button
                onClick={() => setShowCustomization(false)}
                className="p-2 hover:bg-green-100 rounded-full transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6">
              {/* Size Variations */}
              {item.variations && item.variations.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-medium text-black mb-3">Choose Size</h4>
                  <div className="space-y-2">
                    {item.variations.map((variation) => (
                      <label
                        key={variation.id}
                        className="flex items-center justify-between p-3 border border-green-300 rounded-lg hover:bg-green-50 cursor-pointer"
                      >
                        <div className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="variation"
                            checked={selectedVariation?.id === variation.id}
                            onChange={() => setSelectedVariation(variation)}
                            className="text-green-600 focus:ring-green-500"
                          />
                          <span className="font-medium text-black">{variation.name}</span>
                        </div>
                        <span className="text-black font-medium">
                          ₱{item.basePrice + variation.price}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Add-ons */}
              {groupedAddOns && Object.keys(groupedAddOns).length > 0 && (
                <div className="mb-6">
                  <h4 className="font-medium text-black mb-3">Add-ons</h4>
                  {Object.entries(groupedAddOns).map(([category, addOns]) => (
                    <div key={category} className="mb-4">
                      <h5 className="text-sm font-medium text-gray-700 mb-2 capitalize">
                        {category.replace('-', ' ')}
                      </h5>
                      <div className="space-y-2">
                        {addOns.map((addOn) => (
                          <div
                            key={addOn.id}
                            className="flex items-center justify-between p-3 border border-green-300 rounded-lg hover:bg-green-50"
                          >
                            <div className="flex-1">
                              <span className="font-medium text-black">{addOn.name}</span>
                              <div className="text-sm text-gray-600">
                                {addOn.price > 0 ? `₱${addOn.price} each` : 'Free'}
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              {selectedAddOns.find(a => a.id === addOn.id) ? (
                                <div className="flex items-center space-x-2 bg-green-100 rounded-full p-1">
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const current = selectedAddOns.find(a => a.id === addOn.id);
                                      updateAddOnQuantity(addOn, (current?.quantity || 1) - 1);
                                    }}
                                    className="p-1 hover:bg-green-200 rounded-full transition-colors duration-200"
                                  >
                                    <Minus className="h-3 w-3" />
                                  </button>
                                  <span className="font-medium text-black min-w-[20px] text-center text-sm">
                                    {selectedAddOns.find(a => a.id === addOn.id)?.quantity || 0}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const current = selectedAddOns.find(a => a.id === addOn.id);
                                      updateAddOnQuantity(addOn, (current?.quantity || 0) + 1);
                                    }}
                                    className="p-1 hover:bg-green-200 rounded-full transition-colors duration-200"
                                  >
                                    <Plus className="h-3 w-3" />
                                  </button>
                                </div>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => updateAddOnQuantity(addOn, 1)}
                                  className="flex items-center space-x-1 px-3 py-1 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-200 text-sm"
                                >
                                  <Plus className="h-3 w-3" />
                                  <span>Add</span>
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Price Summary */}
              <div className="border-t border-green-200 pt-4 mb-6">
                <div className="flex items-center justify-between text-xl font-noto font-semibold text-black">
                  <span>Total:</span>
                  <span>₱{calculatePrice()}</span>
                </div>
              </div>

              <button
                onClick={handleCustomizedAddToCart}
                className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors duration-200 font-medium flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="h-4 w-4" />
                <span>Add to Cart - ₱{calculatePrice()}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuItemCard;