import './App.css';
import {useDispatch} from "react-redux";
import {USER_POSTS_FETCH_REQUESTED, USER_POSTS_FETCH_SUCCEEDED} from "./store/actions";
import {Button} from 'react-bootstrap'

function App() {
    const dispatch = useDispatch()

  const handleClick = () => {
    dispatch({
        type: USER_POSTS_FETCH_REQUESTED,
        payload: {
            userId: 1
        }
    })

  }

  return (
    <div className="app-container">
      <Button onClick={handleClick}>
        Get posts
      </Button>
    </div>
  );
}

export default App;
