import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import TimeAgo from 'react-native-timeago';
import { useGlobal } from 'reactn';
import firebase from 'firebase';
import Modal from 'react-native-modal';

const OrderCard = ({ tableNo, orders, timeWaited, completed, name, id, navigation, kitchenOrder }) => {
	const [
		isModalVisible,
		setModalVisible
	] = useState(false);
	const [
		global,
		setGlobal
	] = useGlobal();
	let topColor;
	if (orders == 1 || name.length <= 4) {
		topColor = '#97C31E';
	} else if (orders == 2 || name.length == 5) {
		topColor = '#FECD42';
	} else if (orders == 3 || name.length == 6) {
		topColor = '#074F87';
	} else if (orders == 4 || name.length == 7) {
		topColor = '#ED5250';
	} else if (orders == 5 || name.length == 8) {
		topColor = '#65C3BE';
	} else if (orders == 6 || name.length == 9) {
		topColor = '#85471C';
	} else if (name) {
		topColor = '#333';
	}

	let bgColor;
	let textColor;
	if (completed) {
		bgColor = '#fff';
		textColor = '#333333';
	} else {
		bgColor = '#333333';
		textColor = '#fff';
	}

	const markCompleted = () => {
		setModalVisible(false);
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
	};

	const handleLongPress = () => {
		setModalVisible(true);
	};

	return (
		<TouchableOpacity
			style={{
				backgroundColor: bgColor,
				width: 305,
				height: 115,
				margin: 5
			}}
			onLongPress={handleLongPress}
			onPress={() =>
				navigation.navigate('Order', {
					tableNo: tableNo,
					name: name,
					id: id,
					kitchenOrder: kitchenOrder,
					total: 47.7,
					completed: completed,
					timeWaited: timeWaited
				})}
		>
			<Modal style={{ alignItems: 'center', justifyContent: 'flex-start' }} isVisible={isModalVisible}>
				<View
					style={{
						alignItems: 'center',
						justifyContent: 'space-between',
						width: 500,
						height: 500,
						backgroundColor: '#C0C0C0'
					}}
				>
					<Text
						style={{
							fontFamily: 'DIN-Next',
							fontSize: 30,
							textAlign: 'center',
							paddingVertical: 10,
							backgroundColor: '#CF0A24',
							color: '#fff'
						}}
					>
						Do you want to mark the order as completed?
					</Text>
					<TouchableOpacity
						onPress={markCompleted}
						style={{
							width: 400,
							height: 150,
							backgroundColor: '#97C31E',
							justifyContent: 'center',
							marginBottom: 15
						}}
					>
						<Text
							style={{
								fontFamily: 'DIN-Next',
								fontSize: 30,
								textAlign: 'center',

								color: '#fff'
							}}
						>
							Mark Completed
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							setModalVisible(false);
						}}
						style={{
							width: 400,
							height: 150,
							backgroundColor: '#ED5250',
							justifyContent: 'center',
							marginBottom: 40
						}}
					>
						<Text
							style={{
								fontFamily: 'DIN-Next',
								fontSize: 30,
								textAlign: 'center',

								color: '#fff'
							}}
						>
							No not yet!
						</Text>
					</TouchableOpacity>
				</View>
			</Modal>
			<View
				style={{
					flex: 1,
					flexDirection: 'row'
				}}
			>
				<View>
					<Text
						style={{
							color: textColor,
							fontSize: 50,
							fontFamily: 'DIN-Next',
							width: 80,
							textAlign: 'center',

							marginTop: 25
						}}
					>
						{tableNo}
					</Text>
				</View>
				<View
					style={{
						flex: 2,
						flexDirection: 'column'
					}}
				>
					<View style={{ backgroundColor: topColor, height: 25 }}>
						{global.orderRef && (
							<Text
								style={{
									color: '#fff',
									fontSize: 18,
									backgroundColor: 'rgba(0,0,0,0.1)',
									textAlign: 'right',
									paddingRight: 10
								}}
							>
								{id}
							</Text>
						)}
					</View>
					<View>
						{orders && (
							<Text
								style={{
									color: textColor,
									fontSize: 30,
									fontFamily: 'DIN-Next',
									textAlign: 'center',
									alignSelf: 'center',
									marginTop: 5
								}}
							>
								Orders:{orders}
							</Text>
						)}
						{name && (
							<Text
								style={{
									color: textColor,
									fontSize: 30,
									fontFamily: 'DIN-Next',
									textAlign: 'center',
									alignSelf: 'center',
									marginTop: 5
								}}
							>
								{name}
							</Text>
						)}

						<Text
							style={{
								color: completed ? '#888' : '#eee',
								fontSize: 20,
								fontFamily: 'DIN-Next',
								textAlign: 'center',
								alignSelf: 'center',
								marginTop: 15
							}}
						>
							<TimeAgo time={timeWaited} />
						</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default OrderCard;
