import { FC } from "react";
import { EmailRules } from "common/FormRules";
import Auth from "_firebase/Auth";
import Routes from "common/Routes";
import "./EmailSignInForm.less";

// Packages
import { Button, Form, Input, Row } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const EmailSignInForm: FC = () => {
  const [form] = Form.useForm();
  const history = useHistory();

  const onFinish = (values: any) => {
    Auth.sendApplicantSignInLinkToEmail(
      values.email,
      () => {
        history.push(Routes.signIn);
      },
      (error) => {
        console.log("error");
      }
    );
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
