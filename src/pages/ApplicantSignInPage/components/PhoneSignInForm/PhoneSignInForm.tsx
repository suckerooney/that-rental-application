import { FC } from "react";
import { PhoneRules } from "common/FormRules";
import "./PhoneSignInForm.less";

// Packages
import { Button, Form, Input, Row, Typography } from "antd";

const { Text } = Typography;

const PhoneSignInForm: FC = () => {
  return (
    <Form className="phone-form">
      <Form.Item name="phone" rules={PhoneRules}>
        <Input
          size="large"
          addonBefore={<Text>+1</Text>}
          style={{ width: "100%" }}
        />
      </Form.Item>
      <Form.Item>
        <Row justify="center">
          <Button className="submit-button" type="primary" htmlType="submit">
            Submit
          </Button>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default PhoneSignInForm;
