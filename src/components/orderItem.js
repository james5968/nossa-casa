import React from 'react';
import { Text, View } from 'react-native';

const OrderItem = ({ item, qty, price, sideOne, sideTwo, spice, type }) => {
	return (
		<View
			style={{
				flexDirection: 'row',
				marginBottom: 10,
				alignItems: 'center',
				backgroundColor: 'rgba(0,0,0,0.04)',
				padding: 10,
				marginHorizontal: 10
			}}
		>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
					alignSelf: 'flex-start'
				}}
			>
				<Text
					style={{
						marginHorizontal: 10,
						fontSize: 25,
						fontFamily: 'DIN-Next',

						marginTop: 3
					}}
				>
					{qty}
				</Text>
				<Text
					style={{
						fontSize: 20,
						fontFamily: 'DIN-Next',

						marginTop: 5
					}}
				>
					X
				</Text>
			</View>

			<View style={{ marginHorizontal: 15 }}>
				<Text style={{ fontSize: 30, fontFamily: 'DIN-Next' }}>{item}</Text>
				{type == 'main' && (
					<Text style={{ fontSize: 20, fontFamily: 'DIN-Next', marginLeft: 10 }}>{spice}</Text>
				)}
				{type == 'main' &&
				!sideOne &&
				!sideTwo && <Text style={{ fontSize: 20, fontFamily: 'DIN-Next', marginLeft: 10 }}>No Sides</Text>}
				{type == 'main' &&
				sideOne && (
					<Text style={{ fontSize: 20, fontFamily: 'DIN-Next', marginLeft: 10 }}>Regular {sideOne}</Text>
				)}
				{type == 'main' &&
				sideTwo && (
					<Text style={{ fontSize: 20, fontFamily: 'DIN-Next', marginLeft: 10 }}>Regular {sideTwo}</Text>
				)}
			</View>

			<Text style={{ marginLeft: 'auto', marginRight: 25, fontSize: 25, fontFamily: 'DIN-Next' }}>
				£{parseFloat(price).toFixed(2)}
			</Text>
		</View>
	);
};

export default OrderItem;
