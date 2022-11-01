import { BrowserRouter } from "react-router-dom"
import {
    Routes,
    Route,
    NavLink
  } from "react-router-dom";

  import logo from '../logo.svg';

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
                                to="/"
                            >Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : '' } to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : '' } to="/users">Users</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                        <Route path="about" element={<h1>About</h1>} />
                        <Route path="users" element={<h1>Users</h1>} />
                        <Route path="/" element={<h1>Home</h1>} />
                    
                </Routes>
                
            </div>
        </BrowserRouter>
    )
}
