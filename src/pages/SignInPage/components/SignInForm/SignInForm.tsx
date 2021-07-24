import { FC, useState } from "react";
import Routes from "common/Routes";
import { EmailRules, PasswordRules } from "common/FormRules";
import Auth from "_firebase/Auth";
import "./SignInForm.less";

// Packages
import { Button, Row, Form, Input, Spin, Typography } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Text } = Typography;

enum FormFieldNames {
  email = "email",
  password = "password",
}

const SignInForm: FC = () => {
  const [form] = Form.useForm<SignInValues>();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>();

  const onFinish = (values: SignInValues) => {
    setLoading(true);
    setErrorMessage(null);

    Auth.signIn(values, (error: string) => {
      setErrorMessage(error);
      setLoading(false);
      form.setFieldsValue({ password: undefined });
      form.getFieldInstance(FormFieldNames.password).focus();
    });
  };

  return (
    <Form
      name="sign-in"
      form={form}
      className="sign-in-form"
      onFinish={onFinish}
    >
      <Form.Item
        name={FormFieldNames.email}
        validateTrigger="onBlur"
        rules={EmailRules}
      >
        <Input
          addonBefore={<MailOutlined className="form-input-icon" />}
          placeholder="Email"
          disabled={loading}
        />
      </Form.Item>
      <Form.Item name={FormFieldNames.password} rules={PasswordRules}>
        <Input.Password
          addonBefore={<LockOutlined className="form-input-icon" />}
          placeholder="Password"
          disabled={loading}
        />
      </Form.Item>
      <Form.Item>
        <Link to={Routes.signIn}>Forgot Password?</Link>
      </Form.Item>
      {errorMessage && (
        <Row justify="center">
          <Text className="error-message" type="danger">
            {errorMessage}
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
    </Form>
  );
};

export default SignInForm;
