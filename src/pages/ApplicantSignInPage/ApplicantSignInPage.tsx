import { FC } from "react";
import "./ApplicantSignInPage.less";

// App components
import DisplayText from "components/DisplayText/DisplayText";
import AuthLayout from "layouts/AuthLayout";
import EmailSignInForm from "./components/EmailSignInForm/EmailSignInForm";

// Pacakges
import { Row, Typography } from "antd";

const { Paragraph } = Typography;

const ApplicantSignInPage: FC = () => {
  return (
    <AuthLayout message="Continue your application">
      <Row>
        <DisplayText size="sm">Enter your email</DisplayText>
      </Row>
      <Row>
        <EmailSignInForm />
      </Row>
      <Row className="form-message">
        <Paragraph type="secondary">
          Your email is required in order authenticate and continue your
          application. Once submitted, you will recieve a link that will
          automatically sign you in.
        </Paragraph>
      </Row>
    </AuthLayout>
  );
};

export default ApplicantSignInPage;
