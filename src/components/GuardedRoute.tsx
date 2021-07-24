import { FC } from "react";
import Routes from "common/Routes";
import AuthType from "common/AuthType";

// Packages
import { Redirect, Route } from "react-router-dom";

type Props = {
  path: string;
  authType: AuthType;
  allowed: AuthType[];
  component: FC;
  exact?: boolean;
};

const GuardedRoute: FC<Props> = ({
  path,
  authType,
  allowed,
  component,
  exact = false,
}) => {
  const shouldRenderRoute = (): boolean => {
    let shouldRender = false;

    for (var type of allowed) {
      if (authType === type) {
        shouldRender = true;
        break;
      }
    }

    return shouldRender;
  };

  return shouldRenderRoute() ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to={Routes.default} />
  );
};

export default GuardedRoute;
