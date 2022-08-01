import { Col, Container, Row } from "react-bootstrap";

export function Auth() {
    return (
        <div className="Auth-form-container">
            <form className="Auth-form row">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Entrar</h3>
                    <div className="form-group mt-3">
                        <label>Login</label>
                        <input
                            type="login"
                            className="form-control mt-2"
                            placeholder="Insira seu login"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Senha</label>
                        <input
                            type="password"
                            className="form-control mt-2"
                            placeholder="Insira sua senha"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Entrar
                        </button>
                    </div>
                    <p className="forgot-password text-center mt-3">
                        <a href="#">Não consigo acessar minha conta</a>
                    </p>
                </div>
            </form>
        </div>
    )
}