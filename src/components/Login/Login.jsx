import './Login.css';
import FormWithTitle from '../FormWithTitle/FormWithTitle';

const Login = () => {
    return (
        <FormWithTitle title='Рады видеть!' btnTitle='Войти'>
            <label className='login__input-label'>E-mail</label>
            <input type='email' className='login__input'></input>
            <label className='login__input-label'>Пароль</label>
            <input type='password' className='login__input'></input>
        </FormWithTitle>
    );
};

export default Login;
