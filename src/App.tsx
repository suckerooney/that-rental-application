import { FC } from "react";
import "./App.less";

// App Components
import AuthProvider from "components/AuthProvider";
import AppRouter from "AppRouter";

const App: FC = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default App;
