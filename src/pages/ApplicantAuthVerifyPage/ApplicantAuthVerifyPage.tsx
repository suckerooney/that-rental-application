import { FC, useEffect } from "react";
import "./ApplicantAuthVerifyPage.less";

// Packages
import { Spin } from "antd";

const ApplicantAuthVerifyPage: FC = () => {
  useEffect(() => {
    console.log(window.localStorage.getItem("applicantEmail"));
  }, []);

  return (
    <div className="flex">
      <Spin size="large" />
    </div>
  );
};

export default ApplicantAuthVerifyPage;
