// Custom components
import AppTitle from "../../components/AppTitle/AppTitle";

import "./SignInPage.less";
import AuthLayout from "../../layouts/AuthLayout";
import Routes from "../../Routes";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Typography } from "antd";

const { Text } = Typography;

const SignInPage: FC = () => (
  <AuthLayout>
    <Row justify="center">
      <AppTitle />
    </Row>
    <Row justify="center">
      <Text>Sign In!</Text>
    </Row>
    <Row justify="center">
      <Link to={Routes.signUp}>
        <Button>
          <Text>Sign Up Here</Text>
        </Button>
      </Link>
    </Row>
  </AuthLayout>
);

export default SignInPage;
