// Custom components
import AppTitle from "../../components/AppTitle/AppTitle";

import "./SignInPage.less";
import AuthLayout from "../../layouts/AuthLayout";
import Routes from "../../Routes";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Form, Input } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

const SignInPage: FC = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <AuthLayout>
      <Row justify="center">
        <AppTitle />
      </Row>
      <Row justify="center">
        <Form
          name="sign-in"
          className="sign-in-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Link to={Routes.signIn}>Forgot Password?</Link>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="sign-in-form-button"
            >
              Sign In
            </Button>
            Or <Link to={Routes.signUp}>Sign Up Here</Link>
          </Form.Item>
        </Form>
      </Row>
      <Row justify="center"></Row>
    </AuthLayout>
  );
};

export default SignInPage;
