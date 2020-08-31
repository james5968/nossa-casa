import React, { useState } from 'react';
import { Button, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import StockItem from '../components/stockItem';
import { useGlobal } from 'reactn';
import { Icon } from 'react-native-elements';
import Pin from 'react-native-pin-code';
import Modal from 'react-native-modal';
import uid from 'uid';

const Stock = ({ navigation }) => {
	const [
		isModalVisible,
		setModalVisible
	] = useState(false);

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

	let stockArray = global.stockList;

	if (global.stockSortBy == 'stock') {
		stockArray = stockArray.filter((el) => el.inStock == true);
	}
	if (global.stockSortBy == 'nostock') {
		stockArray = stockArray.filter((el) => el.inStock == false);
	}

	if (global.search) {
		stockArray = stockArray.filter((o) =>
			Object.keys(o).some((k) => o[k].toString().toLowerCase().includes(global.search.toString().toLowerCase()))
		);
	}

	const filterHandlerAll = () => {
		setGlobal((state) => ({
			stockSortBy: (state.stockSortBy = 'all')
		}));
	};
	const filterHandlerStock = () => {
		setGlobal((state) => ({
			stockSortBy: (state.stockSortBy = 'stock')
		}));
	};
	const filterHandlerNoStock = () => {
		setGlobal((state) => ({
			stockSortBy: (state.stockSortBy = 'nostock')
		}));
	};

	return (
		<View style={{ flexDirection: 'column', flex: 1 }}>
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
			<View
				style={{
					paddingVertical: 5,
					height: 60,
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					backgroundColor: '#C0C0C0'
				}}
			>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<TouchableOpacity
						style={{
							backgroundColor: global.stockSortBy == 'all' ? '#CF0A24' : '#333',
							height: 50,
							width: 100,
							justifyContent: 'center'
						}}
						onPress={filterHandlerAll}
					>
						<Text
							style={{
								fontFamily: 'DIN-Next',
								fontSize: 25,
								color: '#fff',
								textAlign: 'center'
							}}
						>
							All
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							marginLeft: 5,
							backgroundColor: global.stockSortBy == 'stock' ? '#CF0A24' : '#333',
							height: 50,
							width: 100,
							justifyContent: 'center'
						}}
						onPress={filterHandlerStock}
					>
						<Text
							style={{
								fontFamily: 'DIN-Next',
								fontSize: 25,
								color: '#fff',
								textAlign: 'center'
							}}
						>
							In Stock
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							marginLeft: 5,
							backgroundColor: global.stockSortBy == 'nostock' ? '#CF0A24' : '#333',
							height: 50,
							width: 100,
							justifyContent: 'center'
						}}
						onPress={filterHandlerNoStock}
					>
						<Text
							style={{
								fontFamily: 'DIN-Next',
								fontSize: 20,
								color: '#fff',
								textAlign: 'center'
							}}
						>
							Out of Stock
						</Text>
					</TouchableOpacity>
				</View>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<TouchableOpacity
						onPress={toggleModal}
						style={{ marginLeft: 50, backgroundColor: '#CF0A24', height: 50, width: 100 }}
					>
						<Icon
							style={{ marginTop: 10 }}
							size={25}
							color="#fff"
							name={!global.managerMode ? 'edit' : 'check'}
						/>
					</TouchableOpacity>
				</View>
			</View>

			<ScrollView style={{ flex: 1, backgroundColor: '#E2E2E2' }}>
				{stockArray.map((item) => (
					<StockItem index={item.id} key={item.id} item={item.item} inStock={item.inStock} />
				))}
			</ScrollView>
		</View>
	);
};

export default Stock;
