// My components
import DisplayText from "../../components/DisplayText/DisplayText";

import "./SignUpPage.less";
import AuthLayout from "../../layouts/AuthLayout";
import Routes from "../../common/Routes";
import {
  NameRules,
  EmailRules,
  PasswordCreationRules,
  ConfirmPasswordRules,
} from "../../common/FormRules";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Typography, Form, Input, Divider } from "antd";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  LockFilled,
} from "@ant-design/icons";
import GoogleButton from "react-google-button";

const { Text, Paragraph } = Typography;

const SignUpPage: FC = () => {
  const onSubmit = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <AuthLayout>
      <Row justify="center">
        <Form name="sign-up" className="sign-up-form" onFinish={onSubmit}>
          <Form.Item>
            <DisplayText>Sign up</DisplayText>
          </Form.Item>
          <Form.Item name="name" validateTrigger="onBlur" rules={NameRules}>
            <Input
              addonBefore={<UserOutlined className="form-input-icon" />}
              type="text"
              placeholder="Name"
            />
          </Form.Item>
          <Form.Item name="email" validateTrigger="onBlur" rules={EmailRules}>
            <Input
              addonBefore={<MailOutlined className="form-input-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item name="password" rules={PasswordCreationRules}>
            <Input.Password
              addonBefore={<LockOutlined className="form-input-icon" />}
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="confirm-password"
            dependencies={["password"]}
            rules={ConfirmPasswordRules}
          >
            <Input.Password
              addonBefore={<LockFilled className="form-input-icon" />}
              placeholder="Confirm Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="sign-in-form-button"
            >
              Create Account
            </Button>
            Or <Link to={Routes.signIn}>Sign in here</Link>
          </Form.Item>
          <Form.Item>
            <Paragraph type="secondary">
              Creating an account means you’re okay with our{" "}
              <Link to={Routes.signUp}>Terms of Service</Link>, and{" "}
              <Link to={Routes.signUp}>Privacy Policy</Link>
            </Paragraph>
          </Form.Item>
          <Form.Item>
            <Divider>
              <Text type="secondary">Or</Text>
            </Divider>
          </Form.Item>
        </Form>
      </Row>
      <Row justify="center">
        <GoogleButton label="Sign up with Google" className="google-button" />
      </Row>
    </AuthLayout>
  );
};

export default SignUpPage;
