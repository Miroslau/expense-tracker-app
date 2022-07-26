const authConfiguration = [
  {
    label: "Email Address",
    isInvalid: "emailIsInvalid",
    value: "enteredEmail",
    name: "email",
    isLogin: true,
    isRegister: true,
    textInputConfig: {
      keyboardType: "email-address",
      secureTextEntry: false,
    },
  },
  {
    label: "Confirm Email Address",
    isInvalid: "emailsDontMatch",
    name: "confirmEmail",
    value: "enteredConfirmEmail",
    isRegister: true,
    textInputConfig: {
      keyboardType: "email-address",
      secureTextEntry: false,
    },
  },
  {
    label: "Password",
    isInvalid: "passwordIsInvalid",
    name: "password",
    value: "enteredPassword",
    isLogin: true,
    isRegister: true,
    textInputConfig: {
      keyboardType: "default",
      secureTextEntry: true,
    },
  },
  {
    label: "Confirm Password",
    isInvalid: "passwordsDontMatch",
    name: "confirmPassword",
    value: "enteredConfirmPassword",
    isRegister: true,
    textInputConfig: {
      keyboardType: "default",
      secureTextEntry: true,
    },
  },
];

export default authConfiguration;
