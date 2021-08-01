import { FC } from "react";
import { Button, Row } from "antd";
import Auth from "_firebase/Auth";

const ApplicantPage: FC = () => (
  <Row justify="center">
    <p>Start your application</p>
    <Button onClick={() => Auth.signOut()}>Sign Out</Button>
  </Row>
);

export default ApplicantPage;
