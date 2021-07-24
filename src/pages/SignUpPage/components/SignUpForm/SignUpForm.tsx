import { FC, useState } from "react";
import Auth from "_firebase/Auth";
import Routes from "common/Routes";
import {
  NameRules,
  EmailRules,
  PasswordCreationRules,
  ConfirmPasswordRules,
} from "common/FormRules";
import "./SignUpForm.less";

// Packages
import { Link } from "react-router-dom";
import { Button, Row, Typography, Form, Input, Spin } from "antd";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  LockFilled,
} from "@ant-design/icons";

const { Text, Paragraph } = Typography;

enum FormFieldNames {
  name = "name",
  email = "email",
  password = "password",
  confirmPassword = "confirm-password",
}

const SignInForm: FC = () => {
  const [form] = Form.useForm<SignUpValues>();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>();

  const createAccount = (values: SignUpValues) => {
    setLoading(true);
    setErrorMessage(null);

    Auth.createAccount(values, (error) => {
      setErrorMessage(error);
      setLoading(false);
      form.getFieldInstance(FormFieldNames.email).select();
    });
  };

  return (
    <Form
      name="sign-up"
      form={form}
      className="sign-up-form"
      onFinish={createAccount}
    >
      <Form.Item
        name={FormFieldNames.name}
        validateTrigger="onBlur"
        rules={NameRules}
      >
        <Input
          addonBefore={<UserOutlined className="form-input-icon" />}
          type="text"
          placeholder="Name"
          disabled={loading}
        />
      </Form.Item>
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
      <Form.Item name={FormFieldNames.password} rules={PasswordCreationRules}>
        <Input.Password
          addonBefore={<LockOutlined className="form-input-icon" />}
          placeholder="Password"
          disabled={loading}
        />
      </Form.Item>
      <Form.Item
        name={FormFieldNames.confirmPassword}
        dependencies={["password"]}
        rules={ConfirmPasswordRules}
      >
        <Input.Password
          addonBefore={<LockFilled className="form-input-icon" />}
          placeholder="Confirm Password"
          disabled={loading}
        />
      </Form.Item>
      {errorMessage && (
        <Row justify="center">
          <Text className="error-message" type="danger">
            {errorMessage}
          </Text>
        </Row>
      )}
      <Form.Item>
        <Spin spinning={loading} className="sign-up-form-button" />
        {!loading && (
          <Button
            type="primary"
            htmlType="submit"
            className="sign-up-form-button"
          >
            Create Account
          </Button>
        )}
        Or <Link to={Routes.signIn}>Sign in here</Link>
      </Form.Item>
      <Form.Item>
        <Paragraph type="secondary">
          Creating an account means you’re okay with our{" "}
          <Link to={Routes.signUp}>Terms of Service</Link>, and{" "}
          <Link to={Routes.signUp}>Privacy Policy</Link>
        </Paragraph>
      </Form.Item>
    </Form>
  );
};

export default SignInForm;
