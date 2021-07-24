import { FC } from "react";
import Auth from "_firebase/Auth";

// Packages
import { Button, Row } from "antd";

const ApplicationsPage: FC = () => (
  <Row justify="center">
    <Button onClick={() => Auth.signOut()}>Sign Out</Button>
  </Row>
);

export default ApplicationsPage;
