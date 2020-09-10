import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { useGlobal } from 'reactn';
import Theme from '../../theme';

const backButton = ({ route }) => {
	let title = 'Table:' + route.params.tableNo + ' ' + route.params.name;
	const [
		global,
		setGlobal
	] = useGlobal();
	return (
		<View>
			<TouchableOpacity
				style={{
					backgroundColor: Theme.primaryRed,
					width: 350,
					padding: 10
				}}
			>
				<Icon
					style={{ backgroundColor: Theme.primaryRed, width: 50, height: 65, paddingTop: 15 }}
					size={35}
					color="#fff"
					name="arrow-back"
				/>
				<Text>{title}</Text>
			</TouchableOpacity>
		</View>
	);
};

export default backButton;
