import { FC } from "react";
import { Button, Row } from "antd";
import Auth from "../../firebase/Auth";

const ApplicationsPage: FC = () => (
  <Row justify="center">
    <Button onClick={() => Auth.signOut()}>Sign Out</Button>
  </Row>
);

export default ApplicationsPage;
