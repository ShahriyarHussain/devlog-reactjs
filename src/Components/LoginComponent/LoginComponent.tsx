import "./Login.css";
import React from "react";

function LoginComponent() {
  return (
    <div className="Section-Header Flex-Col">
      <div className="Title-Text">Log In</div>
      <form className="Flex-Col">
        <label>Email</label>
        <input className="Input" />
        <label>Password</label>
        <input className="Input" />
        <button>Log In</button>
      </form>
      <div>
        <p>
          If you don't have account then,
          <strong>click here to create one!</strong>
        </p>
        <p>Forgot Password ?</p>
      </div>
    </div>
  );
}

export default LoginComponent;
