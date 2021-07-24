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

  static googleAuthenticate() {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  // Test
  static phoneAuthenticate() {
    var applicationVerifier = new firebase.auth.RecaptchaVerifier(
      "phone-sign-in-button",
      {
        size: "invisible",
      }
    );
    firebase
      .auth()
      .signInWithPhoneNumber("+19999999999", applicationVerifier)
      .then((confirmationResult) => {
        var verificationCode = window.prompt(
          "Please enter the verification " +
            "code that was sent to your mobile device."
        );
        return confirmationResult.confirm(verificationCode!);
      });
  }

  static signOut() {
    firebase.auth().signOut();
  }
}

export default Auth;
