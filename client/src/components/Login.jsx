import React, { Component } from 'react';

 class Login extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
          
        <div className="col-4">
        <div className="login-purple-pink p-3 shadow-lg rounded">
            <div className="pt-3">
                <h2 className="text-white ">Sign In | Purple-Pink</h2>
            </div>

            <form className="mt-5">
                <div className="form-group">
                    <input type="email" 
                        className="form-control form-control-sm bg-light" 
                        placeholder="Email Id" />
                </div>

                <div className="form-group">
                    <input type="password" 
                        className="form-control form-control-sm bg-light" 
                        placeholder="Password" />
                </div>

                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="rememberCheckBox"/>
                    <label className="form-check-label text-light" for="rememberCheckBox">Remember me?</label>
                </div>

                <div className="mt-5">
                    <button className="btn btn-sm btn-light col">
                        Login
                    </button>
                </div>

                <div className="text-center mt-2">
                    <a href="#" className="text-warning">Forgot Password?</a>
                </div>
                
                <div className="mt-5">
                    <p className="text-white text-center">
                        Don't have an account?
                        <a href="#" className="text-warning">Click here to register</a>
                    </p>
                </div>
            </form>
        </div>
    </div>)
    }
  }
  

  export default Login;