import "./AuthTemplate.less";
import { FC } from "react";
import { Col, Row, Layout } from "antd";

const { Content } = Layout;

const AuthTemplate: FC = (props) => (
  <Layout>
    <Content>
      <Row>
        <Col xs={0} lg={10} className="side-content"></Col>
        <Col xs={24} lg={14} className="main-content">
          {props.children}
        </Col>
      </Row>
    </Content>
  </Layout>
);

export default AuthTemplate;
