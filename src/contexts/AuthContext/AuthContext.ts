import { createContext } from "react";
import AuthType from "common/AuthType";

const AuthContext = createContext<Auth>({ type: AuthType.none });

export default AuthContext;
