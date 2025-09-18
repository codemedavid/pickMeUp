-- Migration: JAMBayan Filipino Cuisine Menu Update
-- Description: Update menu with authentic Filipino cuisine items and new categories

-- Clear existing menu data
DELETE FROM add_ons;
DELETE FROM variations;
DELETE FROM menu_items;

-- Check if categories table exists and clear it if it does
DO $$
BEGIN
    IF EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'categories') THEN
        DELETE FROM categories;
    END IF;
END $$;

-- Insert categories first (only if categories table exists)
DO $$
BEGIN
    IF EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'categories') THEN
        INSERT INTO categories (id, name, icon) VALUES
        (gen_random_uuid(), 'Set Meals', '🍽️'),
        (gen_random_uuid(), 'Pork', '🐖'),
        (gen_random_uuid(), 'Chicken', '🐓'),
        (gen_random_uuid(), 'Beef', '🐄'),
        (gen_random_uuid(), 'Fish', '🐟'),
        (gen_random_uuid(), 'Vegetables', '🥬');
    END IF;
END $$;

-- Insert menu items with category references (handle case where categories table might not exist)
DO $$
BEGIN
    IF EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'categories') THEN
        -- Insert menu items with category UUID references
        INSERT INTO menu_items (id, name, description, base_price, category, available, popular) VALUES
-- Set Meals
(gen_random_uuid(), 'JAMBayan Set Meal 1', 'Good for 3-5 Persons. Includes Platter Rice, Whole Fried Chicken, Ensaladang Talong, Pancit Bihon, and Pitcher Iced Tea.', 999.00, (SELECT id FROM categories WHERE name = 'Set Meals'), true, true),
(gen_random_uuid(), 'JAMBayan Set Meal 2', 'Good for 6-8 Persons. Includes 2 Platter Rice, Sinigang na Baboy, Pakbet, Pritong Tilapia, Pancit Canton, and 2 Pitcher Iced Tea.', 1499.00, (SELECT id FROM categories WHERE name = 'Set Meals'), true, true),
(gen_random_uuid(), 'JAMBayan Set Meal 3', 'Good for 10-15 Persons. Includes 3 Platter Rice, Bulalo, Chopsuey, BBQ Liempo, Chicken Curry, Mix Pancit, and 3 Pitcher Iced Tea.', 2299.00, (SELECT id FROM categories WHERE name = 'Set Meals'), true, true),

-- Pork Dishes
(gen_random_uuid(), 'Sinigang na Baboy', 'Traditional Filipino sour soup with pork, vegetables, and tamarind broth. Served with rice.', 280.00, (SELECT id FROM categories WHERE name = 'Pork'), true, true),
(gen_random_uuid(), 'Pork Adobo', 'Classic Filipino dish with tender pork marinated in soy sauce, vinegar, garlic, and bay leaves.', 280.00, (SELECT id FROM categories WHERE name = 'Pork'), true, true),
(gen_random_uuid(), 'Bicol Express', 'Spicy pork dish with coconut milk, chilies, and shrimp paste. A Bicol region specialty.', 280.00, (SELECT id FROM categories WHERE name = 'Pork'), true, false),
(gen_random_uuid(), 'Pork Nilaga', 'Clear soup with tender pork, potatoes, cabbage, and corn. Comfort food at its finest.', 280.00, (SELECT id FROM categories WHERE name = 'Pork'), true, false),
(gen_random_uuid(), 'Pork Caldereta', 'Rich tomato-based stew with pork, vegetables, and liver spread. A festive Filipino favorite.', 280.00, (SELECT id FROM categories WHERE name = 'Pork'), true, false),

-- Chicken Dishes
(gen_random_uuid(), 'Chicken Tinola', 'Healthy chicken soup with ginger, papaya, and moringa leaves. Traditional Filipino comfort food.', 280.00, (SELECT id FROM categories WHERE name = 'Chicken'), true, true),
(gen_random_uuid(), 'Chicken Adobo', 'Classic Filipino chicken marinated in soy sauce, vinegar, garlic, and bay leaves. Perfect with rice.', 280.00, (SELECT id FROM categories WHERE name = 'Chicken'), true, true),
(gen_random_uuid(), 'Fried Chicken', 'Crispy golden fried chicken with secret Filipino spices. Served with your choice of dipping sauce.', 350.00, (SELECT id FROM categories WHERE name = 'Chicken'), true, true),
(gen_random_uuid(), 'Chicken Curry', 'Creamy coconut curry with tender chicken, potatoes, and carrots. Mild and flavorful.', 280.00, (SELECT id FROM categories WHERE name = 'Chicken'), true, false),
(gen_random_uuid(), 'Chicken Sweet n'' Sour', 'Tender chicken in sweet and tangy sauce with bell peppers and pineapple. A crowd favorite.', 280.00, (SELECT id FROM categories WHERE name = 'Chicken'), true, false),

-- Beef Dishes
(gen_random_uuid(), 'Bulalo', 'Rich beef bone marrow soup with tender meat and vegetables. A Batangas specialty.', 450.00, (SELECT id FROM categories WHERE name = 'Beef'), true, true),
(gen_random_uuid(), 'Beef Steak', 'Tender beef strips in savory soy sauce and calamansi marinade. Served with onions.', 400.00, (SELECT id FROM categories WHERE name = 'Beef'), true, true),
(gen_random_uuid(), 'Beef Nilaga', 'Clear soup with tender beef, potatoes, cabbage, and corn. Simple yet satisfying.', 400.00, (SELECT id FROM categories WHERE name = 'Beef'), true, false),

-- Fish Dishes
(gen_random_uuid(), 'Inihaw na Tilapia', 'Grilled tilapia with garlic, ginger, and soy sauce. Fresh and healthy Filipino style.', 250.00, (SELECT id FROM categories WHERE name = 'Fish'), true, true),
(gen_random_uuid(), 'Sinigang na Bangus', 'Sour soup with milkfish, vegetables, and tamarind broth. A seafood favorite.', 300.00, (SELECT id FROM categories WHERE name = 'Fish'), true, false),
(gen_random_uuid(), 'Fried Tilapia', 'Crispy fried tilapia served with vinegar dipping sauce and fresh tomatoes.', 250.00, (SELECT id FROM categories WHERE name = 'Fish'), true, false),

-- Vegetable Dishes
(gen_random_uuid(), 'Chopsuey', 'Mixed vegetables in savory sauce with pork and shrimp. Colorful and nutritious.', 300.00, (SELECT id FROM categories WHERE name = 'Vegetables'), true, true),
(gen_random_uuid(), 'Pakbet', 'Traditional Ilocano vegetable dish with bitter melon, eggplant, okra, and shrimp paste.', 300.00, (SELECT id FROM categories WHERE name = 'Vegetables'), true, false),
(gen_random_uuid(), 'Ensaladang Talong', 'Grilled eggplant salad with tomatoes, onions, and vinegar dressing. Fresh and tangy.', 250.00, (SELECT id FROM categories WHERE name = 'Vegetables'), true, false);
    ELSE
        -- If categories table doesn't exist, insert menu items with string category names
        INSERT INTO menu_items (id, name, description, base_price, category, available, popular) VALUES
        -- Set Meals
        (gen_random_uuid(), 'JAMBayan Set Meal 1', 'Good for 3-5 Persons. Includes Platter Rice, Whole Fried Chicken, Ensaladang Talong, Pancit Bihon, and Pitcher Iced Tea.', 999.00, 'set-meals', true, true),
        (gen_random_uuid(), 'JAMBayan Set Meal 2', 'Good for 6-8 Persons. Includes 2 Platter Rice, Sinigang na Baboy, Pakbet, Pritong Tilapia, Pancit Canton, and 2 Pitcher Iced Tea.', 1499.00, 'set-meals', true, true),
        (gen_random_uuid(), 'JAMBayan Set Meal 3', 'Good for 10-15 Persons. Includes 3 Platter Rice, Bulalo, Chopsuey, BBQ Liempo, Chicken Curry, Mix Pancit, and 3 Pitcher Iced Tea.', 2299.00, 'set-meals', true, true),
        
        -- Pork Dishes
        (gen_random_uuid(), 'Sinigang na Baboy', 'Traditional Filipino sour soup with pork, vegetables, and tamarind broth. Served with rice.', 280.00, 'pork', true, true),
        (gen_random_uuid(), 'Pork Adobo', 'Classic Filipino dish with tender pork marinated in soy sauce, vinegar, garlic, and bay leaves.', 280.00, 'pork', true, true),
        (gen_random_uuid(), 'Bicol Express', 'Spicy pork dish with coconut milk, chilies, and shrimp paste. A Bicol region specialty.', 280.00, 'pork', true, false),
        (gen_random_uuid(), 'Pork Nilaga', 'Clear soup with tender pork, potatoes, cabbage, and corn. Comfort food at its finest.', 280.00, 'pork', true, false),
        (gen_random_uuid(), 'Pork Caldereta', 'Rich tomato-based stew with pork, vegetables, and liver spread. A festive Filipino favorite.', 280.00, 'pork', true, false),
        
        -- Chicken Dishes
        (gen_random_uuid(), 'Chicken Tinola', 'Healthy chicken soup with ginger, papaya, and moringa leaves. Traditional Filipino comfort food.', 280.00, 'chicken', true, true),
        (gen_random_uuid(), 'Chicken Adobo', 'Classic Filipino chicken marinated in soy sauce, vinegar, garlic, and bay leaves. Perfect with rice.', 280.00, 'chicken', true, true),
        (gen_random_uuid(), 'Fried Chicken', 'Crispy golden fried chicken with secret Filipino spices. Served with your choice of dipping sauce.', 350.00, 'chicken', true, true),
        (gen_random_uuid(), 'Chicken Curry', 'Creamy coconut curry with tender chicken, potatoes, and carrots. Mild and flavorful.', 280.00, 'chicken', true, false),
        (gen_random_uuid(), 'Chicken Sweet n'' Sour', 'Tender chicken in sweet and tangy sauce with bell peppers and pineapple. A crowd favorite.', 280.00, 'chicken', true, false),
        
        -- Beef Dishes
        (gen_random_uuid(), 'Bulalo', 'Rich beef bone marrow soup with tender meat and vegetables. A Batangas specialty.', 450.00, 'beef', true, true),
        (gen_random_uuid(), 'Beef Steak', 'Tender beef strips in savory soy sauce and calamansi marinade. Served with onions.', 400.00, 'beef', true, true),
        (gen_random_uuid(), 'Beef Nilaga', 'Clear soup with tender beef, potatoes, cabbage, and corn. Simple yet satisfying.', 400.00, 'beef', true, false),
        
        -- Fish Dishes
        (gen_random_uuid(), 'Inihaw na Tilapia', 'Grilled tilapia with garlic, ginger, and soy sauce. Fresh and healthy Filipino style.', 250.00, 'fish', true, true),
        (gen_random_uuid(), 'Sinigang na Bangus', 'Sour soup with milkfish, vegetables, and tamarind broth. A seafood favorite.', 300.00, 'fish', true, false),
        (gen_random_uuid(), 'Fried Tilapia', 'Crispy fried tilapia served with vinegar dipping sauce and fresh tomatoes.', 250.00, 'fish', true, false),
        
        -- Vegetable Dishes
        (gen_random_uuid(), 'Chopsuey', 'Mixed vegetables in savory sauce with pork and shrimp. Colorful and nutritious.', 300.00, 'vegetables', true, true),
        (gen_random_uuid(), 'Pakbet', 'Traditional Ilocano vegetable dish with bitter melon, eggplant, okra, and shrimp paste.', 300.00, 'vegetables', true, false),
        (gen_random_uuid(), 'Ensaladang Talong', 'Grilled eggplant salad with tomatoes, onions, and vinegar dressing. Fresh and tangy.', 250.00, 'vegetables', true, false);
    END IF;
END $$;

-- Insert add-ons
INSERT INTO add_ons (id, name, price, category) VALUES
(gen_random_uuid(), 'Extra Rice', 25.00, 'Rice'),
(gen_random_uuid(), 'Iced Tea', 35.00, 'Beverages'),
(gen_random_uuid(), 'Coke', 25.00, 'Beverages'),
(gen_random_uuid(), 'Sprite', 25.00, 'Beverages'),
(gen_random_uuid(), 'Bottled Water', 15.00, 'Beverages');

-- Note: Linking add-ons to menu items would require a junction table
-- For now, we'll skip this step as the menu_items_add_ons table doesn't exist
-- The application can handle add-ons through the category field in add_ons table
