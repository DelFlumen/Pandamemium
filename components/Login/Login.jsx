import React from 'react';
import { reduxForm, Field } from "redux-form";

const Login = () => {
    const onSubmit = (formData) => {

    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"}component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"}component={"input"}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"}component={"input"}/> remember me
            </div>
            <div>
                <button>Sign in</button>
            </div>
        </form>
    )
}

export default Login;