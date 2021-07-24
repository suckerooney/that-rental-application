import { FC } from "react";
import "./WrittenTitle.less";

//Packages
import Title from "antd/lib/typography/Title";

type Props = {
  text: string;
  level?: 5 | 1 | 2 | 3 | 4;
  varient?: "dark" | "light";
};

const WrittenTitle: FC<Props> = ({
  text,
  level = 1,
  varient = "dark",
}: Props) => (
  <Title className={`app-title ${varient}`} level={level}>
    {text}
  </Title>
);

export default WrittenTitle;
