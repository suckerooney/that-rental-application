import { FC, useState } from "react";
import "./SignInForm.less";
import Routes from "../../../../common/Routes";
import { EmailRules, PasswordRules } from "../../../../common/FormRules";
import { Button, Row, Form, Input, Spin, Typography } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Text } = Typography;

enum FormFieldNames {
  email = "email",
  password = "password",
}

const mockSignIn = async (values: SignInValues): Promise<string | null> => {
  console.log(
    `Signing with these creds \nemail: ${values.email}\npassword: ${values.password}`
  );
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return "Invalid email or password";
};
const SignInForm: FC = () => {
  const [form] = Form.useForm<SignInValues>();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>();

  const onFinish = async (values: SignInValues) => {
    setLoading(true);
    setErrorMessage(null);
    let response = await mockSignIn(values);
    if (response) {
      setErrorMessage(response);
      setLoading(false);
      form.setFieldsValue({ password: undefined });
      form.getFieldInstance(FormFieldNames.password).focus();
    } else {
      // Sign In successful, redirect
    }
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
