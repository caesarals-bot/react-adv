
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink
} from "react-router-dom";

import logo from '../logo.svg';

import { FormikAbstractation, FormikBasicPage, FormikComponents, FormikYupPage, RegisterPage } from "../03-forms/pages";
export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink
                                className={({ isActive }) => isActive ? 'nav-active' : ''}
                                to="register"
                            >Register</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to="/formik-basic">Formik Basic</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to="/formik-yup">Formik Yup</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to="/formik-components">Formik Components</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to="/formik-abstractation">Formik Abstractation</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to="/users">Users</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/formik-basic" element={<FormikBasicPage />} />
                    <Route path="/formik-yup" element={<FormikYupPage />} />
                    <Route path="/formik-components" element={<FormikComponents />} />
                    <Route path="/formik-abstractation" element={<FormikAbstractation />} />
                    <Route path="users" element={<h1>HolAS</h1>} />

                </Routes>

            </div>
        </BrowserRouter>
    )
}