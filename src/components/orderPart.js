import React from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import uid from 'uid';
import ScrollViewIndicator from 'react-native-scroll-indicator';
import OrderItem from './orderItem';

import Theme from '../../theme.js';
const orderPart = ({
	orderObject,
	title = 'Title',
	color = '#FECD42',
	width = 620,
	height = 300,
	orderText = 'drink'
}) => {
	const renderItem = (item) => {
		let sideOne, sideTwo;

		if (typeof item.modifiers != 'undefined' && typeof item.modifiers.sides != 'undefined') {
			sideOne = item.modifiers.sides[0];
			sideTwo = item.modifiers.sides[1];
		}

		return (
			<OrderItem
				item={item.item}
				spice={item.spice}
				price={item.price}
				qty={item.qty}
				sideOne={sideOne}
				sideTwo={sideTwo}
				type={item.type}
			/>
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
					<View style={{ paddingVertical: 30 }}>{orderObject.map((item) => renderItem(item))}</View>
				</ScrollView>
			</View>
		</View>
	);
};

export default orderPart;
