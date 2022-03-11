import React, { useState, useEffect } from "react";

function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  function register(e) {
    if(password!==confirmPass) {
        alert("passwords not matched");
    }
    else if(name==='' || email==='' ||password ==='') {
        alert("All fields are required");
    }
    else {
        const user = {name, email, password};
        console.log(user);
    }
  }

  return (
    <div className="mt-3">
      <div className="row justify-content-center">
        <div className="col-md-5">
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
            <button onClick={register} className="btn mt-3">REGISTER</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterScreen;
