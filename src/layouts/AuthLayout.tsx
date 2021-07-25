import { FC } from "react";
import "./AuthLayout.less";

// App Components
import WrittenTitle from "components/WrittenTitle/WrittenTitle";
import DisplayText from "components/DisplayText/DisplayText";
import {
  Mobile,
  Desktop,
  Phone,
  TabletAndDesktop,
} from "components/Breakpoints";

// Packages
import { Col, Row, Layout, Skeleton } from "antd";

const { Content } = Layout;

type Props = {
  message?: string;
};

const AuthTemplate: FC<Props> = ({ children, message }) => {
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
              {message && (
                <Row>
                  <DisplayText varient="light">{message}</DisplayText>
                </Row>
              )}
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
                <Col flex={"400px"}>{children}</Col>
                <Col flex="auto" />
              </TabletAndDesktop>
              <Phone>
                <Col xs={1} />
                <Col xs={22}>{children}</Col>
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
