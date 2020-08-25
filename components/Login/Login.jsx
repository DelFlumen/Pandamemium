import React from 'react';
import { reduxForm, Field } from "redux-form";
import { Input } from '../common/FormsControls/FormsControls';
import styles from '../common/FormsControls/FormsControls.module.css';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { loginThunkCreator, logoutThunkCreator } from "../../redux/authReducer";
import { withRouter, Redirect } from 'react-router-dom';

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMe, formData.captcha)

    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type={"password"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
            </div>

            {captchaUrl && <img alt="captcha" src={captchaUrl} />}
            {captchaUrl && <Field placeholder={"Symbols from image"} name={"captcha"} component={Input} validate={[required]}/>}

            { error && <div className={styles.formSummaryError}>
                {error}

            </div>}
            <div>
                <button>Sign in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl

})

export default connect (mapStateToProps, {loginThunkCreator, logoutThunkCreator}) (Login);