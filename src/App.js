import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {LOGIN_REQUEST, LOGOUT, USER_POSTS_FETCH_REQUESTED, USER_POSTS_FETCH_SUCCEEDED} from "./store/actions";
import {Button} from 'react-bootstrap'

function App() {
    const dispatch = useDispatch()
    const isLoginPending = useSelector((state) => state.user.isLoginPending)
    const error = useSelector((state) => state.user.error)
    const token = useSelector((state) => state.user.token)
    const filesUploadingProgress = useSelector(
        (state) => state.app.filesUploadingProgress
    )

  const handleClick = () => {
    dispatch({
        type: USER_POSTS_FETCH_REQUESTED,
        payload: {
            userId: 1
        }
    })

  }
    const handleLoginClick = () => {
        dispatch({
            type: LOGIN_REQUEST,
            payload: {
                username: 'user1',
                password: 'user1password',
            },
        })
    }
    const handleLogoutClick = () => {
        dispatch({ type: LOGOUT })
    }

  return (
    <div className="app-container">
      <Button onClick={handleClick}>
        Get posts
      </Button>
        <div className="app__login-container">
            <Button onClick={handleLoginClick}>Log in</Button>
            <Button onClick={handleLogoutClick}>Log out</Button>
            {isLoginPending && <p>Logging in...</p>}
            {error && <p>Error: {error}</p>}
            {token && <p>{token}</p>}
        </div>
    </div>
  );
}

export default App;
