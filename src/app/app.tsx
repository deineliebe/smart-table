import React from 'react';
//import { useDispatch } from 'react-redux';
//import { useLocation, useNavigate } from 'react-router';
//import Image from 'next/image';
import styles from './page.module.css';

export default function App() {
	//const navigate = useNavigate();
	//const location = useLocation();
	//const background = location.state?.background;
	//const dispatch = useDispatch();
	//const isAuthorized = useSelector(getIsAuthorized);

	/*useEffect(() => {
      dispatch(getIngredientsList());
      if (!isAuthorized) dispatch(getUserData());
    }, []);*/

	return (
		<div className={styles.page}>
			<main className={styles.main}></main>
			<footer className={styles.footer}>
				<span>Alvish Baldha</span>
				<span>© 2022 | All Rights Reserved</span>
			</footer>
		</div>
	);
}
