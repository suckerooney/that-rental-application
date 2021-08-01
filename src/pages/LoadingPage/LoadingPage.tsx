import { FC } from "react";
import "./LoadingPage.less";

// Packages
import { Spin } from "antd";

const LoadingPage: FC = () => {
  return (
    <div className="flex">
      <Spin size="large" />
    </div>
  );
};

export default LoadingPage;
