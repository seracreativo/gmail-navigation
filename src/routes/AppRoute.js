import React from 'react';
import MailScreen from '../screens/MailScreen';
import ChatScreen from '../screens/ChatScreen';
import MeetScreen from '../screens/MeetScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { color } from '../styles/globalStyles';

const Tab = createBottomTabNavigator();
export default function AppRoute() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: {
					borderTopWidth: 0,
				},
				tabBarActiveTintColor: color.primary,
			}}
		>
			<Tab.Screen
				component={MailScreen}
				name='TabMailScreen'
				initialParams={{
					buscadorText: 'correo',
				}}
				options={{
					tabBarIcon: ({ color, focused }) => (
						<MaterialCommunityIcons
							name={focused ? 'email' : 'email-outline'}
							size={28}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				component={ChatScreen}
				name='TabChatScreen'
				initialParams={{
					buscadorText: 'chat',
					filterName: 'Página principal',
					filter: [
						{
							name: 'Página principal',
							tag: 'all',
							icon: 'home-filled',
						},
						{
							name: 'Mensajes directos',
							tag: 'message',
							icon: 'messenger-outline',
						},
						{
							name: 'Espacios',
							tag: 'spaces',
							icon: 'person',
						},
						{
							name: 'Mensiones',
							tag: 'mensions',
							icon: 'alternate-email',
						},
					],
				}}
				options={{
					tabBarIcon: ({ color, focused }) => (
						<MaterialCommunityIcons
							name={focused ? 'message' : 'message-outline'}
							size={28}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				component={MeetScreen}
				name='TabMeetScreen'
				initialParams={{
					title: 'Reunirse',
				}}
				options={{
					tabBarIcon: ({ color, focused }) => (
						<MaterialCommunityIcons
							name={focused ? 'video' : 'video-outline'}
							size={28}
							color={color}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}
