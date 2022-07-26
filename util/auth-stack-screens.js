import LoginScreen from "../screens/login-screen/login-screen";
import SignupScreen from "../screens/signup-screen/signup-screen";

const AUTH_STACK_SCREEN = [
  {
    component: LoginScreen,
    name: "Login",
    options: {
      headerShown: false,
    },
  },
  {
    component: SignupScreen,
    name: "Signup",
    options: {
      headerShown: false,
    },
  },
];

export default AUTH_STACK_SCREEN;
