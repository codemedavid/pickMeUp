export interface MenuItem {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  category: string;
  image?: string;
  available: boolean;
  popular?: boolean;
  variations?: Variation[];
  addOns?: AddOn[];
}

export interface Variation {
  id: string;
  name: string;
  price: number;
}

export interface AddOn {
  id: string;
  name: string;
  price: number;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { id: 'set-meals', name: '🍽️ JAMBayan Set Meals', icon: '🍽️' },
  { id: 'pork', name: '🐖 Pork', icon: '🐖' },
  { id: 'chicken', name: '🐓 Chicken', icon: '🐓' },
  { id: 'beef', name: '🐄 Beef', icon: '🐄' },
  { id: 'fish', name: '🐟 Fish', icon: '🐟' },
  { id: 'vegetables', name: '🥬 Vegetables', icon: '🥬' }
];

export const menuData: MenuItem[] = [
  // Set Meals
  {
    id: 'set-1',
    name: 'JAMBayan Set Meal 1',
    description: 'Good for 3-5 Persons. Includes Platter Rice, Whole Fried Chicken, Ensaladang Talong, Pancit Bihon, and Pitcher Iced Tea.',
    basePrice: 999,
    category: 'set-meals',
    available: true,
    popular: true
  },
  {
    id: 'set-2',
    name: 'JAMBayan Set Meal 2',
    description: 'Good for 6-8 Persons. Includes 2 Platter Rice, Sinigang na Baboy, Pakbet, Pritong Tilapia, Pancit Canton, and 2 Pitcher Iced Tea.',
    basePrice: 1499,
    category: 'set-meals',
    available: true,
    popular: true
  },
  {
    id: 'set-3',
    name: 'JAMBayan Set Meal 3',
    description: 'Good for 10-15 Persons. Includes 3 Platter Rice, Bulalo, Chopsuey, BBQ Liempo, Chicken Curry, Mix Pancit, and 3 Pitcher Iced Tea.',
    basePrice: 2299,
    category: 'set-meals',
    available: true,
    popular: true
  },

  // Pork Dishes
  {
    id: 'pork-sinigang',
    name: 'Sinigang na Baboy',
    description: 'Traditional Filipino sour soup with pork, vegetables, and tamarind broth. Served with rice.',
    basePrice: 280,
    category: 'pork',
    available: true,
    popular: true
  },
  {
    id: 'pork-adobo',
    name: 'Pork Adobo',
    description: 'Classic Filipino dish with tender pork marinated in soy sauce, vinegar, garlic, and bay leaves.',
    basePrice: 280,
    category: 'pork',
    available: true,
    popular: true
  },
  {
    id: 'pork-bicol-express',
    name: 'Bicol Express',
    description: 'Spicy pork dish with coconut milk, chilies, and shrimp paste. A Bicol region specialty.',
    basePrice: 280,
    category: 'pork',
    available: true,
    popular: false
  },
  {
    id: 'pork-nilaga',
    name: 'Pork Nilaga',
    description: 'Clear soup with tender pork, potatoes, cabbage, and corn. Comfort food at its finest.',
    basePrice: 280,
    category: 'pork',
    available: true,
    popular: false
  },
  {
    id: 'pork-caldereta',
    name: 'Pork Caldereta',
    description: 'Rich tomato-based stew with pork, vegetables, and liver spread. A festive Filipino favorite.',
    basePrice: 280,
    category: 'pork',
    available: true,
    popular: false
  },

  // Chicken Dishes
  {
    id: 'chicken-tinola',
    name: 'Chicken Tinola',
    description: 'Healthy chicken soup with ginger, papaya, and moringa leaves. Traditional Filipino comfort food.',
    basePrice: 280,
    category: 'chicken',
    available: true,
    popular: true
  },
  {
    id: 'chicken-adobo',
    name: 'Chicken Adobo',
    description: 'Classic Filipino chicken marinated in soy sauce, vinegar, garlic, and bay leaves. Perfect with rice.',
    basePrice: 280,
    category: 'chicken',
    available: true,
    popular: true
  },
  {
    id: 'chicken-fried',
    name: 'Fried Chicken',
    description: 'Crispy golden fried chicken with secret Filipino spices. Served with your choice of dipping sauce.',
    basePrice: 350,
    category: 'chicken',
    available: true,
    popular: true
  },
  {
    id: 'chicken-curry',
    name: 'Chicken Curry',
    description: 'Creamy coconut curry with tender chicken, potatoes, and carrots. Mild and flavorful.',
    basePrice: 280,
    category: 'chicken',
    available: true,
    popular: false
  },
  {
    id: 'chicken-sweet-sour',
    name: "Chicken Sweet n' Sour",
    description: 'Tender chicken in sweet and tangy sauce with bell peppers and pineapple. A crowd favorite.',
    basePrice: 280,
    category: 'chicken',
    available: true,
    popular: false
  },

  // Beef Dishes
  {
    id: 'beef-bulalo',
    name: 'Bulalo',
    description: 'Rich beef bone marrow soup with tender meat and vegetables. A Batangas specialty.',
    basePrice: 450,
    category: 'beef',
    available: true,
    popular: true
  },
  {
    id: 'beef-steak',
    name: 'Beef Steak',
    description: 'Tender beef strips in savory soy sauce and calamansi marinade. Served with onions.',
    basePrice: 400,
    category: 'beef',
    available: true,
    popular: true
  },
  {
    id: 'beef-nilaga',
    name: 'Beef Nilaga',
    description: 'Clear soup with tender beef, potatoes, cabbage, and corn. Simple yet satisfying.',
    basePrice: 400,
    category: 'beef',
    available: true,
    popular: false
  },

  // Fish Dishes
  {
    id: 'fish-inihaw-tilapia',
    name: 'Inihaw na Tilapia',
    description: 'Grilled tilapia with garlic, ginger, and soy sauce. Fresh and healthy Filipino style.',
    basePrice: 250,
    category: 'fish',
    available: true,
    popular: true
  },
  {
    id: 'fish-sinigang-bangus',
    name: 'Sinigang na Bangus',
    description: 'Sour soup with milkfish, vegetables, and tamarind broth. A seafood favorite.',
    basePrice: 300,
    category: 'fish',
    available: true,
    popular: false
  },
  {
    id: 'fish-fried-tilapia',
    name: 'Fried Tilapia',
    description: 'Crispy fried tilapia served with vinegar dipping sauce and fresh tomatoes.',
    basePrice: 250,
    category: 'fish',
    available: true,
    popular: false
  },

  // Vegetable Dishes
  {
    id: 'veggie-chopsuey',
    name: 'Chopsuey',
    description: 'Mixed vegetables in savory sauce with pork and shrimp. Colorful and nutritious.',
    basePrice: 300,
    category: 'vegetables',
    available: true,
    popular: true
  },
  {
    id: 'veggie-pakbet',
    name: 'Pakbet',
    description: 'Traditional Ilocano vegetable dish with bitter melon, eggplant, okra, and shrimp paste.',
    basePrice: 300,
    category: 'vegetables',
    available: true,
    popular: false
  },
  {
    id: 'veggie-ensaladang-talong',
    name: 'Ensaladang Talong',
    description: 'Grilled eggplant salad with tomatoes, onions, and vinegar dressing. Fresh and tangy.',
    basePrice: 250,
    category: 'vegetables',
    available: true,
    popular: false
  }
];

export const addOns: AddOn[] = [
  { id: 'extra-rice', name: 'Extra Rice', price: 25, category: 'Rice' },
  { id: 'iced-tea', name: 'Iced Tea', price: 35, category: 'Beverages' },
  { id: 'coke', name: 'Coke', price: 25, category: 'Beverages' },
  { id: 'sprite', name: 'Sprite', price: 25, category: 'Beverages' },
  { id: 'water', name: 'Bottled Water', price: 15, category: 'Beverages' }
];

export const addOnCategories = [
  { id: 'Rice', name: 'Rice' },
  { id: 'Beverages', name: 'Beverages' }
];