import React, { Component } from 'react';

class Login extends Component {
    onSubmit = event => {
        event.preventDefault();
        
        this.props.onLogin({
            username: this.usernameInput.value,
            password: this.passwordInput.value
        });
    };

    render() {
        return (
            <div className="content login-form">
                <form onSubmit={this.onSubmit} id="login">
                    <div className="mdc-textfield field-wrap">
                        <input
                            type="text"
                            name="username"
                            className="mdc-textfield__input field"
                            placeholder="Имя пользователя"
                            ref={input => this.usernameInput = input} />
                    </div>
                    
                    <div className="mdc-textfield field-wrap">
                        <input
                            type="password"
                            name="password"
                            className="mdc-textfield__input field"
                            placeholder="Пароль"
                            ref={input => this.passwordInput = input} />
                    </div>

                    <button type="submit" className="mdc-button mdc-button--primary mdc-button--raised">Войти</button>
                </form>
            </div>
        );
    }
}

export default Login;