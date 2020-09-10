import React from 'react';
import { setGlobal } from 'reactn';
import { registerRootComponent } from 'expo';
import App from './App';
import {} from 'reactn';
import { fireapp } from './src/components/config';

setGlobal({
	sort: 'old',
	table: 'all',
	from: '1',
	to: '16',
	groupOrders: false,
	orderRef: false,
	keepAwake: false,
	search: '',
	refresh: false,
	orders: {},
	stockSortBy: 'all',
	managerMode: false,
	stockList: [
		{ id: 0, item: '1/2 Chicken', inStock: true },
		{ id: 1, item: '1/4 Chicken', inStock: true },
		{ id: 2, item: 'Whole Chicken', inStock: true },
		{ id: 3, item: 'Thighs', inStock: true },
		{ id: 4, item: 'Chicken Burger', inStock: true },
		{ id: 5, item: 'Chicken Pitta', inStock: true },
		{ id: 6, item: 'Chicken Wrap', inStock: true },
		{ id: 7, item: 'Butterfly', inStock: true },
		{ id: 8, item: 'Full Platter', inStock: true },
		{ id: 9, item: 'Family Platter', inStock: true },
		{ id: 10, item: 'Beanie Burger', inStock: true },
		{ id: 11, item: 'Beanie Pitta', inStock: true },
		{ id: 12, item: 'Beanie Wrap', inStock: true },
		{ id: 13, item: 'Choco-Lot Cake', inStock: true },
		{ id: 14, item: 'Carrot Cake', inStock: true },
		{ id: 15, item: 'White Chocolate Cheesecake', inStock: true },
		{ id: 16, item: 'Nata', inStock: true },
		{ id: 17, item: 'Halloumi Sticks', inStock: true },
		{ id: 18, item: 'Halloumi Sides', inStock: true },
		{ id: 19, item: 'Garlic Bread', inStock: true },
		{ id: 20, item: 'Rolls', inStock: true },
		{ id: 21, item: 'Corn', inStock: true },
		{ id: 22, item: 'Wings', inStock: true },
		{ id: 23, item: 'Boneless Platter', inStock: true },
		{ id: 24, item: 'Spicy Mixed Olives', inStock: true },
		{ id: 25, item: 'Nuts', inStock: true },
		{ id: 26, item: 'Pineapple', inStock: true },
		{ id: 27, item: 'Chedder Cheese', inStock: true },
		{ id: 28, item: 'Wing Platter', inStock: true },
		{ id: 29, item: 'Rice', inStock: true },
		{ id: 30, item: 'Creamy Mash', inStock: true },
		{ id: 31, item: 'Coleslaw', inStock: true },
		{ id: 32, item: 'Broccoli', inStock: true },
		{ id: 33, item: 'Chips', inStock: true },
		{ id: 34, item: 'Peri-Salted Chips', inStock: true },
		{ id: 35, item: 'Macho Peas', inStock: true },
		{ id: 36, item: 'Perinase', inStock: true }
	],
	theme: {
		primaryRed: '#CF0A24'
	}
});

registerRootComponent(App);
