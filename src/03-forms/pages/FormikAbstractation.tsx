import {  Formik,Form} from "formik"
import * as Yup from 'yup'

import { MyCheckbox, MyTextInput, MySelect } from "../components";

export const FormikAbstractation = () => {
    
    return (
        <div>
            <h1>Formik Abstractation</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType:''
                }}
                onSubmit={ (values) => {
                    console.log(values)
                }}
                validationSchema = {
                    Yup.object({
                    firstName: Yup.string()
                                    .max(15, 'Debe tener 15 caractereso menos')
                                    .required('Requerido'),
                    lastName: Yup.string()
                                    .max(15, 'Debe tener 15 caractereso menos')
                                    .required('Requerido'),
                    email: Yup.string().required('Requerido').email('Debe de ser un correo valido'),
                    terms: Yup.boolean()
                                .oneOf([true], 'Debe de aceptar las condiciones'),
                    jobType: Yup.string()
                                    .notOneOf(['it-jr'], 'Esta opcion no es permitida')
                                    .required('Requerido')
                    })
                }
            >
                {
                    (formik) => (
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

                            <MySelect name="jobType"  label="job Type">
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr">IT Junior</option>
                            </MySelect>
                            
                            <MyCheckbox label="Terms & Conditions" name="terms" />

                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }
            </Formik>
            
        </div>
    )
}
