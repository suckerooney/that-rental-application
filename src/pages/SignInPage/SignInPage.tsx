import { FC } from "react";
import "./SignInPage.less";

// App components
import AuthLayout from "layouts/AuthLayout";
import DisplayText from "components/DisplayText/DisplayText";

// Page components
import SignInForm from "./components/SignInForm/SignInForm";

// Pacakges
import { Row, Typography, Divider } from "antd";
import GoogleButton from "react-google-button";

const { Text } = Typography;

const SignInPage: FC = () => {
  return (
    <AuthLayout>
      <Row>
        <DisplayText>Sign in</DisplayText>
      </Row>
      <Row>
        <SignInForm />
      </Row>
      <Row align="middle">
        <Divider>
          <Text type="secondary">Or</Text>
        </Divider>
      </Row>
      <Row justify="center">
        <GoogleButton className="google-button" />
      </Row>
    </AuthLayout>
  );
};

export default SignInPage;
