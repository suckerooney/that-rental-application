import { FC, createContext, useState } from "react";

type User = {
  name?: string;
  id: string;
};

type Auth = {
  user?: User;
  type: "none" | "email-unverified" | "landlord" | "applicant";
};

const defaultAuth: Auth = { type: "none" };
export const AuthContext = createContext<Auth>(defaultAuth);

const AuthProvider: FC = ({ children }) => {
  const [auth, setAuth] = useState<Auth>(defaultAuth);
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
