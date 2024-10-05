import React from 'react';
//import { useDispatch } from 'react-redux';
//import { useLocation, useNavigate } from 'react-router';
//import Image from 'next/image';
import Projects from '@/pages/projects/page';
import { client } from '@/shared/api/projects';

export default function App() {
	client.connect();

	client.query(`Select * from projects`, (err: any, res: any) => {
		if (!err) {
			console.log('yes');
		} else {
			console.log('no');
		}
	});
	return (
		<React.StrictMode>
			<Projects />
		</React.StrictMode>
	);
}
