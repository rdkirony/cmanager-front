import { createContext } from "react";

type TokenProps = {
  token: string | null;
  perfilId: string | null;
};

const TokenContext = createContext<TokenProps>({
  token: localStorage.getItem("token"),
  perfilId: localStorage.getItem("perfilId")
});

export default TokenContext;
