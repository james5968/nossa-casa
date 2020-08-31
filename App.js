import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import { useGlobal } from 'reactn';
import { Icon } from 'react-native-elements';
import Pin from 'react-native-pin-code';
import Modal from 'react-native-modal';
import * as firebase from 'firebase';

import Live from './src/screens/Live';
import Completed from './src/screens/Completed';
import Stock from './src/screens/Stock';
import Order from './src/screens/Order';
import HeaderButtons from './src/components/headerButtons';
import HeaderTitle from './src/components/headerTitle';

const HomeStack = createStackNavigator();

const headerOptions = {
	headerStyle: {
		backgroundColor: '#C0C0C0',
		height: 65,
		shadowOpacity: 0,
		shadowColor: 'transparent',
		elevation: 0
	},

	headerRight: () => <HeaderButtons />,
	headerTitle: () => null,
	headerLeft: () => <HeaderTitle />
};
const OrderRight = ({ route, navigation }) => {
	const [
		isModalVisible,
		setModalVisible
	] = useState(false);

	const [
		isRefundVisible,
		setRefundVisible
	] = useState(false);

	const [
		refundAmount,
		setRefundAmount
	] = useState(route.params.total);

	const toggleModal = () => {
		if (!global.managerMode) {
			setModalVisible(true);
		} else {
			setGlobal((state) => ({
				managerMode: (state.managerMode = false)
			}));
		}
	};
	const [
		global,
		setGlobal
	] = useGlobal();
	return (
		<View style={{ flexDirection: 'row', width: 220, height: 65 }}>
			<Modal style={{ alignItems: 'center', justifyContent: 'flex-start' }} isVisible={isModalVisible}>
				<Pin
					error="Sorry that was not the correct code!"
					errorStyle={{
						fontFamily: 'DIN-Next',
						fontSize: 30
					}}
					containerStyle={{ height: 250, backgroundColor: '#333' }}
					containerPinStyle={{ height: 100, color: '#CF0A24' }}
					pinStyle={{ height: 100, backgroundColor: '#ccc' }}
					keyboardType="numeric"
					textStyle={{
						color: '#fff',
						fontFamily: 'DIN-Next',
						fontSize: 25
					}}
					text="Please Enter The Manager Code"
					obfuscation
					number={6}
					code="152667"
					selectionColor="#CF0A24"
					success={() => {
						setRefundVisible(true);
						setModalVisible(false);
						setGlobal((state) => ({
							managerMode: (state.managerMode = true)
						}));
						setTimeout(() => {
							setGlobal((state) => ({
								managerMode: (state.managerMode = false)
							}));
						}, 50000);
					}}
				/>
				<TouchableOpacity
					style={{
						backgroundColor: '#CF0A24',
						width: 700,
						height: 80,
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: 15
					}}
					onPress={() => {
						setModalVisible(false);
					}}
				>
					<Text
						style={{
							color: '#fff',
							fontFamily: 'DIN-Next',
							fontSize: 30
						}}
					>
						Close
					</Text>
				</TouchableOpacity>
			</Modal>
			<Modal style={{ alignItems: 'center', justifyContent: 'flex-start' }} isVisible={isRefundVisible}>
				<View>
					<View
						style={{
							width: 700,
							height: 400,
							backgroundColor: '#333',
							flexDirection: 'column',
							justifyContent: 'space-between',
							alignItems: 'center',
							paddingBottom: 30
						}}
					>
						<Text
							style={{
								color: '#000',
								fontFamily: 'DIN-Next',
								fontSize: 40,
								padding: 10,
								width: 700,
								height: 65,
								backgroundColor: '#C0C0C0',
								textAlign: 'center'
							}}
						>
							Issue Refund
						</Text>
						<TextInput
							style={{
								backgroundColor: '#fff',
								width: 600,
								fontSize: 40,
								height: 60,
								textAlign: 'center'
							}}
							value={refundAmount.toString()}
							onChangeText={(value) => setRefundAmount(value)}
							keyboardType="number-pad"
						/>
						<TouchableOpacity
							style={{
								backgroundColor: '#97C31E',
								width: 500,
								height: 60,
								justifyContent: 'center',
								alignItems: 'center'
							}}
							onPress={() => {
								setRefundVisible(false);
								setGlobal((state) => ({
									refresh: (state.refresh = true)
								}));
								setTimeout(() => {
									setGlobal((state) => ({
										refresh: (state.refresh = false)
									}));
									alert('£' + refundAmount + ' was refunded successfully');
								}, 1000);
							}}
						>
							<Text
								style={{
									color: '#fff',
									fontFamily: 'DIN-Next',
									fontSize: 30
								}}
							>
								Issue Refund
							</Text>
						</TouchableOpacity>
					</View>

					<TouchableOpacity
						style={{
							backgroundColor: '#CF0A24',
							width: 700,
							height: 80,
							justifyContent: 'center',
							alignItems: 'center'
						}}
						onPress={() => {
							setRefundVisible(false);
						}}
					>
						<Text
							style={{
								color: '#fff',
								fontFamily: 'DIN-Next',
								fontSize: 30
							}}
						>
							Close
						</Text>
					</TouchableOpacity>
				</View>
			</Modal>
			<TouchableOpacity
				onPress={toggleModal}
				style={{
					backgroundColor: '#CF0A24',
					width: 220,
					height: 65,
					flexDirection: 'row',
					justifyContent: 'space-evenly',
					alignItems: 'center'
				}}
			>
				<Text
					style={{
						color: '#fff',
						fontFamily: 'DIN-Next',
						fontSize: 30
					}}
				>
					Issue Refund
				</Text>
			</TouchableOpacity>
		</View>
	);
};

const BackButton = ({ route, navigation }) => {
	return (
		<View>
			<TouchableOpacity
				onPress={() => {
					navigation.goBack();
				}}
				style={{
					backgroundColor: '#CF0A24',
					width: 360,
					height: 65,

					flexDirection: 'row',
					justifyContent: 'space-evenly',
					alignItems: 'center'
				}}
			>
				<Icon style={{}} size={35} color="#fff" name="arrow-back" />
				<Text
					style={{
						color: '#fff',
						fontFamily: 'DIN-Next',
						fontSize: 30
					}}
				>
					{'Table:' + route.params.tableNo + ' ' + route.params.name}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

const backOptions = ({ route, navigation }) => ({
	headerStyle: {
		backgroundColor: '#C0C0C0',
		height: 65,
		shadowOpacity: 0,
		shadowColor: 'transparent',
		elevation: 0
	},
	title: '',

	headerLeft: () => <BackButton route={route} navigation={navigation} />,
	headerRight: () => <OrderRight navigation={navigation} route={route} />
});

const tabOptions = {
	activeTintColor: '#fff',
	inactiveTintColor: '#000',
	activeBackgroundColor: '#CF0A24',
	inactiveBackgroundColor: '#C0C0C0',
	labelStyle: { fontSize: 35, fontFamily: 'DIN-Next' },
	style: {
		height: 65,
		shadowOpacity: 0,
		shadowColor: 'transparent',
		elevation: 0
	}
};

function LiveStackScreen() {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Live Orders" component={Live} options={headerOptions} />
			<HomeStack.Screen name="Order" component={Order} options={backOptions} />
		</HomeStack.Navigator>
	);
}

function CompletedStackScreen() {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Completed Orders" component={Completed} options={headerOptions} />
			<HomeStack.Screen name="Order" component={Order} options={backOptions} />
		</HomeStack.Navigator>
	);
}

function StockStackScreen() {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Stock" component={Stock} options={headerOptions} />
		</HomeStack.Navigator>
	);
}

const Tab = createBottomTabNavigator();

export default function App() {
	const [
		global,
		setGlobal
	] = useGlobal();

	firebase.database().ref('orders/').on('value', (snapshot) => {
		const data = snapshot.val() ? snapshot.val() : {};
		setGlobal((state) => ({
			orders: (state.orders = data)
		}));
	});

	const [
		isModalVisible,
		setModalVisible
	] = useState(true);

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	const closeModal = () => {
		setModalVisible(false);
	};
	let [
		fontsLoaded
	] = useFonts({
		'DIN-Next': require('./assets/fonts/din-next.otf')
	});
	if (!fontsLoaded) {
		return <AppLoading />;
	}
	return (
		<NavigationContainer>
			<Tab.Navigator tabBarOptions={tabOptions} initialRouteName="Live" barStyle={{ backgroundColor: '#C0C0C0' }}>
				<Tab.Screen name="Live" component={LiveStackScreen} />
				<Tab.Screen name="Completed" component={CompletedStackScreen} />
				<Tab.Screen name="Stock" component={StockStackScreen} />
			</Tab.Navigator>
			<StatusBar hidden />
		</NavigationContainer>
	);
}
