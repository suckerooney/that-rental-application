// My components
import AppTitle from '../../common/AppTitle/AppTitle';

import './SignUpPage.less';
import AuthTemplate from "../templates/AuthTemplate/AuthTemplate";
import RouteNames from '../../common/RouteNames';
import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Typography } from "antd";


const { Text } = Typography;

const SignUpPage: FC = () => (
    <AuthTemplate>
        <Row justify='center'>
            <AppTitle />
        </Row>
        <Row justify='center'>
            <Text>Sign Up!</Text>
        </Row>
        <Row justify='center'>
            <Link to={RouteNames.signIn}>
                <Button>
                    <Text>Sign In Here</Text>
                </Button>
            </Link>
        </Row>
    </AuthTemplate>
);

export default SignUpPage