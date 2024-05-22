import { UserIcon } from "../icons/UserIcon";
import { LockIcon } from "../icons/LockIcon";

export const Login = () => {
    return (
        <section id="login-main">
            <div id="container-img"><img src="src/assets/logo-istel.png" /></div>
            <form className="form-is">
                <div className="container-form1">
                    <h2 id="txt-t">INICIAR SESIÓN</h2>
                </div>
                <div className="container-form2">
                    <div id="container-input">
                        <div className="i-f">
                            <input className="i-is" type="text" placeholder="Tu nombre de usuario"/>
                            <UserIcon className='icon' />
                        </div>
                        <div className="i-f">
                            <input className="i-is" type="password" placeholder="Tu clave secreta"/>
                            <LockIcon className='icon' />
                        </div>
                    </div>
                    <div id="container-check">
                        <input id="i-ch" type="checkbox"/>
                        <p className="txt-p">Recuerdame</p>
                    </div>
                </div>
                <div className="container-form3">
                    <button id="btn-conectar">CONECTAR</button>
                </div>
                <div className="container-form4">
                    <p className="txt-p">Desarrollado por iSTEL</p>
                </div>
            </form>
        </section>
    );
};

export default Login;