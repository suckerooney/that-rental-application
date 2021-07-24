import { FC, useState, useEffect } from "react";
import AuthType from "common/AuthType";
import AuthContext from "contexts/AuthContext/AuthContext";
import firebase from "_firebase/firebase";

const AuthProvider: FC = ({ children }) => {
  const defaultAuth: Auth = { type: AuthType.none };
  const [auth, setAuth] = useState<Auth>(defaultAuth);

  const determineUserAuth = (user: firebase.User): void => {
    const _user: User = { name: user.displayName, id: user.uid };
    let authType: AuthType;

    console.log(user.providerId);

    if (!user.emailVerified) {
      authType = AuthType.email_unverified;
    } else {
      authType = AuthType.landlord;
    }

    setAuth({ type: authType, user: _user });
  };

  // Auth change effect
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        determineUserAuth(user);
      } else {
        setAuth(defaultAuth);
      }
    });

    return () => unsubscribe();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
