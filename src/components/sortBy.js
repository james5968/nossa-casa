import React from 'react';
import Modal from 'react-native-modal';
import { Text, View, TextInput } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useGlobal } from 'reactn';

const sortByMenu = ({ isModalVisible, closeModal }) => {
	const [
		global,
		setGlobal
	] = useGlobal();

	const sortByHandler = (value) => {
		setGlobal((state) => ({
			sort: (state.sort = value)
		}));
	};
	const tableHandler = (value) => {
		setGlobal((state) => ({
			table: (state.table = value)
		}));
	};
	const fromHandler = (value) => {
		setGlobal((state) => ({
			from: (state.from = value)
		}));
	};
	const toHandler = (value) => {
		setGlobal((state) => ({
			to: (state.to = value)
		}));
	};

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
				<View style={{ width: 380, height: 500, backgroundColor: '#C0C0C0', flexDirection: 'column' }}>
					<View
						style={{
							width: 380,
							height: 80,
							backgroundColor: 'transparent',
							justifyContent: 'center'
						}}
					>
						<View
							style={{
								position: 'absolute',
								top: -1,
								width: 380,
								height: 80,
								backgroundColor: 'transparent',
								justifyContent: 'center',
								borderBottomWidth: 30,
								borderBottomColor: '#C0C0C0',
								borderLeftColor: '#CF0A24',
								borderLeftWidth: 380
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
							Sort By
						</Text>
					</View>
					<RadioButton.Group onValueChange={sortByHandler} value={global.sort}>
						<RadioButton.Item
							color="#CF0A24"
							labelStyle={{
								color: '#000',
								fontSize: 25,
								fontFamily: 'DIN-Next',
								marginBottom: 10,
								marginTop: 5
							}}
							label="Old -> New"
							value="old"
						/>
						<RadioButton.Item
							color="#CF0A24"
							labelStyle={{
								color: '#000',
								fontSize: 25,
								fontFamily: 'DIN-Next',
								marginBottom: 10,
								marginTop: 5
							}}
							label="New -> Old"
							value="new"
						/>
						<RadioButton.Item
							color="#CF0A24"
							labelStyle={{
								color: '#000',
								fontSize: 25,
								fontFamily: 'DIN-Next',

								marginBottom: 10,
								marginTop: 5
							}}
							label="Table Number"
							value="table"
						/>
					</RadioButton.Group>

					<View style={{ backgroundColor: '#CF0A24' }}>
						<Text
							style={{
								color: '#E2E2E2',
								fontSize: 35,
								fontFamily: 'DIN-Next',
								marginVertical: 10,
								marginLeft: 15
							}}
						>
							Tables
						</Text>
					</View>
					<RadioButton.Group onValueChange={tableHandler} value={global.table}>
						<RadioButton.Item
							color="#CF0A24"
							labelStyle={{
								color: '#000',
								fontSize: 25,
								fontFamily: 'DIN-Next',
								marginBottom: 10,
								marginTop: 5
							}}
							label="Show All"
							value="all"
						/>
						<RadioButton.Item
							color="#CF0A24"
							labelStyle={{
								color: '#000',
								fontSize: 25,
								fontFamily: 'DIN-Next',
								marginBottom: 10,
								marginTop: 5
							}}
							label="Range"
							value="range"
						/>
					</RadioButton.Group>
					<View style={{ flexDirection: 'row' }}>
						<Text
							style={{
								color: global.table == 'range' ? '#000' : '#888',
								fontSize: 25,
								fontFamily: 'DIN-Next',
								marginLeft: 15,
								marginVertical: 10
							}}
						>
							From
						</Text>
						<TextInput
							editable={global.table == 'range'}
							keyboardType="numeric"
							textAlign="center"
							underlineColorAndroid={global.table == 'range' ? '#CF0A24' : '#888'}
							style={{
								height: 40,
								width: 50,
								borderColor: 'transparent',
								borderWidth: 1,
								marginTop: 5,
								marginHorizontal: 25,
								fontFamily: 'DIN-Next',
								fontSize: 25,
								color: global.table == 'range' ? '#000' : '#888'
							}}
							onChangeText={fromHandler}
							value={global.from}
						/>
						<Text
							style={{
								color: global.table == 'range' ? '#000' : '#888',
								fontSize: 25,
								fontFamily: 'DIN-Next',

								marginVertical: 10
							}}
						>
							To
						</Text>
						<TextInput
							keyboardType="numeric"
							textAlign="center"
							editable={global.table == 'range'}
							underlineColorAndroid={global.table == 'range' ? '#CF0A24' : '#888'}
							style={{
								height: 40,
								width: 50,
								borderColor: 'transparent',
								borderWidth: 1,
								marginTop: 5,
								marginHorizontal: 25,
								fontFamily: 'DIN-Next',
								fontSize: 25,
								color: global.table == 'range' ? '#000' : '#888'
							}}
							onChangeText={toHandler}
							value={global.to}
						/>
					</View>
				</View>
			</Modal>
		</View>
	);
};

export default sortByMenu;
