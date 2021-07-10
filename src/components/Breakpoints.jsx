import { useMediaQuery } from "react-responsive";

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  return isMobile ? children : null;
};

export const Desktop = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 992 });
  return isMobile ? children : null;
};
