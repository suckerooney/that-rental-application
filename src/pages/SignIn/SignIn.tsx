import { FC } from "react";
import { Col, Row } from "antd";
import Layout, { Content } from "antd/lib/layout/layout";

// styles
import './SignIn.scss';


export const SignIn: FC = () => (
    <Layout>
        <Content>
            <Row>
                <Col xs={0} lg={10}>
                    <div className='left-content'></div>
                </Col>
                <Col xs={24} lg={14}>
                    <div className='right-top-content'></div>
                    <div className='right-bottom-content'></div>
                </Col>
            </Row>
        </Content>
    </Layout>
);