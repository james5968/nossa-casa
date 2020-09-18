import React from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import uid from 'uid';
import ScrollViewIndicator from 'react-native-scroll-indicator';

import Theme from '../../theme.js';
const orderPart = ({ title = 'Title', color = '#FECD42', width = 620, height = 300, orderText = 'drink' }) => {
	let orderDetails;
	if (orderText == 'drink') {
		orderDetails = [
			'1 x Bottomless Soft Drink - Coke Zero',
			'1 x Bottomless Soft Drink - Fanta',
			'2 x Sagres',
			'4 x Chilled Water'
		];
	} else if (orderText == 'extras') {
		orderDetails = [
			'2 x Halloumi Sticks and Dip',
			'1 x Spicy Mixed Olives'
		];
	} else if (orderText == 'dessert') {
		orderDetails = [
			'1 x Naughty Nata'
		];
	} else if (orderText == 'main') {
		orderDetails = [
			'1 x 1/2 Chicken',
			'       Medium',
			'       2 Sides',
			'           Regular Spicy Rice',
			'           Regular Long Steam Brocolli',
			'',
			'2 x Chicken Wrap',
			'       Lemon & Herb',
			'       1 Side',
			'           Regular Peri-Salted Chips',
			'',
			'1 x Butterfly Breast',
			'       Extra Hot',
			'       2 Sides',
			'           Regular Garlic Bread',
			'           Regular Creamy Mash',
			'',
			'1 x Wing Roulette'
		];
	}
	const renderItem = (item) => {
		return (
			<Text key={uid()} style={{ marginLeft: 50, fontFamily: 'DIN-Next', fontSize: 25 }}>
				{item}
			</Text>
		);
	};

	return (
		<View
			style={{
				backgroundColor: Theme.primaryLight,
				marginHorizontal: 10,
				marginVertical: 5,
				width: width,
				height: height
			}}
		>
			<View
				style={{
					position: 'absolute',
					backgroundColor: color,
					height: 60,
					borderBottomWidth: 30,
					borderBottomColor: Theme.primaryLight,
					borderLeftColor: color,
					borderLeftWidth: width,
					zIndex: 2
				}}
			/>
			<Text
				style={{
					color: Theme.primaryLight,
					textShadowRadius: 4,
					zIndex: 2,
					fontFamily: 'DIN-Next',
					fontSize: 35,
					margin: 5
				}}
			>
				{title}
			</Text>
			<View style={{ zIndex: 1, flex: 1, marginTop: 15, marginLeft: 10, marginTop: -10 }}>
				<ScrollView persistentScrollbar={true}>
					<View style={{ paddingVertical: 30 }}>{orderDetails.map((item) => renderItem(item))}</View>
				</ScrollView>
			</View>
		</View>
	);
};

export default orderPart;
