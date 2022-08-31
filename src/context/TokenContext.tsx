import { createContext } from "react";

type TokenProps = {
  token: string | null;
};

const TokenContext = createContext<TokenProps>({
  token: localStorage.getItem("token"),
});

export default TokenContext;
