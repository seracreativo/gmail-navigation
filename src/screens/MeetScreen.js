import { StyleSheet, Text } from 'react-native';
import React from 'react';
import TemplateScreen from '../components/TemplateScreen';
import { font } from '../styles/globalStyles';

const MeetScreen = ({ route }) => {
	return (
		<TemplateScreen>
			<Text style={font.sub2}>{route?.params?.title}</Text>
		</TemplateScreen>
	);
};

export default MeetScreen;

const styles = StyleSheet.create({});
