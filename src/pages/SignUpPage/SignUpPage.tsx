// My components
import AppTitle from "../../components/AppTitle/AppTitle";

import "./SignUpPage.less";
import AuthLayout from "../../layouts/AuthLayout";
import Routes from "../../Routes";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Typography } from "antd";

const { Text } = Typography;

const SignUpPage: FC = () => (
  <AuthLayout>
    <Row justify="center">
      <AppTitle />
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
  </AuthLayout>
);

export default SignUpPage;
