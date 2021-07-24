import firebase from "./firebase";

class Auth {
  static signIn(values: SignInValues, errorCallback: (error: string) => void) {
    firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .catch(() => {
        errorCallback("Invalid email or password");
      });
  }

  static createAccount(
    values: SignUpValues,
    errorCallback: (error: string) => void
  ) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((authCred) => {
        authCred.user?.updateProfile({ displayName: values.name });
        authCred.user?.sendEmailVerification();
      })
      .catch((error) => {
        let message =
          error.code === "auth/email-already-in-use"
            ? "Email already in use"
            : "Invalid email";
        errorCallback(message);
      });
  }

  static signOut() {
    firebase.auth().signOut();
  }
}

export default Auth;
