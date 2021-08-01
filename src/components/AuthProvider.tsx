import { FC, useState, useEffect } from "react";
import AuthType from "common/AuthType";
import AuthContext from "contexts/AuthContext/AuthContext";
import StorageKeys from "common/StorageKeys";
import firebase from "_firebase/firebase";

const AuthProvider: FC = ({ children }) => {
  const [auth, setAuth] = useState<Auth>({
    type: AuthType.none,
    loading: true,
  });

  const determineUserAuth = (user: firebase.User): void => {
    const _user: User = { name: user.displayName, id: user.uid };
    let authType: AuthType;

    if (!user.emailVerified) {
      authType = AuthType.email_unverified;
      user.sendEmailVerification();
    } else if (localStorage.getItem(StorageKeys.isLandlord)) {
      authType = AuthType.landlord;
    } else {
      authType = AuthType.applicant;
    }

    setAuth({ type: authType, user: _user });
  };

  // Auth change effect
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        determineUserAuth(user);
      } else {
        setAuth({ type: AuthType.none });
      }
    });

    return () => {
      unsubscribe();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
