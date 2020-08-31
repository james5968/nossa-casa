import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const backButton = ({ route }) => {
	let title = 'Table:' + route.params.tableNo + ' ' + route.params.name;
	return (
		<View>
			<TouchableOpacity
				style={{
					backgroundColor: '#CF0A24',
					width: 350,
					padding: 10
				}}
			>
				<Icon
					style={{ backgroundColor: '#CF0A24', width: 50, height: 65, paddingTop: 15 }}
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
