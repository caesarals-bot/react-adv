
import {
    BrowserRouter as Router,
    Route,
    NavLink
  } from 'react-router-dom';
import { RegisterPage } from "../03-forms/pages/RegisterPage";

  import logo from '../logo.svg';

export const Navigation = () => {
    return (
        <Router>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo"/>
                    <ul>
                        <li>
                            <NavLink
                                className={ ({ isActive }) => isActive ? 'nav-active' : '' } 
                                to="/register"
                            >Register Page</NavLink>
                        </li>
                        <li>
                            <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : '' } to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : '' } to="/users">Users</NavLink>
                        </li>
                    </ul>
                </nav>

               
                        <Route path="/register" element={<RegisterPage />}/> 
                            
                        <Route path="users" element={<h1>Users</h1>} />
                        <Route path="/" element={<h1>Home</h1>} />
                    
                
                
            </div>
        </Router>
    )
}
