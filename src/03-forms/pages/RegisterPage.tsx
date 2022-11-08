import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm'
import '../styles/styles.css'

export const RegisterPage = () => {

    const{ 
        onChange, 
        formData, 
        name, email, 
        password1, 
        password2,
        resetForm,
        isValidEmail
    } = useForm({
                    name: '',
                    email:'',
                    password1:'',
                    password2:''
                })

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        console.log(formData)
    }

    

  return (
    <div>
        <h1>Register Page</h1>

        <form noValidate onSubmit={(e) => onSubmit(e)}>
            <input 
                type="text"
                name='name'
                value={name}
                placeholder="Name"
                onChange={ onChange }
                className={`${name.trim().length <= 0 && 'has-error'}`}
            />
            { name.trim().length <= 0 && <span>Este campo es necesario</span>}
            <input 
                type="email"
                name='email'
                placeholder="Email" 
                value={email}
                onChange={ onChange }
                className={`${!isValidEmail(email) && 'has-error'}`}
            />
            { !isValidEmail(email) && <span>Email no es valido</span>}
            <input 
                type="password"
                name='password1'
                placeholder="Password" 
                value={password1}
                onChange={ onChange }
            />
            { password1.trim().length <= 0 && <span>Este campo es necesario</span>}
            { password1.trim().length < 6 && password1.trim().length> 0 && <span>La contraseña tiene que tener 6 Caracteres</span>}
            <input 
                type="password"
                name='password2'
                placeholder="Repeat Password"
                value={password2}
                onChange={ onChange } 
            />
            { password2.trim().length <= 0 && <span>Este campo es necesario</span>}
            { password2.trim().length > 0 && password1 === password2 && <span>Las contraseñas deben de ser iguales</span>}

            <button type="submit">Create</button>
            <button type="button" onClick={resetForm} >Reset Form</button>
        </form>
    </div>
  )
}
