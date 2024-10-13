import { FC } from 'react';

import styles from './modal.module.css';

import { TModalUIProps } from './type';
import { ModalOverlayUI } from '../../modal-overlay';

export const ModalUI: FC<TModalUIProps> = ({ title, onClose, children }) => (
	<>
		<div className={styles.modal} data-cy='modal'>
			<div className={styles.header}>
				<h3 className={`${styles.title} text text_type_main-large`}>{title}</h3>
				<button
					className={styles.button}
					type='button'
					data-cy='modal-close'
				></button>
			</div>
			<div className={styles.content}>{children}</div>
		</div>
		<ModalOverlayUI onClick={onClose} />
	</>
);
