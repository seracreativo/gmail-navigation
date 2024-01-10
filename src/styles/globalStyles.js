import { StyleSheet } from 'react-native';
const fontBase = 18;

export const color = StyleSheet.create({
	primary: 'rgba(0,0,0,1)',
	secundary: 'rgba(0,0,0,0.6)',
	select: 'rgba(0,0,0,0.9)',
	selectBG: 'rgba(0,0,0,0.07)',
});

export const font = StyleSheet.create({
	h1: {
		fontSize: fontBase * 2.5,
		fontWeight: '600',
	},
	h2: {
		fontSize: fontBase * 2,
		fontWeight: '600',
	},
	h3: {
		fontSize: fontBase * 1.75,
		fontWeight: '600',
	},
	sub1: {
		fontSize: fontBase * 1.5,
		fontWeight: '500',
	},
	sub2: {
		fontSize: fontBase * 1.2,
		fontWeight: '500',
	},
	body1: {
		fontSize: fontBase,
		fontWeight: 'normal',
	},
	body2: {
		fontSize: fontBase * 0.85,
		fontWeight: 'normal',
	},
});

export const shadow = StyleSheet.create({
	primary: {
		backgroundColor: 'white',
		shadowColor: 'rgba(0,0,0,0.5)',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 8,
		elevation: 7,
	},
});
