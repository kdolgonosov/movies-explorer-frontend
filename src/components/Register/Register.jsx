import './Register.css';
import FormWithTitle from '../FormWithTitle/FormWithTitle';

const Register = () => {
    return (
        <FormWithTitle title='Добро пожаловать!' btnTitle='Зарегистрироваться'>
            <label className='register__input-label'>Имя</label>
            <input type='text' className='register__input'></input>
            <label className='register__input-label'>E-mail</label>
            <input type='email' className='register__input'></input>
            <label className='register__input-label'>Пароль</label>
            <input type='password' className='register__input'></input>
        </FormWithTitle>
    );
};

export default Register;
