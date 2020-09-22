import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import OrderPart from '../components/orderPart';
import { useGlobal } from 'reactn';
import Theme from '../../theme';
import NossaButton from '../components/shared/button';

Array.prototype.sum = function(prop, prop2) {
	var total = 0;
	for (var i = 0, _len = this.length; i < _len; i++) {
		total += this[i][prop] * this[i][prop2];
	}
	return total;
};

const Stock = ({ navigation, route }) => {
	const [
		global,
		setGlobal
	] = useGlobal();

	const { id } = route.params;
	const { tableNo } = route.params;
	const { name } = route.params;
	const { kitchenOrder } = route.params;
	const { completed } = route.params;
	const { timeWaited } = route.params;

	const [
		isCompleted,
		setCompleted
	] = useState(completed);

	const handleCompleted = () => {
		setCompleted(!completed);
		firebase.database().ref('orders').update({
			[id]: {
				tableNo: tableNo,
				timeStamp: timeWaited,
				name: name,
				kitchenOrder: kitchenOrder,
				id: id,
				completed: !completed
			}
		});
		navigation.goBack();
	};

	let convertOrder = Object.values(kitchenOrder);

	return (
		<View style={{ flex: 1, backgroundColor: Theme.primaryBackground, flexWrap: 'wrap', alignItems: 'flex-end' }}>
			<OrderPart
				title="Drinks"
				color="#85471C"
				height={210}
				orderText="drink"
				orderObject={convertOrder.filter((order) => order.type == 'drink')}
			/>
			<OrderPart
				title="Extras"
				color="#074F87"
				height={210}
				orderText="extras"
				orderObject={convertOrder.filter(
					(order) => order.type == 'extra' || order.type == 'side' || order.type == 'starter'
				)}
			/>
			<OrderPart
				title="Desserts"
				color="#97C31E"
				height={210}
				orderText="dessert"
				orderObject={convertOrder.filter((order) => order.type == 'dessert')}
			/>
			<OrderPart
				title="Mains"
				color="#ED5250"
				height={580}
				orderText="main"
				orderObject={convertOrder.filter((order) => order.type == 'main')}
			/>
			<View style={{ flexDirection: 'row' }}>
				<TouchableOpacity
					onPress={handleCompleted}
					style={{
						backgroundColor: isCompleted ? '#97C31E' : '#FECD42',
						width: 360,
						height: 65,
						flexDirection: 'row',
						justifyContent: 'space-evenly',
						alignItems: 'center'
					}}
				>
					<Text
						style={{
							color: isCompleted ? Theme.primaryLight : Theme.primaryDark,
							fontFamily: 'DIN-Next',
							fontSize: 30
						}}
					>
						{isCompleted ? 'Completed' : 'Mark Completed'}
					</Text>
				</TouchableOpacity>
				<View
					style={{
						backgroundColor: Theme.primaryRed,
						width: 250,
						height: 65,
						flexDirection: 'row',
						justifyContent: 'space-evenly',
						alignItems: 'center',
						marginHorizontal: 10
					}}
				>
					<Text
						style={{
							color: Theme.primaryLight,
							fontFamily: 'DIN-Next',
							fontSize: 35
						}}
					>
						Total: £{kitchenOrder.sum('price', 'qty').toFixed(2)}
					</Text>
				</View>
			</View>
		</View>
	);
};

export default Stock;
