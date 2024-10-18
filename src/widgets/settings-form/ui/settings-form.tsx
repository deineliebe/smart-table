import { FC } from 'react';
import './settings-form.css';
import buttonStyles from '../../../shared/ui/button.module.css';
import modalStyles from '../../../shared/ui/modal.module.css';
import styles from '../../../shared/ui/styles.module.css';

const SettingsFormUI: FC = () => {
	const onTableButtonClick = (evt: React.MouseEvent) => {
		(evt?.target as HTMLElement)?.classList?.toggle(`${styles.blue}`);
		(evt?.target as HTMLElement)?.classList?.toggle(`${styles.white}`);
	};
	return (
		<>
			<form id='settings' name='settings' className='form-settings'>
				<p className='modal-settings-heading'>Table settings</p>
				<section className='modal-add-project-section'>
					<fieldset className={`${modalStyles['modal-field']}`}>
						<label className='form-settings-label'>Table column</label>
						<div id='resources' className='form-add-project-buttons-resources'>
							<button
								type='button'
								className={`${buttonStyles.button} ${buttonStyles['button-medium']} ${styles.blue} ${styles.isShadowed} ${styles.isClicked}`}
								onClick={onTableButtonClick}
							>
								Checkbox
							</button>
							<button
								type='button'
								className={`${buttonStyles.button} ${buttonStyles['button-medium']} ${styles.blue} ${styles.isShadowed} ${styles.isClicked}`}
								onClick={onTableButtonClick}
							>
								#
							</button>
							<button
								type='button'
								className={`${buttonStyles.button} ${buttonStyles['button-medium']} ${styles.blue} ${styles.isShadowed} ${styles.isClicked}`}
								onClick={onTableButtonClick}
							>
								Project name
							</button>
							<button
								type='button'
								className={`${buttonStyles.button} ${buttonStyles['button-medium']} ${styles.blue} ${styles.isShadowed} ${styles.isClicked}`}
								onClick={onTableButtonClick}
							>
								PM
							</button>
							<button
								type='button'
								className={`${buttonStyles.button} ${buttonStyles['button-medium']} ${styles.blue} ${styles.isShadowed} ${styles.isClicked}`}
								onClick={onTableButtonClick}
							>
								Status
							</button>
							<button
								type='button'
								className={`${buttonStyles.button} ${buttonStyles['button-medium']} ${styles.blue} ${styles.isShadowed} ${styles.isClicked}`}
								onClick={onTableButtonClick}
							>
								Last update
							</button>
							<button
								type='button'
								className={`${buttonStyles.button} ${buttonStyles['button-medium']} ${styles.blue} ${styles.isShadowed} ${styles.isClicked}`}
								onClick={onTableButtonClick}
							>
								Resources
							</button>
							<button
								type='button'
								className={`${buttonStyles.button} ${buttonStyles['button-medium']} ${styles.blue} ${styles.isShadowed} ${styles.isClicked}`}
								onClick={onTableButtonClick}
							>
								Project timeline
							</button>
							<button
								type='button'
								className={`${buttonStyles.button} ${buttonStyles['button-medium']} ${styles.blue} ${styles.isShadowed} ${styles.isClicked}`}
								onClick={onTableButtonClick}
							>
								Deadline
							</button>
							<button
								type='button'
								className={`${buttonStyles.button} ${buttonStyles['button-medium']} ${styles.blue} ${styles.isShadowed} ${styles.isClicked}`}
								onClick={onTableButtonClick}
							>
								Budget
							</button>
						</div>
					</fieldset>
					<fieldset>
						<label className='form-settings-label'>Column order</label>
					</fieldset>
					<fieldset>
						<label className='form-settings-label'>Amount</label>
					</fieldset>
					<fieldset>
						<label className='form-settings-label'>Date formate</label>
					</fieldset>
				</section>
				<div className={`${modalStyles['modal-footer']}`}>
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
