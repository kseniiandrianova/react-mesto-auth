import React from 'react';

export default function Login (props){
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit({email, password})
    }


    return (
        <div className="register">
            <form className="register__form " name="register-form" onSubmit={handleSubmit}>
                <h2 class="register__title">Вход</h2>
                <input type="email" className="register__input" placeholder="Email" value={email} onChange={handleEmailChange} required />
                <input  type="password" className="register__input register__input_password" placeholder="Пароль" value={password} onChange={handlePasswordChange} required />
                <button class="register__button" type="submit">Войти</button>
            </form>
        </div>
    )
}