import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import SortByMenu from '../components/sortBy';
import SettingsMenu from '../components/settings';
import Clock from '../components/digitalClock';
import { useGlobal } from 'reactn';
import Spinner from 'react-native-loading-spinner-overlay';
import { BallIndicator } from 'react-native-indicators';

import Theme from '../../theme';

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	icon: {
		paddingLeft: 10
	},
	iconContainer: {
		flexDirection: 'row',
		marginRight: -50,
		justifyContent: 'space-evenly',
		width: 450
	}
});

const HeaderButtons = () => {
	const [
		global,
		setGlobal
	] = useGlobal();
	const [
		isFilterVisible,
		setFilterVisible
	] = useState(false);

	const toggleFilter = () => {
		setFilterVisible(!isFilterVisible);
		if (isSettingVisible) {
			setSettingVisible(false);
		}
		if (isRefreshVisible) {
			setRefreshVisible(false);
		}
	};

	const closeFilter = () => {
		setFilterVisible(false);
	};
	const [
		isSettingVisible,
		setSettingVisible
	] = useState(false);

	const toggleSetting = () => {
		setSettingVisible(!isSettingVisible);
		if (isFilterVisible) {
			setFilterVisible(false);
		}
		if (isRefreshVisible) {
			setRefreshVisible(false);
		}
	};

	const closeSetting = () => {
		setSettingVisible(false);
	};
	const [
		isRefreshVisible,
		setRefreshVisible
	] = useState(false);

	const toggleRefresh = () => {
		setRefreshVisible(!isRefreshVisible);
		if (isFilterVisible) {
			setFilterVisible(false);
		}
		if (isSettingVisible) {
			setSettingVisible(false);
		}
		setGlobal((state) => ({
			refresh: (state.refresh = true)
		}));
		setTimeout(() => {
			setRefreshVisible(false);
			setGlobal((state) => ({
				refresh: (state.refresh = false)
			}));
		}, 1000);
	};

	const closeRefresh = () => {
		setRefreshVisible(false);
	};
	return (
		<View>
			<Spinner
				overlayColor="rgba(200,200,200,0.4)"
				size="large"
				textStyle={{
					color: Theme.primaryRed,
					fontSize: 35,
					fontFamily: 'DIN-Next',
					marginTop: 200
				}}
				visible={global.refresh}
				textContent={'LOADING'}
				customIndicator={<BallIndicator color={Theme.primaryRed} size={180} />}
			/>
			<View style={styles.iconContainer}>
				<TouchableOpacity
					style={{
						backgroundColor: isSettingVisible ? Theme.primaryRed : Theme.primaryMenu,
						width: 100,
						margin: 0,
						paddingVertical: 8
					}}
					onPress={toggleSetting}
				>
					<Icon size={45} color={isSettingVisible ? Theme.primaryMenu : Theme.primaryRed} name="settings" />
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						backgroundColor: isFilterVisible ? Theme.primaryRed : Theme.primaryMenu,
						width: 100,
						margin: 0,
						paddingVertical: 8
					}}
					onPress={toggleFilter}
				>
					<Icon size={48} color={isFilterVisible ? Theme.primaryMenu : Theme.primaryRed} name="filter-list" />
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						backgroundColor: isRefreshVisible ? Theme.primaryRed : Theme.primaryMenu,
						width: 100,
						margin: 0,
						paddingVertical: 8
					}}
					onPress={toggleRefresh}
				>
					<Icon size={45} color={isRefreshVisible ? Theme.primaryMenu : Theme.primaryRed} name="refresh" />
				</TouchableOpacity>
				<Clock />
			</View>

			<SortByMenu isModalVisible={isFilterVisible} closeModal={closeFilter} />
			<SettingsMenu isModalVisible={isSettingVisible} closeModal={closeSetting} />
		</View>
	);
};

export default HeaderButtons;
