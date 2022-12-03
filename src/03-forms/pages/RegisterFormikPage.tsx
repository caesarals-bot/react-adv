import { Form, Formik, yupToFormErrors } from 'formik'
import * as Yup from 'yup'
import { MyCheckbox, MyTextInput } from '../components'


import '../styles/styles.css'

export const RegisterFormikPage = () => {


    return (
        <div>
            <h1>Formik Register Page</h1>

            <Formik 
                initialValues={{
                    firstName:'',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType:''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema = {
                    Yup.object({
                        firstName: Yup.string()
                                        .min(3, 'Nombre muy corto')
                                        .max(15, 'Debe tener 15 caractereso menos' )
                                        .required('Requerido'),
                        lastName: Yup.string()
                                        .max(15, 'Debe tener 15 caractereso menos')
                                        .required('Requerido'),
                        email: Yup.string().required('Requerido').email('Debe de ser un correo valido'),
                        terms: Yup.boolean()
                                    .oneOf([true], 'Debe de aceptar las condiciones'),
                        password: Yup.string()
                                        .required('Debe ingresar una contraseña')
                                        .min(8, 'Debe tener almenos 8 caracteres'),
                        passwordConfirmation: Yup.string()
                                                    .required()
                                                    .oneOf([Yup.ref('password'), null], 'La contraseña no es igual')
                    })
                }
            >
                {
                    ({ handleReset }) => (
                        <Form>

                            <MyTextInput 
                                label="First Name" 
                                name="firstName"
                                placeholder="Name"
                            />
                            
                            <MyTextInput 
                                label="Last Name" 
                                name="lastName"
                                placeholder="Last Name"
                            />

                            <MyTextInput 
                                label="Email Address" 
                                name="email"
                                placeholder="Email"
                                type="email"
                            />

                            <MyTextInput 
                                label="Password" 
                                name="password"
                                placeholder="Password"
                                type="password"
                            />

                            <MyTextInput 
                                label="Password Confirmation" 
                                name="passwordConfirmation"
                                placeholder="Password Confirmation"
                                type="password"
                            />
                            
                            <MyCheckbox label="Terms & Conditions" name="terms" />

                            <button type='submit'>Create</button>
                            <button onClick={handleReset} type='submit'>Reset form  </button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
