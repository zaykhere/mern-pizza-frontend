import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { registerUser } from "../actions/userActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";

function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const registerState = useSelector(state=>state.registerUserReducer);
  const {error, loading, success} = registerState;

  const dispatch = useDispatch();

  useEffect(() => {
    if(success) {
      window.location.href="/login";
    }
  }, [success])
  

  function register(e) {
    if(password!==confirmPass) {
        alert("passwords not matched");
       
    }
    else if(name==='' || email==='' ||password ==='') {
        alert("All fields are required");
    }
    else {
        const user = {name, email, password};
        dispatch(registerUser(user));
    }
  }

  return (
    <div className="mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5 shadow p-3 mb-5 bg-body rounded">
          {loading && (<Loading />)}
          {success && (<Success success="You have successfully registered!" />) }
          {error && (<Error error={error} />)}
          <h2 className="text-center"> Register With Us!</h2>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              value={name}
              required
              onChange={(e)=> {setName(e.target.value)}}
            />
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              value={email}
              required
              onChange={(e)=> {setEmail(e.target.value)}}
            />
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Confirm password..."
              className="form-control"
              value={confirmPass}
              required
              onChange={(e) => {
                setConfirmPass(e.target.value);
              }}
            />
            <button onClick={register} className="user-btn btn mb-3 mt-3">REGISTER</button>
            <a className="mt-3" href="/login"> Click here to login </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterScreen;
