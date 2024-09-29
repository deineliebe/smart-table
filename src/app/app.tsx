import React from 'react';
//import { useDispatch } from 'react-redux';
//import { useLocation, useNavigate } from 'react-router';
//import Image from 'next/image';
import { Provider } from 'react-redux';
import { store } from './store';
import Projects from '@/pages/projects/page';

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
		<React.StrictMode>
			<Provider store={store}>
				<Projects />
			</Provider>
		</React.StrictMode>
	);
}
