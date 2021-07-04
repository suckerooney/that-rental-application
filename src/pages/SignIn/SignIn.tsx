import { FC } from "react";
import { Col, Row } from "antd";
import Layout, { Content } from "antd/lib/layout/layout";

// styles
import './SignIn.less';


export const SignIn: FC = () => (
    <Layout>
        <Content>
            <Row>
                <Col xs={0} lg={10}>
                    <div className='left-content'></div>
                </Col>
                <Col xs={24} lg={14}>
                    <span className='title'>That Rental Application</span>
                </Col>
            </Row>
        </Content>
    </Layout>
);