import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useGlobal } from 'reactn';
import Theme from '../../theme';

const HeaderTitle = () => {
	const [
		global,
		setGlobal
	] = useGlobal();

	const onSearchText = (value) => {
		setGlobal((state) => ({
			search: (state.search = value)
		}));
	};
	const clearSearch = () => {
		if (global.search) {
			setGlobal((state) => ({
				search: (state.search = '')
			}));
		}
	};

	return (
		<View style={{ flexDirection: 'row', marginBottom: 0 }}>
			<View style={{ flexDirection: 'row' }}>
				<Text
					style={{
						color: Theme.primaryLight,
						fontFamily: 'DIN-Next',
						fontSize: 40,
						backgroundColor: Theme.primaryRed,
						width: 250,
						padding: 10,
						textAlign: 'center',
						marginLeft: 0
					}}
				>
					Nossa Casa
				</Text>
			</View>
			<TextInput
				selectTextOnFocus
				selectionColor={Theme.primaryRed}
				keyboardType="default"
				textAlign="right"
				underlineColorAndroid={Theme.primaryRed}
				onChangeText={onSearchText}
				value={global.search}
				style={{
					height: 50,
					width: 250,
					borderColor: 'transparent',
					borderWidth: 1,
					alignSelf: 'flex-end',
					fontFamily: 'DIN-Next',
					fontSize: 25,
					color: Theme.primaryRed,

					paddingRight: 10,
					textDecorationLine: 'none',
					marginBottom: 4
				}}
			/>
			<TouchableOpacity onPress={clearSearch}>
				<Icon
					style={{ marginTop: 10 }}
					size={45}
					color={Theme.primaryRed}
					name={global.search ? 'close' : 'search'}
				/>
			</TouchableOpacity>
		</View>
	);
};

export default HeaderTitle;
