import React, { useState } from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import OrderPart from '../components/orderPart';
import { useGlobal } from 'reactn';
import Theme from '../../theme';

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

	return (
		<View style={{ flex: 1, backgroundColor: Theme.primaryBackground, flexWrap: 'wrap', alignItems: 'flex-end' }}>
			<OrderPart title="Drinks" color="#85471C" height={210} orderText="drink" />
			<OrderPart title="Extras" color="#074F87" height={210} orderText="extras" />
			<OrderPart title="Desserts" color="#97C31E" height={210} orderText="dessert" />
			<OrderPart title="Mains" color="#ED5250" height={580} orderText="main" />
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
						Total: £{route.params.total.toFixed(2)}
					</Text>
				</View>
			</View>
		</View>
	);
};

export default Stock;
