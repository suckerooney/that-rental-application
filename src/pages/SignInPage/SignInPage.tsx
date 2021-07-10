import "./SignInPage.less";
import AuthLayout from "../../layouts/AuthLayout";
import Routes from "../../Routes";
import DisplayText from "../../components/DisplayText/DisplayText";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Form, Input, Typography, Divider } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import GoogleButton from "react-google-button";

const { Text } = Typography;

const SignInPage: FC = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <AuthLayout>
      <Row justify="center">
        <Form
          name="sign-in"
          className="sign-in-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item>
            <DisplayText>Sign In</DisplayText>
          </Form.Item>
          <Form.Item
            name="email"
            validateTrigger="onBlur"
            rules={[
              {
                required: true,
                message: "Please enter a valid email",
                type: "email",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="form-input-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input
              prefix={<LockOutlined className="form-input-icon" />}
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
          <Form.Item>
            <Divider>
              <Text type="secondary">Or</Text>
            </Divider>
          </Form.Item>
        </Form>
      </Row>
      <Row justify="center">
        <GoogleButton className="google-button" />
      </Row>
    </AuthLayout>
  );
};

export default SignInPage;
