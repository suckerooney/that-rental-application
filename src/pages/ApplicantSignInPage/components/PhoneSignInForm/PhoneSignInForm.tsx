import { FC } from "react";
import { PhoneRules } from "common/FormRules";
import "./PhoneSignInForm.less";

// Packages
import { Button, Form, Input, Row, Typography } from "antd";

const { Text } = Typography;

const PhoneSignInForm: FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values.phone);
  };

  const formatPhoneNum = () => {
    let value: string = form.getFieldValue("phone").replace(/[^\d]/g, "");
    const length = value.length;

    if (length > 6) {
      value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
    } else if (length > 3) {
      value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
    }

    form.setFieldsValue({ phone: value });
  };

  return (
    <Form form={form} className="phone-form" onFinish={onFinish}>
      <Form.Item name="phone" rules={PhoneRules} validateTrigger="onBlur">
        <Input
          onChange={formatPhoneNum}
          size="large"
          addonBefore={<Text>+1</Text>}
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

export default PhoneSignInForm;
