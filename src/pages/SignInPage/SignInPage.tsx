import "./SignInPage.less";
import AuthLayout from "../../layouts/AuthLayout";
import DisplayText from "../../components/DisplayText/DisplayText";
import { FC } from "react";
import { Row, Typography, Divider } from "antd";
import GoogleButton from "react-google-button";
import SignInForm from "./components/SignInForm/SignInForm";

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
