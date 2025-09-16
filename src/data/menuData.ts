import { MenuItem } from '../types';

export const menuData: MenuItem[] = [
  // Fried Rice Fiesta
  {
    id: 'fried-rice-fiesta',
    name: 'Fried Rice Fiesta',
    description: 'Delicious fried rice with your choice of toppings - perfectly seasoned and made fresh to order',
    basePrice: 59,
    category: 'fried-rice',
    popular: true,
    available: true,
    addOns: [
      { id: 'tj-jumbo-hotdog', name: 'TJ Jumbo Hotdog', price: 20, category: 'toppings' },
      { id: 'pork-siomai', name: 'Pork Siomai', price: 25, category: 'toppings' },
      { id: 'shark-siomai', name: 'Shark Siomai', price: 25, category: 'toppings' },
      { id: 'chicken-pops', name: 'Chicken Pops', price: 20, category: 'toppings' },
      { id: 'lumpiang-shanghai', name: 'Lumpiang Shanghai', price: 20, category: 'toppings' },
      { id: 'mini-chicken-fillet', name: 'Mini Chicken Fillet', price: 35, category: 'toppings' },
      { id: 'nuggets', name: 'Nuggets', price: 30, category: 'toppings' },
      { id: 'egg', name: 'Egg', price: 15, category: 'toppings' },
      { id: 'embotido', name: 'Embotido', price: 30, category: 'toppings' }
    ]
  },

  // Hotdog Sandwich
  {
    id: 'jumbo-tj-stick',
    name: 'Jumbo TJ on Stick',
    description: 'Jumbo TJ hotdog served on a stick - perfect for on-the-go snacking',
    basePrice: 25,
    category: 'hotdog-sandwich',
    available: true
  },
  {
    id: 'jumbo-tj-sandwich',
    name: 'Jumbo TJ Sandwich',
    description: 'Jumbo TJ hotdog in a soft, fresh bun - classic and satisfying',
    basePrice: 39,
    category: 'hotdog-sandwich',
    available: true
  },
  {
    id: 'jumbo-tj-cheesy-sandwich',
    name: 'Jumbo TJ Cheesy Sandwich with Lettuce',
    description: 'Jumbo TJ hotdog with melted cheese and fresh crispy lettuce - our signature creation!',
    basePrice: 59,
    category: 'hotdog-sandwich',
    popular: true,
    available: true
  },
  {
    id: 'hungarian-stick',
    name: 'Hungarian on Stick',
    description: 'Premium Hungarian hotdog on a stick - rich and flavorful',
    basePrice: 49,
    category: 'hotdog-sandwich',
    available: true
  },
  {
    id: 'hungarian-cheesy-sandwich',
    name: 'Hungarian Cheesy Sandwich',
    description: 'Premium Hungarian hotdog with melted cheese - a gourmet treat',
    basePrice: 70,
    category: 'hotdog-sandwich',
    popular: true,
    available: true
  },

  // Fries
  {
    id: 'fries-small',
    name: 'Fries - Small',
    description: 'Crispy golden fries - perfectly seasoned and hot',
    basePrice: 35,
    category: 'fries',
    available: true
  },
  {
    id: 'fries-medium',
    name: 'Fries - Medium',
    description: 'Crispy golden fries - perfectly seasoned and hot',
    basePrice: 50,
    category: 'fries',
    available: true
  },
  {
    id: 'fries-large',
    name: 'Fries - Large',
    description: 'Crispy golden fries - perfectly seasoned and hot',
    basePrice: 65,
    category: 'fries',
    available: true
  },
  {
    id: 'coated-fries-small',
    name: 'Crispy Coated Fries - Small',
    description: 'Extra crispy coated fries with special batter - extra crunchy!',
    basePrice: 45,
    category: 'fries',
    available: true
  },
  {
    id: 'coated-fries-medium',
    name: 'Crispy Coated Fries - Medium',
    description: 'Extra crispy coated fries with special batter - extra crunchy!',
    basePrice: 60,
    category: 'fries',
    available: true
  },
  {
    id: 'coated-fries-large',
    name: 'Crispy Coated Fries - Large',
    description: 'Extra crispy coated fries with special batter - extra crunchy!',
    basePrice: 80,
    category: 'fries',
    popular: true,
    available: true
  },

  // Chicken Poppers
  {
    id: 'chicken-poppers-small',
    name: 'Chicken Poppers - Small',
    description: 'Tender chicken bites - crispy on the outside, juicy inside',
    basePrice: 50,
    category: 'chicken-poppers',
    available: true
  },
  {
    id: 'chicken-poppers-medium',
    name: 'Chicken Poppers - Medium',
    description: 'Tender chicken bites - crispy on the outside, juicy inside',
    basePrice: 75,
    category: 'chicken-poppers',
    available: true
  },
  {
    id: 'chicken-poppers-large',
    name: 'Chicken Poppers - Large',
    description: 'Tender chicken bites - crispy on the outside, juicy inside',
    basePrice: 90,
    category: 'chicken-poppers',
    popular: true,
    available: true
  },
  {
    id: 'cheese-sticks',
    name: 'Cheese Sticks',
    description: 'Melted cheese in crispy coating - gooey and delicious!',
    basePrice: 30,
    category: 'chicken-poppers',
    available: true
  },

  // Pick-A-Waffle
  {
    id: 'waffle-tj-hotdog',
    name: 'TJ Hotdog Waffle',
    description: 'TJ hotdog wrapped in a warm, crispy waffle - unique and tasty!',
    basePrice: 30,
    category: 'waffle',
    available: true
  },
  {
    id: 'waffle-ham-cheese',
    name: 'Ham & Cheese Waffle',
    description: 'Ham and cheese wrapped in a warm, crispy waffle - savory and satisfying',
    basePrice: 30,
    category: 'waffle',
    available: true
  },
  {
    id: 'waffle-red-monggo',
    name: 'Red Monggo Waffle',
    description: 'Red monggo wrapped in a warm, crispy waffle - traditional Filipino flavor',
    basePrice: 30,
    category: 'waffle',
    available: true
  },
  {
    id: 'waffle-chocolate',
    name: 'Chocolate Waffle',
    description: 'Chocolate-filled waffle - sweet and indulgent treat',
    basePrice: 30,
    category: 'waffle',
    popular: true,
    available: true
  },
  {
    id: 'waffle-matcha',
    name: 'Matcha Waffle',
    description: 'Matcha-flavored waffle - earthy and aromatic',
    basePrice: 25,
    category: 'waffle',
    available: true
  },
  {
    id: 'waffle-cheese',
    name: 'Cheese Waffle',
    description: 'Cheese-filled waffle - simple and delicious',
    basePrice: 20,
    category: 'waffle',
    available: true
  },

  // Burger
  {
    id: 'tlc-burger',
    name: 'TLC Burger (w/ Tomato, Lettuce, & Cheese)',
    description: 'Classic burger with fresh tomato, crisp lettuce, and melted cheese - our signature burger!',
    basePrice: 65,
    category: 'burger',
    popular: true,
    available: true
  },
  {
    id: 'cheese-burger',
    name: 'Cheese Burger',
    description: 'Burger with melted cheese - simple and satisfying',
    basePrice: 59,
    category: 'burger',
    available: true
  },
  {
    id: 'burger-egg',
    name: 'Burger w/ Egg',
    description: 'Burger topped with a perfectly fried egg - protein-packed!',
    basePrice: 59,
    category: 'burger',
    available: true
  },
  {
    id: 'ham-egg',
    name: 'Ham & Egg',
    description: 'Ham and egg sandwich - classic breakfast favorite',
    basePrice: 55,
    category: 'burger',
    available: true
  },
  {
    id: 'ham-cheese',
    name: 'Ham & Cheese',
    description: 'Ham and cheese sandwich - timeless combination',
    basePrice: 55,
    category: 'burger',
    available: true
  },
  {
    id: 'just-burger',
    name: 'Just Burger',
    description: 'Simple burger patty in a fresh bun - pure and delicious',
    basePrice: 52,
    category: 'burger',
    available: true
  },
  {
    id: 'ham-sandwich',
    name: 'Ham Sandwich',
    description: 'Classic ham sandwich - simple and satisfying',
    basePrice: 45,
    category: 'burger',
    available: true
  },

  // Flavors (as separate items for easy selection)
  {
    id: 'flavor-cheese',
    name: 'Cheese Flavor',
    description: 'Rich and creamy cheese flavor to enhance your dish',
    basePrice: 0,
    category: 'flavors',
    available: true
  },
  {
    id: 'flavor-bbq',
    name: 'BBQ Flavor',
    description: 'Smoky and tangy BBQ flavor - perfect for any dish',
    basePrice: 0,
    category: 'flavors',
    available: true
  },
  {
    id: 'flavor-sour-cream',
    name: 'Sour Cream Flavor',
    description: 'Cool and tangy sour cream flavor - refreshing addition',
    basePrice: 0,
    category: 'flavors',
    available: true
  },
  {
    id: 'flavor-bbq-chili',
    name: 'BBQ Chili Flavor',
    description: 'Spicy BBQ chili flavor - adds heat and flavor!',
    basePrice: 0,
    category: 'flavors',
    available: true
  },

  // Add Ons
  {
    id: 'addon-cheesy-overload',
    name: 'Cheesy Overload',
    description: 'Extra cheese overload - for the ultimate cheese lovers!',
    basePrice: 20,
    category: 'add-ons',
    available: true
  },
  {
    id: 'addon-cheese-sauce',
    name: 'Cheese Sauce',
    description: 'Rich and creamy cheese sauce - perfect dipping companion',
    basePrice: 10,
    category: 'add-ons',
    available: true
  },
  {
    id: 'addon-bbq-sauce',
    name: 'BBQ Sauce',
    description: 'Smoky and tangy BBQ sauce - enhances any dish',
    basePrice: 10,
    category: 'add-ons',
    available: true
  }
];

export const categories = [
  { id: 'fried-rice', name: 'Fried Rice Fiesta', icon: '🍳' },
  { id: 'hotdog-sandwich', name: 'Hotdog Sandwich', icon: '🌭' },
  { id: 'fries', name: 'Fries', icon: '🍟' },
  { id: 'chicken-poppers', name: 'Chicken Poppers', icon: '🍗' },
  { id: 'waffle', name: 'Pick-A-Waffle', icon: '🧇' },
  { id: 'burger', name: 'Burger', icon: '🍔' },
  { id: 'flavors', name: 'Flavors', icon: '✨' },
  { id: 'add-ons', name: 'Add Ons', icon: '➕' }
];

export const addOnCategories = [
  { id: 'toppings', name: 'Toppings' },
  { id: 'flavors', name: 'Flavors' },
  { id: 'add-ons', name: 'Add Ons' }
];