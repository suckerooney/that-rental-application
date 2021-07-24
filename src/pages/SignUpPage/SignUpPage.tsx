import { FC } from "react";
import "./SignUpPage.less";

// App Components
import DisplayText from "components/DisplayText/DisplayText";
import AuthLayout from "layouts/AuthLayout";

// Page Components
import SignUpForm from "./components/SignUpForm/SignUpForm";

// Packages
import { Row, Typography, Divider } from "antd";
import GoogleButton from "react-google-button";

const { Text } = Typography;

const SignUpPage: FC = () => {
  return (
    <AuthLayout>
      <Row>
        <DisplayText>Sign up</DisplayText>
      </Row>
      <Row>
        <SignUpForm />
      </Row>
      <Row align="middle">
        <Divider>
          <Text type="secondary">Or</Text>
        </Divider>
      </Row>
      <Row justify="center">
        <GoogleButton label="Sign up with Google" className="google-button" />
      </Row>
    </AuthLayout>
  );
};

export default SignUpPage;
