import firebase from "./firebase";
import Routes from "common/Routes";

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

  static googleAuthenticate() {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  // Test
  static applicantSignIn(
    email: string,
    successCallback: () => void,
    errorCallback: (error: string) => void
  ) {
    firebase
      .auth()
      .sendSignInLinkToEmail(email, {
        url: `http://localhost:3000/${Routes.applicantAuthVerify}`,
        handleCodeInApp: true,
      })
      .then(() => {
        window.localStorage.setItem("applicantEmail", email);
        successCallback();
      })
      .catch((error) => {
        console.log(error);
        errorCallback("Problem sending sign in link");
      });
  }

  static signOut() {
    firebase.auth().signOut();
  }
}

export default Auth;
