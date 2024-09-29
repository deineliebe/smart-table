import React from 'react';
//import { useDispatch } from 'react-redux';
//import { useLocation, useNavigate } from 'react-router';
//import Image from 'next/image';
import { Provider } from 'react-redux';
import { Projects } from '@/pages/projects';
import { store } from './store';

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
