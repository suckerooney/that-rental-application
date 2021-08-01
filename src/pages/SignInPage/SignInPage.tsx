import { FC } from "react";
import Auth from "_firebase/Auth";
import "./SignInPage.less";

// App components
import AuthLayout from "layouts/AuthLayout/AuthLayout";
import DisplayText from "components/DisplayText/DisplayText";

// Page components
import SignInForm from "./components/SignInForm/SignInForm";

// Pacakges
import { Row, Typography, Divider } from "antd";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
import Routes from "common/Routes";

const { Text } = Typography;

const SignInPage: FC = () => {
  return (
    <AuthLayout message="Automate your rental application">
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
        <GoogleButton
          onClick={Auth.googleAuthenticate}
          className="google-button"
        />
      </Row>

      <Row justify="center" className="continue-application-button">
        <Link to={Routes.applicantSignIn}>
          <b>Applicant? </b> Continue your application here.
        </Link>
      </Row>
    </AuthLayout>
  );
};

export default SignInPage;
