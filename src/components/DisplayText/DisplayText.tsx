import Text from "antd/lib/typography/Text";
import { FC } from "react";
import "./DisplayText.less";

type Props = {
  size?: "sm" | "md" | "lg";
  varient?: "dark" | "light";
};

const DisplayText: FC<Props> = ({
  size = "md",
  varient = "dark",
  children,
}) => <Text className={`display-text ${size} ${varient}`}>{children}</Text>;

export default DisplayText;
