import { createContext } from "react";

const authContext = createContext({
  authenticated: true,
  login: () => {},
});

export default authContext;
