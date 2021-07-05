import Title from "antd/lib/typography/Title";
import { FC } from "react";

// styles
import "./AppTitle.less";

const AppTitle: FC = () => (
  <Title className="app-title" level={2}>
    That Rental Application
  </Title>
);

export default AppTitle;
