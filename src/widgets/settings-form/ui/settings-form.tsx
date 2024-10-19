import { FC } from 'react';
import './settings-form.css';
import buttonStyles from '../../../shared/ui/button.module.css';
import formStyles from '../../../shared/ui/form.module.css';
import styles from '../../../shared/ui/styles.module.css';

const SettingsFormUI: FC = () => {
	const onTableButtonClick = (evt: React.MouseEvent) => {
		(evt?.target as HTMLElement)?.classList?.toggle(`${styles.blue}`);
		(evt?.target as HTMLElement)?.classList?.toggle(`${styles.white}`);
	};
	const onAmountClick = (evt: React.MouseEvent) => {
		document.body
			.querySelector(`.${formStyles['form-button-in-bar-active']}#amount`)
			?.classList.remove(`${formStyles['form-button-in-bar-active']}`);
		(evt?.target as HTMLElement)?.classList?.add(
			`${formStyles['form-button-in-bar-active']}`
		);
	};
	const onDateFormatClick = (evt: React.MouseEvent) => {
		document.body
			.querySelector(`.${formStyles['form-button-in-bar-active']}#date`)
			?.classList.remove(`${formStyles['form-button-in-bar-active']}`);
		(evt?.target as HTMLElement)?.classList?.add(
			`${formStyles['form-button-in-bar-active']}`
		);
	};
	return (
		<>
			<form id='settings' name='settings' className='form-settings'>
				<p className={`${formStyles['form-heading']} settings-heading`}>
					Table settings
				</p>
				<section className={`${formStyles['form-section']} settings-section`}>
					<fieldset className={`${formStyles['form-field']}`}>
						<label className={`${formStyles['form-label']}`}>
							Table column
						</label>
						<div id='resources' className='add-project-buttons-resources'>
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
					<fieldset className={`${formStyles['form-field']}`}>
						<label className={`${formStyles['form-label']}`}>
							Column order
						</label>
					</fieldset>
					<fieldset className={`${formStyles['form-field']}`}>
						<label className={`${formStyles['form-label']}`}>Amount</label>
						<div className={`${formStyles['form-buttons-bar']}`}>
							<button
								type='button'
								className={`${formStyles['form-button-in-bar']} ${formStyles['form-button-in-bar-active']} ${styles.isShadowed} ${styles.isClicked}`}
								id='amount'
								onClick={onAmountClick}
							>
								10.5k
							</button>
							<button
								type='button'
								className={`${formStyles['form-button-in-bar']} ${styles.isShadowed} ${styles.isClicked}`}
								id='amount'
								onClick={onAmountClick}
							>
								10,500
							</button>
						</div>
					</fieldset>
					<fieldset className={`${formStyles['form-field']}`}>
						<label className={`${formStyles['form-label']}`}>
							Date formate
						</label>
						<div className={`${formStyles['form-buttons-bar']}`}>
							<button
								type='button'
								className={`${formStyles['form-button-in-bar']} ${formStyles['form-button-in-bar-active']} ${styles.isShadowed} ${styles.isClicked}`}
								id='date'
								onClick={onDateFormatClick}
							>
								DD/MM/YYYY
							</button>
							<button
								type='button'
								className={`${formStyles['form-button-in-bar']} ${styles.isShadowed} ${styles.isClicked}`}
								id='date'
								onClick={onDateFormatClick}
							>
								MM/DD/YYYY
							</button>
							<button
								type='button'
								className={`${formStyles['form-button-in-bar']} ${styles.isShadowed} ${styles.isClicked}`}
								id='date'
								onClick={onDateFormatClick}
							>
								DD/MMM/YYYY
							</button>
						</div>
					</fieldset>
					<fieldset className='settings-checkbox-field'>
						<label className={`${styles.isClicked}`}>
							<input
								type='checkbox'
								className={`${styles['visually-hidden']}`}
								name='project'
								value='choose-header-type'
							></input>
							<span className='default-checkbox'></span>
						</label>
						<label className={`${formStyles['form-label']}`}>
							Sticky header
						</label>
					</fieldset>
				</section>
				<div className={`${formStyles['form-footer']}`}>
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
