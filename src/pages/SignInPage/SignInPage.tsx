import "./SignInPage.less";
import AuthLayout from "../../layouts/AuthLayout";
import Routes from "../../common/Routes";
import DisplayText from "../../components/DisplayText/DisplayText";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Form, Input, Typography, Divider, Spin } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import GoogleButton from "react-google-button";
import { EmailRules, PasswordRules } from "../../common/FormRules";

const { Text } = Typography;

// Delete
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const SignInPage: FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>();

  const onFinish = async (values: any) => {
    setLoading(true);
    setError(null);
    console.log("Received values of form: ", values);
    await delay(3000);
    setLoading(false);
    form.setFieldsValue({ password: "" });
    setError("Invalid email or password");
  };

  return (
    <AuthLayout>
      <Row justify="center">
        <Form
          name="sign-in"
          form={form}
          className="sign-in-form"
          onFinish={onFinish}
        >
          <Form.Item>
            <DisplayText>Sign in</DisplayText>
          </Form.Item>
          <Form.Item name="email" validateTrigger="onBlur" rules={EmailRules}>
            <Input
              addonBefore={<MailOutlined className="form-input-icon" />}
              placeholder="Email"
              disabled={loading}
            />
          </Form.Item>
          <Form.Item name="password" rules={PasswordRules}>
            <Input.Password
              addonBefore={<LockOutlined className="form-input-icon" />}
              placeholder="Password"
              disabled={loading}
            />
          </Form.Item>
          <Form.Item>
            <Link to={Routes.signIn}>Forgot Password?</Link>
          </Form.Item>
          {error && (
            <Row justify="center">
              <Text className="error-message" type="danger">
                {error}
              </Text>
            </Row>
          )}
          <Form.Item>
            <Spin spinning={loading} className="sign-in-form-button" />
            {!loading && (
              <Button
                type="primary"
                htmlType="submit"
                className="sign-in-form-button"
              >
                Sign In
              </Button>
            )}
            Or <Link to={Routes.signUp}>Sign up here</Link>
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
