import estilo from '../modules/form.module.css'
import { useState } from 'react';
import validation from './validation';

const Form = ({login})=>{
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState(
        {
            email: '',
            password: ''
        });

    const handleChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name] : event.target.value
        }))
    };
    
    const handleSubmit = (event)=>{
        event.preventDefault();
        login(userData);
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <div className={estilo.contenedor}>
                <div className={estilo.subContenedor}>
                    <img className={estilo.img} src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png" alt="" />
                        <div className={estilo.contenedor}>
                            <label htmlFor='email'>Email</label>
                                <input type="text" name="email" value={userData.email} onChange={handleChange}/>
                                    {
                                        errors.email && <p style={{color: 'red'}}>{errors.email}</p>
                                    }
                                    <label htmlFor='password'>Password</label>
                                        <input type="password" name="password" value={userData.password} onChange={handleChange}/>
                                        {
                                        errors.password && <p style={{color: 'red'}}>{errors.password}</p>
                                        }
                                            </div>
                                                <div className={estilo.contenedor}>
                                                    <button className={estilo.boton}>Entrar</button>
                                                        </div>
                </div>
            </div>
        </form>
    );
}


export default Form;
