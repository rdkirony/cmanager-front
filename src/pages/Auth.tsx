import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TokenContext from "../context/TokenContext";
import { login } from "../services/auth";
import graduation from "../imgs/copyright.png";

export function Auth() {
  const [loginUsername, setLoginUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginInvalidMessage, setLoginInvalidMessage] = useState<string>("");
  let navigate = useNavigate();
  const tokenContext = useContext(TokenContext);
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    login(loginUsername, password).then(
      () => {
        navigate("/opcoes");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setLoginInvalidMessage(resMessage);
      }
    );
    setLoginUsername("");
    setPassword("");
    setLoginInvalidMessage("");
  };

  useEffect(() => {
    tokenContext.token ? navigate("/opcoes") : "";
  }, []);

  return (
    <div>
      <div className="Auth-form-container">
        <form className="Auth-form row" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Entrar</h3>
            <div className="form-group mt-3">
              <label>Login</label>
              <input
                type="login"
                className="form-control mt-2"
                placeholder="Insira seu login"
                value={loginUsername}
                onChange={(event) => setLoginUsername(event.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Senha</label>
              <input
                type="password"
                className="form-control mt-2"
                placeholder="Insira sua senha"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            {loginInvalidMessage && (
              <div className="erro-ao-logar mt-2" role="alert">
                {loginInvalidMessage}
              </div>
            )}
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary btn-entrar">
                Entrar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
