import { FC } from "react";
import { EmailRules } from "common/FormRules";
import "./EmailSignInForm.less";

// Packages
import { Button, Form, Input, Row } from "antd";
import { MailOutlined } from "@ant-design/icons";

const EmailSignInForm: FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values.email);
  };

  return (
    <Form
      name="applicant-sign-in"
      form={form}
      className="email-sign-in-form"
      onFinish={onFinish}
    >
      <Form.Item name="email" rules={EmailRules} validateTrigger="onBlur">
        <Input
          size="large"
          addonBefore={<MailOutlined className="form-input-icon" />}
          style={{ width: "100%" }}
        />
      </Form.Item>
      <Form.Item>
        <Row justify="center">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default EmailSignInForm;
