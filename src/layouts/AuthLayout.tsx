import "./AuthLayout.less";
import { FC } from "react";
import { Col, Row, Layout, Skeleton } from "antd";
import WrittenTitle from "../components/WrittenTitle/WrittenTitle";
import {
  Mobile,
  Desktop,
  Phone,
  TabletAndDesktop,
} from "../components/Breakpoints";
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
            <Row>
              <TabletAndDesktop>
                <Col flex="auto" />
                <Col flex={"400px"}>{props.children}</Col>
                <Col flex="auto" />
              </TabletAndDesktop>
              <Phone>
                <Col xs={1} />
                <Col xs={22}>{props.children}</Col>
                <Col xs={1} />
              </Phone>
            </Row>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default AuthTemplate;
