import "./AuthLayout.less";
import { FC } from "react";
import { Col, Row, Layout, Skeleton } from "antd";
import WrittenTitle from "../components/WrittenTitle/WrittenTitle";
import { Mobile, Desktop } from "../components/Breakpoints";
import DisplayText from "../components/DisplayText/DisplayText";

const { Content } = Layout;

const AuthTemplate: FC = (props) => {
  return (
    <Layout>
      <Content>
        <Row>
          <Desktop>
            <Col flex={"500px"} className="side-content">
              <Row>
                <WrittenTitle
                  text="That Rental Application"
                  varient="light"
                  level={3}
                />
              </Row>
              <Row>
                <DisplayText varient="light">
                  Automate your rental application
                </DisplayText>
              </Row>
              <Row>
                <Skeleton active paragraph={{ rows: 10 }} />
              </Row>
            </Col>
          </Desktop>
          <Col flex="auto" className="main-content">
            <Mobile>
              <Row justify="center" className="title">
                <WrittenTitle
                  text="That Rental Application"
                  varient="dark"
                  level={3}
                />
              </Row>
            </Mobile>
            {props.children}
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default AuthTemplate;
