import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import { useGlobal } from 'reactn';
import Theme from '../../theme';
const stockItem = ({ item, inStock, index }) => {
	const [
		global,
		setGlobal
	] = useGlobal();

	let toastMessage = 'Please activate Manager mode!';

	const toggleStock = () => {
		if (global.managerMode) {
			const elementsIndex = global.stockList.findIndex((element) => element.id == index);
			let newArray = [
				...global.stockList
			];
			newArray[elementsIndex] = { ...newArray[elementsIndex], inStock: !newArray[elementsIndex].inStock };
			setGlobal((state) => ({
				stockList: (state.stockList = newArray)
			}));
		} else {
			ToastAndroid.show(toastMessage, ToastAndroid.SHORT);
		}
	};
	return (
		<TouchableOpacity
			style={{
				backgroundColor: inStock ? Theme.primaryLight : '#333',
				height: 80,
				flexDirection: 'row',
				justifyContent: 'space-between',
				paddingLeft: 15,
				alignItems: 'center',
				marginVertical: 2
			}}
			onPress={toggleStock}
		>
			<Text
				style={{
					color: inStock ? Theme.primaryDark : Theme.primaryLight,
					fontSize: 25,
					fontFamily: 'DIN-Next'
				}}
			>
				{item}
			</Text>
			<View
				style={{
					backgroundColor: inStock ? '#97C31E' : Theme.primaryRed,
					height: 80,
					width: 150,
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<Text
					style={{
						color: inStock ? Theme.primaryDark : Theme.primaryLight,
						fontSize: 25,
						fontFamily: 'DIN-Next'
					}}
				>
					{inStock ? 'In Stock' : 'Unavailable'}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default stockItem;
