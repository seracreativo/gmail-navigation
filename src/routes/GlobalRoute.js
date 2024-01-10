import React from 'react';
import AuthRoute from './AuthRoute';
import AppRoute from './AppRoute';

export default function GlobalRoute() {
	user = true;
	if (user) {
		return <AppRoute />;
	} else {
		return <AuthRoute />;
	}
}
