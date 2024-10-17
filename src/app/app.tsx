'use client';

import React, { useState } from 'react';
//import { useDispatch } from 'react-redux';
//import { useLocation, useNavigate } from 'react-router';
//import Image from 'next/image';
import Projects from '@/page/projects/page';
import { Sidebar } from '@/widgets/sidebar';
import { Modal } from '@/widgets/modal/model';
import { SettingsForm } from '@/widgets/settings-form';

export default function App() {
	const [showSettingsModal, setSettingsModal] = useState(false);
	return (
		<>
			<Sidebar onClick={() => setSettingsModal(true)} />
			<Projects />
			{showSettingsModal && (
				<Modal
					title={'Add new project'}
					onClose={() => setSettingsModal(false)}
				>
					<SettingsForm />
				</Modal>
			)}
		</>
	);
}
