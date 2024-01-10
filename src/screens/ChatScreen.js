import { StyleSheet, Text } from 'react-native';
import React from 'react';
import TemplateScreen from '../components/TemplateScreen';
import { font } from '../styles/globalStyles';

const ChatScreen = ({ route }) => {
	return (
		<TemplateScreen route={route}>
			<Text style={font.sub2}>{route?.params?.filterName}</Text>
		</TemplateScreen>
	);
};

export default ChatScreen;

const styles = StyleSheet.create({});
