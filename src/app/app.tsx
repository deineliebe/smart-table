import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";


const App = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const background = location.state?.background;
    const dispatch = useDispatch();
    //const isAuthorized = useSelector(getIsAuthorized);
  
    /*useEffect(() => {
      dispatch(getIngredientsList());
      if (!isAuthorized) dispatch(getUserData());
    }, []);*/
    
    return (
      <div>
      </div>
    );
  };
  
  export default App;