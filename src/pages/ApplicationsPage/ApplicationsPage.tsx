import { FC, useContext } from "react";
import Auth from "_firebase/Auth";
import AuthContext from "contexts/AuthContext/AuthContext";

// Packages
import { Button, Row } from "antd";

const ApplicationsPage: FC = () => {
  const auth = useContext(AuthContext);
  return (
    <Row justify="center">
      <p>Hello you are a {auth.type}</p>
      <Button onClick={() => Auth.signOut()}>Sign Out</Button>
    </Row>
  );
};

export default ApplicationsPage;
