# Database Setup for Pick-Me-Up Cafe

This document explains how to set up the database for the Pick-Me-Up cafe ordering system.

## Overview

The application now uses Supabase (PostgreSQL) instead of hardcoded menu data. All menu items, categories, variations, and add-ons are stored in the database.

## Database Structure

### Tables

1. **categories** - Menu categories (Fried Rice, Hotdogs, etc.)
   - `id` (text, primary key)
   - `name` (text)
   - `icon` (text) - emoji for the category
   - `sort_order` (integer)
   - `active` (boolean)
   - `created_at` (timestamp)
   - `updated_at` (timestamp)

2. **menu_items** - Individual menu items
   - `id` (uuid, primary key)
   - `name` (text)
   - `description` (text)
   - `base_price` (decimal)
   - `category` (text, foreign key to categories.id)
   - `popular` (boolean)
   - `available` (boolean)
   - `image_url` (text, optional)
   - `created_at` (timestamp)
   - `updated_at` (timestamp)

3. **variations** - Size/type variations for menu items
   - `id` (uuid, primary key)
   - `menu_item_id` (uuid, foreign key to menu_items.id)
   - `name` (text)
   - `price` (decimal)
   - `created_at` (timestamp)

4. **add_ons** - Add-on options for menu items
   - `id` (uuid, primary key)
   - `menu_item_id` (uuid, foreign key to menu_items.id)
   - `name` (text)
   - `price` (decimal)
   - `category` (text) - grouping for add-ons (toppings, flavors, etc.)
   - `created_at` (timestamp)

## Migration Files

The following migration files are included:

- `20250829160942_green_stream.sql` - Creates the basic table structure
- `20250916183205_pick_me_up_menu.sql` - Populates the database with Pick-Me-Up menu data

## Running Migrations

### Option 1: Using Supabase CLI (Recommended)

1. Install Supabase CLI:
   ```bash
   npm install -g supabase
   ```

2. Login to Supabase:
   ```bash
   supabase login
   ```

3. Link your project:
   ```bash
   supabase link --project-ref YOUR_PROJECT_REF
   ```

4. Run migrations:
   ```bash
   supabase db push
   ```

### Option 2: Manual SQL Execution

1. Open your Supabase dashboard
2. Go to SQL Editor
3. Copy and paste the contents of `supabase/migrations/20250916183205_pick_me_up_menu.sql`
4. Execute the SQL

## Pick-Me-Up Menu Data

The migration includes all Pick-Me-Up menu items:

### Categories
- 🍳 Fried Rice Fiesta
- 🌭 Hotdog Sandwich  
- 🍟 Fries
- 🍗 Chicken Poppers
- 🧇 Pick-A-Waffle
- 🍔 Burger
- ✨ Flavors
- ➕ Add Ons

### Menu Items
- **Fried Rice Fiesta** - Base item with 9 topping add-ons
- **Hotdog Sandwiches** - 5 different hotdog options
- **Fries** - 6 different fry sizes (regular & coated)
- **Chicken Poppers** - 4 chicken items
- **Waffles** - 6 waffle varieties
- **Burgers** - 7 burger options
- **Flavors** - 4 flavor options (free)
- **Add-ons** - 3 sauce/add-on options

## Application Changes

The application has been updated to:

1. **useCategories Hook** - Now fetches categories from the database
2. **useMenu Hook** - Now fetches menu items with variations and add-ons from the database
3. **Real-time Updates** - Menu changes in the database will reflect immediately in the app
4. **Admin Dashboard** - Can now manage menu items through the admin interface

## Environment Variables

Make sure your `.env.local` file contains:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Testing

After running the migrations:

1. Start the development server: `npm run dev`
2. Navigate to `http://localhost:5175/`
3. Verify that all menu categories and items are displayed
4. Test adding items to cart
5. Test the admin dashboard at `/admin`

## Troubleshooting

### Menu Not Loading
- Check that migrations ran successfully
- Verify Supabase connection in browser console
- Check that environment variables are set correctly

### Missing Categories
- Ensure the migration file was executed completely
- Check that categories table has data: `SELECT * FROM categories;`

### Missing Menu Items
- Check that menu_items table has data: `SELECT * FROM menu_items;`
- Verify category IDs match between categories and menu_items tables

## Admin Features

The admin dashboard now supports:
- Adding new menu items
- Editing existing items
- Managing categories
- Adding variations and add-ons
- Real-time updates to the customer-facing menu
