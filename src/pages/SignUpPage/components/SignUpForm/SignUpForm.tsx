import { FC, useState } from "react";
import "./SignUpForm.less";
import Routes from "../../../../common/Routes";
import { Link } from "react-router-dom";
import { Button, Row, Typography, Form, Input, Spin } from "antd";
import {
  NameRules,
  EmailRules,
  PasswordCreationRules,
  ConfirmPasswordRules,
} from "../../../../common/FormRules";
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

const mockSignUp = async (values: SignUpValues): Promise<string | null> => {
  console.log(
    `Signing up with values \nname: ${values.name}\nemail: ${values.email}\npassword: ${values.password}`
  );
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return "Email already in use";
};

const SignInForm: FC = () => {
  const [form] = Form.useForm<SignUpValues>();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>();

  const onFinish = async (values: SignUpValues) => {
    setLoading(true);
    setErrorMessage(null);
    let response = await mockSignUp(values);
    if (response) {
      setErrorMessage(response);
      setLoading(false);
      form.getFieldInstance(FormFieldNames.email).select();
    } else {
      // Sign up successful, redirect
    }
  };

  return (
    <Form
      name="sign-up"
      form={form}
      className="sign-up-form"
      onFinish={onFinish}
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
