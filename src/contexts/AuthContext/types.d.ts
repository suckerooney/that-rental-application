type User = {
  name?: string | null;
  id: string;
};

type Auth = {
  user?: User;
  type: AuthType;
};
