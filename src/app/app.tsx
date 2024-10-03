import React from 'react';
//import { useDispatch } from 'react-redux';
//import { useLocation, useNavigate } from 'react-router';
//import Image from 'next/image';
import { Provider } from 'react-redux';
import { store } from '../shared/model/store';
import Projects from '@/pages/projects/page';

export default function App() {
	return (
		<React.StrictMode>
			<Provider store={store}>
				<Projects />
			</Provider>
		</React.StrictMode>
	);
}
