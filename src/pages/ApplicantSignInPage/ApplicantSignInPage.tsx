import { FC } from "react";

// App components
import DisplayText from "components/DisplayText/DisplayText";

// Pacakges
import { Row } from "antd";

const ApplicantSignInPage: FC = () => {
  return (
    <Row>
      <DisplayText size="sm">Enter your phone number</DisplayText>
    </Row>
  );
};

export default ApplicantSignInPage;
