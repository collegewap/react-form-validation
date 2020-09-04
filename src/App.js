import React, { useReducer } from "react";
import "./App.css";
import { UPDATE_FORM, onInputChange } from "./lib/formUtils";

/**
 * The initial state of the form
 * value: stores the value of the input field
 * touched: indicates whether the user has tried to input anything in the field
 * hasError: determines whether the field has error.
 *           Defaulted to true since all fields are mandatory and are empty on page load.
 * error: stores the error message
 * isFormValid: Stores the validity of the form at any given time.
 */
const initialState = {
  name: { value: "", touched: false, hasError: true, error: "" },
  email: { value: "", touched: false, hasError: true, error: "" },
  password: { value: "", touched: false, hasError: true, error: "" },
  mobile: { value: "", touched: false, hasError: true, error: "" },
  terms: { value: false, touched: false, hasError: true, error: "" },
  isFormValid: false,
};

/**
 * Reducer which will perform form state update
 */
const formsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      const {
        name,
        value,
        hasError,
        error,
        touched,
        isFormValid,
      } = action.data;
      return {
        ...state,
        // update the state of the particular field,
        // by retaining the state of other fields
        [name]: { ...state[name], value, hasError, error, touched },
        isFormValid,
      };
    default:
      return state;
  }
};

function App() {
  const [formState, dispatch] = useReducer(formsReducer, initialState);

  return (
    <div className="App">
      <h1 className="title">Sign Up</h1>
      <form>
        <div className="input_wrapper">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formState.name.value}
            onChange={(e) => {
              onInputChange("name", e.target.value, dispatch, formState);
            }}
          />
        </div>
        <div className="input_wrapper">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formState.email.value}
          />
        </div>
        <div className="input_wrapper">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formState.password.value}
          />
        </div>
        <div className="input_wrapper">
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="text"
            name="mobile"
            id="mobile"
            value={formState.mobile.value}
          />
        </div>
        <div className="input_wrapper">
          <label className="toc">
            <input
              type="checkbox"
              name="terms"
              checked={formState.terms.value}
            />
            Accept terms and conditions
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
