
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink
  } from "react-router-dom";

  import logo from '../logo.svg';
import { RegisterPage } from '../03-forms/pages/RegisterPage';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo"/>
                    <ul>
                        <li>
                            <NavLink
                                className={ ({ isActive }) => isActive ? 'nav-active' : '' } 
                                to="register"
                            >Register</NavLink>
                        </li>
                        <li>
                            <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : '' } to="/">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : '' } to="/users">Users</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="users" element={<h1>HolAS</h1>} />
                        <Route path="/" element={<h1>Inicio</h1>} />
                    
                </Routes>
                
            </div>
        </BrowserRouter>
    )
}