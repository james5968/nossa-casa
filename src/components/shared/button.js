import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import theme from '../../../theme';

const Button = (onPress, width, height, background, textValue, fontSize, textColour) => {
	return (
		<TouchableOpacity
			onPress={() => {}}
			style={{
				backgroundColor: background,
				width: 700,
				height: 80,
				flexDirection: 'row',
				justifyContent: 'space-evenly',
				alignItems: 'center',
				marginTop: 15
			}}
		>
			<Text
				style={{
					color: textColour,
					fontFamily: 'DIN-Next',
					fontSize: fontSize
				}}
			>
				{textValue}
			</Text>
		</TouchableOpacity>
	);
};

export default Button;
