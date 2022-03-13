import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import { loginUser } from "../actions/userActions";
import Error from "../components/Error";
import Loading from "../components/Loading";

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const loginUserReducer = useSelector(state=>state.loginUserReducer);
  
  const {userInfo, loading, error} = loginUserReducer;

  useEffect(() => {
    if (userInfo && Object.entries(userInfo).length > 0) {
      navigate("/");
    }
  }, [userInfo])

  function login() {
    if(email==='' || password ==='') {
        alert("All fields are required");
    }
    else {
        const user = {email, password};
        dispatch(loginUser(user));
    }
  }

  return (
    <div className="mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5 shadow p-3 mb-5 bg-body rounded">
          <h2 className="text-center"> Login your account! </h2>
          {loading && (<Loading />)}
          {error && (<Error error={error} />)}
          <div className="mt-4">
            <input
              type="email"
              placeholder="Enter email..."
              className="form-control"
              value={email}
              required
              onChange={(e)=> {setEmail(e.target.value)}}
            />
            <input
              type="password"
              placeholder="Enter password.."
              className="form-control"
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button onClick={login} className="user-btn btn mb-3 mt-3">LOGIN</button>
            <a className="mt-3" href="/register"> Click here to Register </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
