import React, {useState} from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

/* eslint-disable */

const Login = () => {
    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState('');
  
    const handleSubmit = (event) => {
      if (event) {
        event.preventDefault();
console.log("login api here")
      }
    }
    const handleInputChange = (event) => {
      event.persist();
        
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
      }

    return(
    <Layout>
        <SEO title="Login" />
        <div className="pink-top-image text-light d-flex align-items-center">
            <div className="text-center w-100 px-10">
                <h1 style={{fontSize:"3.5vw"}}>
                    <span className="p-2 px-4 bg-black-opacity">Login Your
                        <span className="text-brightblue"> Account</span>
                    </span>
                </h1>
            </div>
        </div>

        <div className="container mx-auto">
            <div className="mx-auto w-400px pt-0">
                <h2 style={{fontWeight: "bold"}}>Login</h2>
                <div className="form-group py-1">
                        <label className=""><h6>Email</h6></label>
                        <div class="icon_form">
  <span class="fas fa-envelope"></span>
  <input placeholder="example@gmail.com" maxlength="59" type="text" name="email" onChange={handleInputChange} value={inputs.email} required/>
</div>
                    </div>
                <h6 className="mt-4" style={{fontWeight: "bold"}}>Password</h6>
                <div class="icon_form">
  <span class="fas fa-lock"></span>
  <input placeholder="" maxlength="59" type="password" name="text" onChange={handleInputChange} value={inputs.password} required/>
</div>
                <div className="pt-3 text-gray">
                    <small>
                        <input type="checkbox" /> Remember Password
                    </small>
                </div>
                <button
                    className="btn radius btn-purple mt-4  px-5 py-2"
                >
                    Login
                </button>
                <div className="pt-3 mb-5">
                    <small className="text-secondary">Don't have an account?
                        <Link to="/employers-signup/">
                            <span className="text-success"> Sign Up Now</span>
                        </Link>
                    </small>
                </div>
            </div>
        </div>
    </Layout>

    )
}

export default Login
