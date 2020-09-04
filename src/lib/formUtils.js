export const UPDATE_FORM = "UPDATE_FORM";

/**
 * Triggered every time the value of the form changes
 */
export const onInputChange = (name, value, dispatch, formState) => {
  dispatch({
    type: UPDATE_FORM,
    data: {
      name,
      value,
      hasError: false,
      error: "",
      touched: false,
      isFormValid: true,
    },
  });
};
