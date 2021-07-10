// My components
import WrittenTitle from "../../components/WrittenTitle/WrittenTitle";

import "./SignUpPage.less";
import AuthLayout from "../../layouts/AuthLayout";
import Routes from "../../Routes";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Typography } from "antd";
import GoogleButton from "react-google-button";

const { Text } = Typography;

const SignUpPage: FC = () => (
  <AuthLayout>
    <Row justify="center">
      <WrittenTitle text="Sign up" level={3} />
    </Row>
    <Row justify="center">
      <Text>Sign Up!</Text>
    </Row>
    <Row justify="center">
      <Link to={Routes.signIn}>
        <Button>
          <Text>Sign In Here</Text>
        </Button>
      </Link>
    </Row>
    <Row justify="center">
      <GoogleButton className="google-button" label="Sign up with google" />
    </Row>
  </AuthLayout>
);

export default SignUpPage;
