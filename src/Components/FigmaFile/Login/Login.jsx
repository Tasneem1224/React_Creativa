import React from "react";
import "./Login.css";
import Image01 from "./google.png";
import Image02 from "./facebook.png";
import Image0 from "./Group 1.png";
import logo from "./Logo.png";

function LoginForm() {
  return (
    <div className="login-container">
      <div className="login-form">
        <img className="logo2" src={logo} alt="" />

        <p className="p10">Log in</p>
        <p className="p20">Don’t have an ccount? Sign up </p>

        <div className="social-buttons">
          <button className="social-button facebook">
            <img className="socialimg" src={Image01} alt="" />
            Login with Facebook
          </button>
          <button className="social-button google">
            <img className="socialimg" src={Image02} alt="" />
            Login with Google
          </button>
        </div>
        {/***************************************************************************************/}
        <div className="divider">
          <span>OR</span>
        </div>

        <form className="form">
          <div className="form-group">
            <label className="la00" >Your email</label>
            <br />
            <input type="email" name="email" required />
          </div>
          <div className="form-group">
            <label className="la00">Your password</label>
            <label >
              <img className="hideimg2" src={Image0} alt="" />
              {"    "}
              Hide
            </label>
            <br />
            <input type="password" name="password" required />
            <p className="pass">
              <u>Forget your password </u>
            </p>
          </div>
          <button className="logbu" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
