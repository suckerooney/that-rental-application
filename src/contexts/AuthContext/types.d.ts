type User = {
  name?: string | null;
  id: string;
};

type Auth = {
  loading?: any; // Use to render loading component if auth state hasn't loaded
  user?: User;
  type: AuthType;
};
