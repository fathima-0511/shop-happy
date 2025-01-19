import react from 'react';
import './login.css'

export function Login(){
    return(
        <div className="container">
            <form className="form-login alert alert-warning alert-dismissible">

                <h3 className="bi bi-person-fill">User Login</h3>
                <button data-bs-dismiss="alert" className="btn btn-close"></button>

                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" className="form-control" /></dd>

                    <dt>Password</dt>
                    <dd><input type="password" className="form-control" /></dd>

                </dl>

                <button className="btn btn-warning">LogIn</button>
            </form>
        </div>
    )
}