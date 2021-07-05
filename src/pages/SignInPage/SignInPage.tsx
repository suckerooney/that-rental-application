// Custom components
import AppTitle from '../../common/AppTitle/AppTitle';

import './SignInPage.less';
import AuthTemplate from "../templates/AuthTemplate/AuthTemplate";
import RouteNames from '../../common/RouteNames';
import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Typography } from "antd";

const { Text } = Typography;

const SignInPage: FC = () => (
    <AuthTemplate>
        <Row justify='center'>
            <AppTitle />
        </Row>
        <Row justify='center'>
            <Text>Sign In!</Text>
        </Row>
        <Row justify='center'>
            <Link to={RouteNames.signUp}>
                <Button>
                    <Text>Sign Up Here</Text>
                </Button>
            </Link>
        </Row>
    </AuthTemplate>
);

export default SignInPage