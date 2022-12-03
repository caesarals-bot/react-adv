import {  useFormik } from "formik"

import * as Yup from 'yup'

export const FormikYupPage = () => {

    

    const { 
            handleSubmit, 
            errors, 
            touched,
            getFieldProps
            } = useFormik({
                initialValues: {
                    firstName: '',
                    lastName: '',
                    email: '',
                },
        onSubmit: values => {
            console.log(values)
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                            .max(15, 'Debe tener 15 caractereso menos')
                            .required('Requerido'),
            lastName: Yup.string()
                            .max(15, 'Debe tener 15 caractereso menos')
                            .required('Requerido'),
            email: Yup.string().required('Requerido').email('Debe de ser un correo valido'),
        })
    })

    return (
        <div>
            <h1>Formik Yup</h1>
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor='firtsName'>First Name</label>
                <input
                    type='text'
                    { ...getFieldProps('firstName')}
                />
                {touched.firstName && errors.firstName &&  <span>{ errors.firstName }</span> }

                <label htmlFor='lastName'>Last Name</label>
                <input
                    type='text'
                    { ...getFieldProps('lastName')}
                />
                { touched.lastName && errors.lastName &&  <span>{ errors.lastName }</span> }

                <label htmlFor='email'>Email Address</label>
                <input
                    type='email'
                    { ...getFieldProps('email')}
                />
                { touched.email && errors.email &&  <span>{ errors.email }</span> }

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}