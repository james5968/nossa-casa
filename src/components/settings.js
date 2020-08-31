import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';

import { Text, View, TouchableOpacity, Button, ToastAndroid } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { useGlobal } from 'reactn';

const SettingsMenu = ({ isModalVisible, closeModal }) => {
	const [
		global,
		setGlobal
	] = useGlobal();

	const toggleGroupOrders = () => {
		setGlobal((state) => ({
			groupOrders: (state.groupOrders = !state.groupOrders)
		}));
	};

	const toggleOrderRef = () => {
		setGlobal((state) => ({
			orderRef: (state.orderRef = !state.orderRef)
		}));
	};

	const toastMessage = !global.keepAwake ? 'Keep Screen Awake Activated' : 'Keep Screen Awake Deactivated';
	const toggleKeepAwake = () => {
		setGlobal((state) => ({
			keepAwake: (state.keepAwake = !state.keepAwake)
		}));
		ToastAndroid.show(toastMessage, ToastAndroid.SHORT);
	};

	if (global.keepAwake) {
		activateKeepAwake();
	}
	if (!global.keepAwake) {
		deactivateKeepAwake();
	}

	return (
		<View>
			<Modal
				style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-start', marginRight: 0 }}
				backdropOpacity={0}
				isVisible={isModalVisible}
				avoidKeyboard
				onBackdropPress={closeModal}
				coverScreen={true}
				animationIn="fadeIn"
				animationOut="fadeOut"
			>
				<View
					style={{
						width: 400,
						height: 275,
						backgroundColor: '#C0C0C0',
						flexDirection: 'column'
					}}
				>
					<View
						style={{
							width: 400,
							height: 80,
							backgroundColor: 'transparent',
							justifyContent: 'center'
						}}
					>
						<View
							style={{
								position: 'absolute',
								top: -1,
								width: 400,
								height: 80,
								backgroundColor: 'transparent',
								justifyContent: 'center',
								borderBottomWidth: 30,
								borderBottomColor: '#C0C0C0',
								borderLeftColor: '#CF0A24',
								borderLeftWidth: 400
							}}
						/>
						<Text
							style={{
								color: '#E2E2E2',
								fontSize: 35,
								fontFamily: 'DIN-Next',
								marginLeft: 15,
								marginBottom: 15
							}}
						>
							Settings
						</Text>
					</View>
					<TouchableOpacity
						//onPress={toggleGroupOrders}
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							marginHorizontal: 20,
							marginVertical: 10
						}}
					>
						<Text
							style={{
								color: '#333',
								fontSize: 25,
								fontFamily: 'DIN-Next',
								marginBottom: 10,
								marginTop: 5,
								textDecorationLine: 'line-through'
							}}
						>
							Group Orders (WIP)
						</Text>
						<Checkbox color="#CF0A24" status={global.groupOrders ? 'checked' : 'unchecked'} />
					</TouchableOpacity>
					<TouchableOpacity
						onPress={toggleOrderRef}
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							marginHorizontal: 20,
							marginVertical: 10
						}}
					>
						<Text
							style={{
								color: '#000',
								fontSize: 25,
								fontFamily: 'DIN-Next',
								marginBottom: 10,
								marginTop: 5
							}}
						>
							Display Order Ref
						</Text>
						<Checkbox color="#CF0A24" status={global.orderRef ? 'checked' : 'unchecked'} />
					</TouchableOpacity>
					<TouchableOpacity
						onPress={toggleKeepAwake}
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							marginHorizontal: 20,
							marginVertical: 10
						}}
					>
						<Text
							style={{
								color: '#000',
								fontSize: 25,
								fontFamily: 'DIN-Next',
								marginBottom: 10,
								marginTop: 5
							}}
						>
							Keep Screen Awake
						</Text>
						<Checkbox color="#CF0A24" status={global.keepAwake ? 'checked' : 'unchecked'} />
					</TouchableOpacity>
				</View>
			</Modal>
		</View>
	);
};

export default SettingsMenu;
