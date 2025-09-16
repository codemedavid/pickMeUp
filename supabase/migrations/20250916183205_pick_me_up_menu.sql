/*
  # Pick-Me-Up Cafe Menu Migration
  
  This migration replaces the old Nom Sum menu with the new Pick-Me-Up cafe menu.
  
  1. Clear existing menu data
  2. Add Pick-Me-Up categories
  3. Add all Pick-Me-Up menu items with variations and add-ons
  
  Categories:
    - Fried Rice Fiesta 🍳
    - Hotdog Sandwich 🌭  
    - Fries 🍟
    - Chicken Poppers 🍗
    - Pick-A-Waffle 🧇
    - Burger 🍔
    - Flavors ✨
    - Add Ons ➕
*/

-- Clear existing menu data
DELETE FROM add_ons;
DELETE FROM variations;
DELETE FROM menu_items;
DELETE FROM categories WHERE id IN ('dim-sum', 'noodles', 'rice-dishes', 'beverages');

-- Insert Pick-Me-Up categories
INSERT INTO categories (id, name, icon, sort_order, active) VALUES
  ('fried-rice', 'Fried Rice Fiesta', '🍳', 1, true),
  ('hotdog-sandwich', 'Hotdog Sandwich', '🌭', 2, true),
  ('fries', 'Fries', '🍟', 3, true),
  ('chicken-poppers', 'Chicken Poppers', '🍗', 4, true),
  ('waffle', 'Pick-A-Waffle', '🧇', 5, true),
  ('burger', 'Burger', '🍔', 6, true),
  ('flavors', 'Flavors', '✨', 7, true),
  ('add-ons', 'Add Ons', '➕', 8, true)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  icon = EXCLUDED.icon,
  sort_order = EXCLUDED.sort_order,
  active = EXCLUDED.active;

-- Insert Fried Rice Fiesta
INSERT INTO menu_items (name, description, base_price, category, popular, available, image_url) VALUES
  ('Fried Rice Fiesta', 'Delicious fried rice with your choice of toppings - perfectly seasoned and made fresh to order', 59, 'fried-rice', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800');

-- Insert Hotdog Sandwiches
INSERT INTO menu_items (name, description, base_price, category, popular, available, image_url) VALUES
  ('Jumbo TJ on Stick', 'Jumbo TJ hotdog served on a stick - perfect for on-the-go snacking', 25, 'hotdog-sandwich', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('Jumbo TJ Sandwich', 'Jumbo TJ hotdog in a soft, fresh bun - classic and satisfying', 39, 'hotdog-sandwich', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('Jumbo TJ Cheesy Sandwich with Lettuce', 'Jumbo TJ hotdog with melted cheese and fresh crispy lettuce - our signature creation!', 59, 'hotdog-sandwich', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('Hungarian on Stick', 'Premium Hungarian hotdog on a stick - rich and flavorful', 49, 'hotdog-sandwich', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('Hungarian Cheesy Sandwich', 'Premium Hungarian hotdog with melted cheese - a gourmet treat', 70, 'hotdog-sandwich', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800');

-- Insert Fries
INSERT INTO menu_items (name, description, base_price, category, popular, available, image_url) VALUES
  ('Fries - Small', 'Crispy golden fries - perfectly seasoned and hot', 35, 'fries', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('Fries - Medium', 'Crispy golden fries - perfectly seasoned and hot', 50, 'fries', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('Fries - Large', 'Crispy golden fries - perfectly seasoned and hot', 65, 'fries', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('Crispy Coated Fries - Small', 'Extra crispy coated fries with special batter - extra crunchy!', 45, 'fries', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('Crispy Coated Fries - Medium', 'Extra crispy coated fries with special batter - extra crunchy!', 60, 'fries', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('Crispy Coated Fries - Large', 'Extra crispy coated fries with special batter - extra crunchy!', 80, 'fries', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800');

-- Insert Chicken Poppers
INSERT INTO menu_items (name, description, base_price, category, popular, available, image_url) VALUES
  ('Chicken Poppers - Small', 'Tender chicken bites - crispy on the outside, juicy inside', 50, 'chicken-poppers', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('Chicken Poppers - Medium', 'Tender chicken bites - crispy on the outside, juicy inside', 75, 'chicken-poppers', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('Chicken Poppers - Large', 'Tender chicken bites - crispy on the outside, juicy inside', 90, 'chicken-poppers', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('Cheese Sticks', 'Melted cheese in crispy coating - gooey and delicious!', 30, 'chicken-poppers', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800');

-- Insert Pick-A-Waffle
INSERT INTO menu_items (name, description, base_price, category, popular, available, image_url) VALUES
  ('TJ Hotdog Waffle', 'TJ hotdog wrapped in a warm, crispy waffle - unique and tasty!', 30, 'waffle', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('Ham & Cheese Waffle', 'Ham and cheese wrapped in a warm, crispy waffle - savory and satisfying', 30, 'waffle', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('Red Monggo Waffle', 'Red monggo wrapped in a warm, crispy waffle - traditional Filipino flavor', 30, 'waffle', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('Chocolate Waffle', 'Chocolate-filled waffle - sweet and indulgent treat', 30, 'waffle', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('Matcha Waffle', 'Matcha-flavored waffle - earthy and aromatic', 25, 'waffle', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('Cheese Waffle', 'Cheese-filled waffle - simple and delicious', 20, 'waffle', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800');

-- Insert Burgers
INSERT INTO menu_items (name, description, base_price, category, popular, available, image_url) VALUES
  ('TLC Burger (w/ Tomato, Lettuce, & Cheese)', 'Classic burger with fresh tomato, crisp lettuce, and melted cheese - our signature burger!', 65, 'burger', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('Cheese Burger', 'Burger with melted cheese - simple and satisfying', 59, 'burger', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('Burger w/ Egg', 'Burger topped with a perfectly fried egg - protein-packed!', 59, 'burger', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('Ham & Egg', 'Ham and egg sandwich - classic breakfast favorite', 55, 'burger', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('Ham & Cheese', 'Ham and cheese sandwich - timeless combination', 55, 'burger', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('Just Burger', 'Simple burger patty in a fresh bun - pure and delicious', 52, 'burger', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('Ham Sandwich', 'Classic ham sandwich - simple and satisfying', 45, 'burger', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800');

-- Insert Flavors
INSERT INTO menu_items (name, description, base_price, category, popular, available, image_url) VALUES
  ('Cheese Flavor', 'Rich and creamy cheese flavor to enhance your dish', 0, 'flavors', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('BBQ Flavor', 'Smoky and tangy BBQ flavor - perfect for any dish', 0, 'flavors', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('Sour Cream Flavor', 'Cool and tangy sour cream flavor - refreshing addition', 0, 'flavors', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('BBQ Chili Flavor', 'Spicy BBQ chili flavor - adds heat and flavor!', 0, 'flavors', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800');

-- Insert Add-ons
INSERT INTO menu_items (name, description, base_price, category, popular, available, image_url) VALUES
  ('Cheesy Overload', 'Extra cheese overload - for the ultimate cheese lovers!', 20, 'add-ons', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('Cheese Sauce', 'Rich and creamy cheese sauce - perfect dipping companion', 10, 'add-ons', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('BBQ Sauce', 'Smoky and tangy BBQ sauce - enhances any dish', 10, 'add-ons', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800');

-- Add toppings for Fried Rice Fiesta
INSERT INTO add_ons (menu_item_id, name, price, category) VALUES
  ((SELECT id FROM menu_items WHERE name = 'Fried Rice Fiesta'), 'TJ Jumbo Hotdog', 20, 'toppings'),
  ((SELECT id FROM menu_items WHERE name = 'Fried Rice Fiesta'), 'Pork Siomai', 25, 'toppings'),
  ((SELECT id FROM menu_items WHERE name = 'Fried Rice Fiesta'), 'Shark Siomai', 25, 'toppings'),
  ((SELECT id FROM menu_items WHERE name = 'Fried Rice Fiesta'), 'Chicken Pops', 20, 'toppings'),
  ((SELECT id FROM menu_items WHERE name = 'Fried Rice Fiesta'), 'Lumpiang Shanghai', 20, 'toppings'),
  ((SELECT id FROM menu_items WHERE name = 'Fried Rice Fiesta'), 'Mini Chicken Fillet', 35, 'toppings'),
  ((SELECT id FROM menu_items WHERE name = 'Fried Rice Fiesta'), 'Nuggets', 30, 'toppings'),
  ((SELECT id FROM menu_items WHERE name = 'Fried Rice Fiesta'), 'Egg', 15, 'toppings'),
  ((SELECT id FROM menu_items WHERE name = 'Fried Rice Fiesta'), 'Embotido', 30, 'toppings');
