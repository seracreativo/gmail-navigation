import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Searcher from './Searcher';
import Filter from './Filter';

const TemplateScreen = ({ children, route }) => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				{route && <Searcher route={route} />}
				<ScrollView style={styles.body} contentContainerStyle={styles.scroll}>
					{children}
				</ScrollView>
				{route?.name === 'TabChatScreen' && <Filter route={route} />}
			</View>
		</SafeAreaView>
	);
};

export default TemplateScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		overlayColor: 'red',
		paddingHorizontal: 24,
	},
	body: {
		flex: 1,
		overflow: 'visible',
	},
	scroll: {
		paddingVertical: 24,
		gap: 16,
	},
});
