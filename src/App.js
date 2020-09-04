import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="title">Sign Up</h1>
      <form>
        <div className="input_wrapper">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="input_wrapper">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="input_wrapper">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="input_wrapper">
          <label htmlFor="mobile">Mobile:</label>
          <input type="text" name="mobile" id="mobile" />
        </div>
        <div className="input_wrapper">
          <label className="toc">
            <input type="checkbox" name="terms" /> Accept terms and conditions
          </label>
        </div>
        <div className="input_wrapper">
          <input className="submit_btn" type="submit" value="Sign Up" />
        </div>
      </form>
    </div>
  );
}

export default App;
