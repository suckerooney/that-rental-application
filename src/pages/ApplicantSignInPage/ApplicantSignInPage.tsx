import { FC } from "react";
import "./ApplicantSignInPage.less";

// App components
import DisplayText from "components/DisplayText/DisplayText";
import AuthLayout from "layouts/AuthLayout";
import PhoneSignInForm from "./components/PhoneSignInForm/PhoneSignInForm";

// Pacakges
import { Row, Typography } from "antd";

const { Paragraph } = Typography;

const ApplicantSignInPage: FC = () => {
  return (
    <AuthLayout message="Continue your application">
      <Row>
        <DisplayText size="sm">Enter your phone number</DisplayText>
      </Row>
      <Row>
        <PhoneSignInForm />
      </Row>
      <Row>
        <Paragraph className="form-message" type="secondary">
          Your phone number is needed in order authenticate and continue your
          application. Once submitted, you will recieve a verification code.
        </Paragraph>
      </Row>
    </AuthLayout>
  );
};

export default ApplicantSignInPage;
