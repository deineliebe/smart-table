import { FC } from 'react';
import './settings-form.css';
import buttonStyles from '../../../shared/ui/button.module.css';
//import inputStyles from '../../../shared/ui/input.module.css';
import styles from '../../../shared/ui/styles.module.css';

const SettingsFormUI: FC = () => {
	return (
		<>
			<form id='settings' name='settings' className='form-settings'>
				<p className='modal-add-project-heading'>Table settings</p>
				<section className='modal-add-project-section'>
					<label className='form-add-project-label'>Table column</label>
					<label className='form-add-project-label'>Column order</label>
					<label className='form-add-project-label'>Amount</label>
					<label className='form-add-project-label'>Date formate</label>
				</section>
				<div className={`${styles['modal-footer']}`}>
					<button
						type='reset'
						className={`${buttonStyles.button} ${buttonStyles['button-large']} ${styles.white}`}
					>
						Reset
					</button>
					<button
						type='submit'
						className={`${buttonStyles.button} ${buttonStyles['button-large']} ${styles.blue}`}
					>
						Apply
					</button>
				</div>
			</form>
		</>
	);
};

export default SettingsFormUI;
