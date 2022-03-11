import React, { useState } from "react";

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  

  function login() {
    if(email==='' || password ==='') {
        alert("All fields are required");
    }
    else {
        const user = {email, password};
        console.log(user);
    }
  }

  return (
    <div className="mt-3">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <h2 className="text-center"> Login your account! </h2>
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
            <button onClick={login} className="btn mt-3">LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
