import React, { useState, useEffect } from 'react';
import { useGlobal } from 'reactn';
import { View, ScrollView } from 'react-native';
import OrderCard from '../components/card';
import Theme from '../../theme';

const Live = ({ navigation }) => {
	const [
		global
	] = useGlobal();
	let sortBy = global.sort;
	let fireKeys = Object.keys(global.orders);
	let arrayData = [];
	fireKeys.map((key) => arrayData.push(global.orders[key]));

	let sortedData;
	if (global.search) {
		arrayData = arrayData.filter((o) =>
			Object.keys(o).some((k) => o[k].toString().toLowerCase().includes(global.search.toString().toLowerCase()))
		);
	}
	if (sortBy == 'old') {
		const sortedOldData = arrayData.sort((a, b) => (a.timeStamp > b.timeStamp ? 1 : -1));
		sortedData = sortedOldData;
	} else if (sortBy == 'new') {
		const sortedNewData = arrayData.sort((a, b) => (a.timeStamp > b.timeStamp ? -1 : 1));

		sortedData = sortedNewData;
	} else if (sortBy == 'table') {
		const sortedTableData = arrayData.sort((a, b) => (a.tableNo > b.tableNo ? 1 : -1));
		sortedData = sortedTableData;
	}
	return (
		<ScrollView
			style={{ backgroundColor: Theme.primaryBackground }}
			horizontal={true}
			showsHorizontalScrollIndicator={false}
		>
			<View
				style={{
					flex: 1,
					flexDirection: 'column',
					flexWrap: 'wrap',
					backgroundColor: Theme.primaryBackground,
					paddingTop: 20,
					paddingBottom: 20,
					paddingLeft: 10
				}}
			>
				{sortedData.map(({ tableNo, completed, name, timeStamp, id, kitchenOrder }) => {
					let tableNumber = parseInt(tableNo);
					let fromRange = parseInt(global.from);
					let toRange = parseInt(global.to);
					if (!completed) {
						if (global.table == 'range') {
							if (tableNumber <= toRange && tableNumber >= fromRange) {
								return (
									<OrderCard
										key={id}
										tableNo={tableNo}
										completed={completed}
										name={name}
										timeWaited={timeStamp}
										id={id}
										navigation={navigation}
										kitchenOrder={kitchenOrder}
									/>
								);
							}
						} else {
							return (
								<OrderCard
									key={id}
									tableNo={tableNo}
									completed={completed}
									name={name}
									timeWaited={timeStamp}
									id={id}
									navigation={navigation}
									kitchenOrder={kitchenOrder}
								/>
							);
						}
					}
				})}
			</View>
		</ScrollView>
	);
};

export default Live;
