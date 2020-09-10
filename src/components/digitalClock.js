import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Platform } from 'react-native';
import Theme from '../../theme';
export default class App extends Component {
	constructor() {
		super();

		this.state = { currentTime: '--:--' };
	}

	getCurrentTime = () => {
		let hour = new Date().getHours();
		let minutes = new Date().getMinutes();
		let seconds = new Date().getSeconds();

		if (minutes < 10) {
			minutes = '0' + minutes;
		}

		if (seconds < 10) {
			seconds = '0' + seconds;
		}
		if (hour < 10) {
			hour = '0' + hour;
		}

		this.setState({ currentTime: hour + ':' + minutes });
	};

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.getCurrentTime();
		}, 1000);
	}

	render() {
		return (
			<View style={styles.container}>
				<View>
					<Text style={styles.timeText}>{this.state.currentTime}</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginLeft: -55,
		marginBottom: 3,
		justifyContent: 'center',
		alignItems: 'center'
	},

	timeText: {
		fontFamily: 'DIN-Next',
		fontSize: 33,
		color: Theme.primaryRed
	}
});
