import firebase from "./firebase";
import Routes from "common/Routes";
import StorageKeys from "common/StorageKeys";

class Auth {
  static signIn(values: SignInValues, errorCallback: (error: string) => void) {
    firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        localStorage[StorageKeys.isLandlord] = true;
      })
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
        localStorage[StorageKeys.isLandlord] = true;
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
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => {
        localStorage[StorageKeys.isLandlord] = true;
      });
  }

  static sendApplicantSignInLinkToEmail(
    email: string,
    successCallback: () => void,
    errorCallback: (error: string) => void
  ) {
    firebase
      .auth()
      .sendSignInLinkToEmail(email, {
        url: `${window.location.origin}${Routes.applicantAuthVerify}`,
        handleCodeInApp: true,
      })
      .then(() => {
        localStorage.setItem(StorageKeys.applicantEmail, email);
        successCallback();
      })
      .catch((error) => {
        console.log(error);
        errorCallback("Problem sending sign in link");
      });
  }

  static applicantSignInWithEmailLink(email: string) {
    const link = window.location.href;
    if (firebase.auth().isSignInWithEmailLink(link)) {
      firebase
        .auth()
        .signInWithEmailLink(email, link)
        .then((result) => {
          localStorage.removeItem(StorageKeys.applicantEmail);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  static signOut() {
    firebase.auth().signOut();
    localStorage.clear();
  }
}

export default Auth;
