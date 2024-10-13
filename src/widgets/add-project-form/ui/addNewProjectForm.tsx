import { FC } from 'react';
import styles from '../../../shared/ui/button.module.css';

const AddNewFormUI: FC = ({}) => (
	<main className={styles.container}>
		<div>
			<p className='heading'>Add new project</p>
			<form>
				<label htmlFor='project_name'>Project name *</label>
				<input type='text' id='project_name' name='project_name' />
				<label htmlFor='pms'>Project manager (PM)</label>
				<div id='pms'>
					<button>Roger Vaccaro</button>
					<button>Tatiana Dias</button>
					<button>Leo Gouse</button>
				</div>
				<label htmlFor='resources'>Resources</label>
				<div id='resources'>
					<button>UX/UI Design</button>
					<button>Frontend</button>
					<button>Backend</button>
					<button>Full Stack</button>
					<button>Graphic Designer</button>
					<button>Web Designer</button>
					<button>QA</button>
				</div>
				<label htmlFor='timeline'>Project timeline</label>
				<div id='timeline'>
					<input type='text' id='type_of_timeline' name='type_of_timeline' />
					<input type='text' id='start_date' name='start_date' />
					<input type='text' id='end_date' name='end_date' />
				</div>
				<label htmlFor='estimation'>Type of timeline</label>
				<input type='text' id='estimation' name='estimation' />
				<button type='reset' className={styles['button-large']}>
					Cancel
				</button>
				<button
					type='submit'
					className={`${styles['button-large']} ${styles.blue}`}
				>
					Add project
				</button>
			</form>
		</div>
	</main>
);

export default AddNewFormUI;
